// Gulp and plugins.
const gulp                  = require('gulp');
const gulpMinifyJs          = require('gulp-minify');
const gulpCleanCss          = require('gulp-clean-css');
const gulpHTMLValidation    = require('gulp-html-validator');
const gulpPrettifyHTML      = require('gulp-html-prettify');
const gulpRename            = require('gulp-rename');
const gulpJSONPrettyfier    = require('gulp-json-format');
const gulpZip               = require('gulp-zip');
const gulpRunSequence       = require('run-sequence');
const gulpTemplate          = require('gulp-template');

// Other plugins/packages.
const del                   = require('del');

// Configuration file.
var config = require('./gulp/config').getConfig();
var nonMinifyFiles = config.nonMinifyFiles;
var deploy = config.deploy;


/**
 * Minifier for CSS files.
 */
gulp.task("minify-css", function(callback) {    
    gulp.src("src/**/*.css")
        .pipe(gulpCleanCss())
        .pipe(gulp.dest(deploy.path))
        .on("end", callback);
});

/**
 * Minifier for JS files.
 */
gulp.task("minify-js", function(callback) {
    gulp.src("src/**/*.js")
        .pipe(gulpMinifyJs({
            ext: {min: ".js"},
            noSource: true,
            ignoreFiles: nonMinifyFiles
        }))
        .pipe(gulp.dest(deploy.path))
        .on("end", callback);
});

/**
 * Minifier task.
 * 
 * Minifies the css and js files and places them to the destination folder.
 */
gulp.task("minify", ["minify-css", "minify-js"], function(callback) {
    callback();
});

/**
 * Prettifier task.
 * 
 * Prettifies the HTML files and places them to the destination folder.
 */
gulp.task("prettify", function(callback) {
    gulp.src("src/**/*.html")
        .pipe(gulpPrettifyHTML({
            indent_char: " ",
            indent_size: 4
        }))
        .pipe(gulp.dest(deploy.path))
        .on("end", callback);
});

/**
 * Validation task.
 * 
 * Validates the HTML files and logs the errors/warnings of the HTML page after validation.
 */
gulp.task("validate", function(callback) {
    gulp.src("src/**/*.html")
        .pipe(gulpHTMLValidation())
        .pipe(gulpJSONPrettyfier(2))
        .pipe(gulpRename({
            extname: ".json"
        }))
        .pipe(gulp.dest("./html-validation"))
        .on("end", callback);
});

/**
 * Packs the project to the deployment folder and adds the remaining leftover files
 * that have not been processed by other tasks.
 */
gulp.task("pack", ["minify", "prettify"], function(callback) {
    gulp.src("./src/**/!(*.js|*.css|*.html)")
        .pipe(gulp.dest(deploy.path))
        .on("end", callback);
})

/**
 * Deployment task.
 * 
 * Deploys the current state of the project and minifies or prettifies the files.
 */
gulp.task("deploy", ["clean"], function(callback) {
    gulpRunSequence("build", callback);
});

/**
 * Build task.
 * 
 * Build the project by running the dependencies simultaneously.
 */
gulp.task("build", ["pack"], function(callback) {
    callback();
});

/**
 * Clean task.
 * 
 * Cleans the release folder by deleting the entire folder and anything in it.
 */
gulp.task("clean", function(callback) {
    return del(`${config.deploy.path}`, callback);
});

/**
 * Hard clean.
 * 
 * Cleans all zips and builds of the project.
 */
gulp.task("hard-clean", function(callback) {
    return del(`${config.deploy.root}`, callback);
});

/**
 * Release task.
 * 
 * Deploys the entire project and compresses all the files into a single zip file, ready to be sent
 * to the client.
 */
gulp.task("release", ["deploy"], function() {
    gulp.src(`${config.deploy.path}/**`)
        .pipe(gulpZip(`${config.fileName}-rev-${config.revision}.zip`))
        .pipe(gulp.dest(`${config.deploy.zips}`))
        .on("end", () => config.set("revision", config.revision + 1));
});

/**
 * Setup task.
 * 
 * Sets up a new environment for a new project.
 */
gulp.task("setup", function(callback) {
    if (config.initialized) {
        console.log("Configuration file has already been initialized.");
    } else {

        function initHTML(data, callback) {
            gulp.src("./gulp/template/main.html")
                .pipe(gulpTemplate({data: data, config: config}))
                .pipe(gulp.dest(config.source))
                .on("end", callback);
        }

        function initCSS(data, callback) {
            gulp.src("./gulp/template/css/template.css")
                .pipe(gulpRename(path => {
                    path.dirname += "/css";
                    path.basename = data.fileName;
                }))
                .pipe(gulp.dest(config.source))
                .on("end", callback);
        }

        function initJS(data, callback) {
            gulp.src("./gulp/template/js/template.js")
                .pipe(gulpRename(path => {
                    path.dirname += "/js";
                    path.basename = data.fileName;
                }))
                .pipe(gulp.dest(config.source))
                .on("end", callback);
        }

        config.initialize(function(data) {
            config = require('./gulp/config').getConfig();
            initHTML(data, () => initCSS(data, () => initJS(data, () => callback())));
        });
    }
});
