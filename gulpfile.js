const gulp = require('gulp');
const jade = require('gulp-jade');

gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./lib/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});
