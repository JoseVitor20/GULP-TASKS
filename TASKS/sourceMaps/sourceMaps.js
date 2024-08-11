import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';


function SourceMapsSASS() {
    return gulp.src('DIST/cleanCss/*.css')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('DIST/sourceMaps/'));
}

function SourceMapsJS() {
    return gulp.src('DIST/minificarJS/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('DIST/sourceMaps/'));
}

export { SourceMapsSASS, SourceMapsJS }