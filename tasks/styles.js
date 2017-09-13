var gulp = require('gulp'),
postcss = require('gulp-postcss'),
prefix = require('autoprefixer'),
cssnest = require('postcss-nested'),
cssvars = require('postcss-simple-vars');


gulp.task('styles', function(){

  return gulp.src('./app/styles/styles.css')
        .pipe(postcss([cssnest, cssvars, prefix]))
        .on('error', function(errorInfo){
          console.log(errorInfo.toString())
          this.emit('end')
        })
        .pipe(gulp.dest('./app/styles/temp'))
});
