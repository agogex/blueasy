var gulp = require("gulp");
var sass = require("gulp-sass");
var jade = require("gulp-pug");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var inject = require("gulp-inject");

var inputSass = "./src/sass/**/*.scss";
var outputSass = "./dist/css"
var inputJade = "./src/jade/*.pug";
var outputJade = "./dist";


gulp.task("sass", function() {
    return gulp
        .src(inputSass)
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(outputSass));
});

gulp.task("jade", function() {
    return gulp
        .src(inputJade)
        .pipe(jade())
        .pipe(inject(gulp.src("./dist/css/**/*.css", {
            read: false
        })))
        .pipe(gulp.dest(outputJade));
});

gulp.task("watch", function() {
    gulp.watch(inputSass, ["sass"]);
    gulp.watch("./src/jade/**/*.pug", ["jade"]);
});