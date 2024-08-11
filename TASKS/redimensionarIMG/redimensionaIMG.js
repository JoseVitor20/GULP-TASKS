import gulp from 'gulp';
import redimesionarImagem from 'gulp-rezzy';

function RedimensionamentoDeImagem() {
    return gulp.src('CONTENT/img/*')
        .pipe(redimesionarImagem([{
            width: 40,
            suffix: '-sm'
        },
            // {
            //     width: 1280,
            //     suffix: '-md'
            // },
            // {
            //     width: 1920,
            //     suffix: '-lg'
            // }
        ]))
        .pipe(gulp.dest('DIST/redimensionarIMG/'))
}

function AssitirRedimensionamentoDeImagem() {
    return gulp.watch('CONTENT/img/*', RedimensionamentoDeImagem)
}

export { RedimensionamentoDeImagem, AssitirRedimensionamentoDeImagem }