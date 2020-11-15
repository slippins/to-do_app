const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const rename = require("gulp-rename");

function styles() {
    return(
        gulp.src("css/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("css"))
    );
}

function javascript() {
    return(
        gulp.src(["js/*.js", "!js/*min.js"])
            .pipe(sourcemaps.init())
            .pipe(terser())
            .pipe(rename({
                suffix:".min"
            }))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("js"))
    );
}

function watch(){
    gulp.watch("css/*.scss", styles);
    gulp.watch(["js/*.js", "!js/*min.js"], javascript);

}

exports.styles = styles;
exports.javascript = javascript;
exports.watch = watch;