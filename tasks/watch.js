var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init({
    notify:false,
    server:{
      baseDir: 'app'
    }
  });

  watch('./app/index.html', function(){
    browserSync.reload()
  })

  watch('./app/styles/styles.css', function(){
    gulp.start('cssInject')
  })

});

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/styles/temp/styles.css')
        .pipe(browserSync.stream())
});
