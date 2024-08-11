import gulp from 'gulp';
import { SourceMapsSASS, SourceMapsJS } from "./TASKS/sourceMaps/sourceMaps.js";

gulp.task('SourceMaps', gulp.series(
    gulp.parallel(SourceMapsSASS),
    gulp.parallel(SourceMapsJS)
));