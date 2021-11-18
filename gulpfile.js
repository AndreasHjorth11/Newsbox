const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const gulp = require("gulp");
const babel = require("gulp-babel");


function buildStyles() 
{
    return src('./SCSS/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('css'))
}

function buildJavascript()
{
    return src("js/**/*.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(dest("dist"));
}

function watchTask() {
    watch(['*/**/*.scss', 'js/**/*.js', '*.html'], series(buildStyles, buildJavascript))
}

exports.default = series(buildStyles, buildJavascript, watchTask)