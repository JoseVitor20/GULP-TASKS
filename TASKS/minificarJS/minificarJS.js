import gulp from 'gulp';
import minificarJS from 'gulp-minify.js';

function MinicacãoJS() {
    return gulp.src('CONTENT/js/*.js')
        .pipe(minificarJS())
        .pipe(gulp.dest('DIST/minificarJS/'))
}

function AssistirMinificacaoJS() {
    return gulp.watch('CONTENT/js/*.js', MinicacãoJS);
}

export { MinicacãoJS, AssistirMinificacaoJS }