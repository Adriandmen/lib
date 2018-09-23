const fs = require('fs');
const prompt = require('prompt');
const constants = require('./consts')

const CONFIG_FILE = "./gulp/config.data";
var jsonContent = undefined;

/**
 * Sanitizes the JSON, such that it is able to be parsed by the JSON.parse method.
 * @param {string} json - The JSON in string representation.
 */
var sanitizeJSON = function(json) {
    return json.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
}

/**
 * Retrieves the content of the configuration file. Reads in the file and parses the JSON
 * if the file has not been read before in this session.
 */
function getContent() {
    if (jsonContent === undefined) {
        try {
            jsonContent = JSON.parse(sanitizeJSON(fs.readFileSync(CONFIG_FILE, "utf8").replace("\r\n", "\n")));
        } catch(err) {
            err = "Could not retrieve the config.data file. Are you sure that the project has been initialized?";
            throw err;
        } 
        return jsonContent;
    } else {
        return jsonContent;
    }
}

/**
 * Initializes the new configuration file.
 * @param {Function} callback - The callback function.
 */
function initializeConfig(callback) {

    prompt.get(constants.CONFIG_DATA, function(err, result) {

        // Construct the configuration JSON from the input.
        jsonContent = {
            "title": result.title,
            "fileName": result.fileName,
            "revision": 1,
            "nonMinifyFiles": [],
            "deploy": {
                "root": "./target",
                "path": "./target/project",
                "zips": "./target/zips"
            },
            "source": `./${result.srcPath}`,
            "initialized": true
        };

        // Write the data to the file and call the callback method.
        fs.writeFile("./gulp/config.data", JSON.stringify(jsonContent, null, 4), function (err) {
            callback(result);
        })
    });
}

/**
 * Method that retrieves the configuration file.
 */
function getConfig() {
    return {
        title: getContent().title,
        fileName: getContent().filename,
        initialized: getContent().initialized,
        revision: getContent().revision,
        nonMinifyFiles: getContent().nonMinifyFiles,
        deploy: {
            root:   getContent().deploy.root,
            path:   getContent().deploy.path,
            zips:   getContent().deploy.zips
        },
        set: function(field, value) {
            eval(`jsonContent.${field} = ${value}`);
            fs.writeFile(CONFIG_FILE, JSON.stringify(jsonContent, null, 4));
        },
        initialize: initializeConfig,
        source: getContent().source
    }
}

module.exports.getConfig = getConfig;