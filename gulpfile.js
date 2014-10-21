var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('build', function () {
    return gulp.src('assets/stylesheets/helper-classes.scss')
        .pipe(sass({
          style : 'compressed'
        }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('assets/stylesheets'));
});

gulp.task('default', ['build']);
