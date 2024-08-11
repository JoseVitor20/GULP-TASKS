import gulp from 'gulp';
import size from 'gulp-size';

function TamanhoProjeto() {
    return (gulp.src('DIST/otimizarIMG/*.jpg'))
        // return (gulp.src('DIST/otimizarIMG/*.js'))
        .pipe(size())
        .pipe(gulp.dest('DIST/projectSize/'))
}

function AssistirProjeto() {
    return gulp.watch('TASKS/*', TamanhoProjeto)
}

export { TamanhoProjeto, AssistirProjeto }