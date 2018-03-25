var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hello Alex');
});

gulp.task('less', function () {
  return gulp.src('app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'less'], function (){
  gulp.watch('app/less/**/*.less', ['less']);
  // Other watchers
  gulp.watch('app/**/*.html', browserSync.reload);
  // gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})