import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';

function AutoPrefixo() {
    return gulp.src('CONTENT/css/autoPrefixo/*.css') // Usando caminho relativo
        .pipe(autoprefixer({ cascade: false }))
        .pipe(gulp.dest('DIST/autoPrefixo/')); // Destino pode ser uma pasta, não um arquivo
}

function AssistirPrefixo() {
    gulp.watch('DIST/autoPrefixo/', AutoPrefixo); // Usando caminho relativo
}

export { AutoPrefixo, AssistirPrefixo };
