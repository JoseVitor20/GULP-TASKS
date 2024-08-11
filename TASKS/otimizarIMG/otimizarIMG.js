import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import mozjpeg from 'imagemin-mozjpeg';

function OtimizarTarefa() {
    return gulp.src('CONTENT/img/*')
        .pipe(imagemin([pngquant(), mozjpeg()]))
        .pipe(gulp.dest('DIST/otimizarIMG/'));
};

function AssistirOtimização() {
    return gulp.watch('CONTENT/img/*', OtimizarTarefa)
}

export { OtimizarTarefa, AssistirOtimização };

