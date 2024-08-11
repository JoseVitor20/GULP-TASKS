import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';

function LimparCss() {
    return gulp.src('TASKS/cleanCss/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('DIST/cleanCss'))
}

function AssistirCss() {
    return gulp.watch('DIST/cleanCss*.css');
}

export { LimparCss, AssistirCss };