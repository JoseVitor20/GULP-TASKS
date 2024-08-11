import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

function CompilarSass() {
    return gulp.src('CONTENT/css/compilarSass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('DIST/compilarSass/'))
}

function AcompanharCopilaçãoSass() {
    return gulp.watch('CONTENT/css/compilarSass/', CompilarSass);
}

export { CompilarSass, AcompanharCopilaçãoSass }