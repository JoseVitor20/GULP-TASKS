import gulp from 'gulp';
import ConcatenarArquivos from 'gulp-concat';

function ConcatenarJS() {
    return gulp.src('CONTENT/js/*.js')
        .pipe(ConcatenarArquivos('all.js'))
        .pipe(gulp.dest('DIST/ConcatenarArquivos/'))
}

function AssistirConcatenaçãoJS() {
    return gulp.watch('CONTENT/js/*.js', ConcatenarJS)
}

export { ConcatenarJS, AssistirConcatenaçãoJS }