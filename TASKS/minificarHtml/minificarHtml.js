import gulp from 'gulp';
import minificarHtml from 'gulp-htmlmin';

function MinificarHtml() {
    return gulp.src('CONTENT/html/*.html')
        .pipe(minificarHtml({ collapseWhitespace: true }))
        .pipe(gulp.dest('DIST/minificarHtml/'))
}

function AssistirMinicaçãoHtml() {
    return gulp.watch('CONTENT/html/*.html', MinificarHtml)
}

export { MinificarHtml, AssistirMinicaçãoHtml }