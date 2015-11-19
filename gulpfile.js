var gulp         = require('gulp')
var postcss      = require('gulp-postcss')
var autoprefixer = require('autoprefixer')

gulp.task('css', function() {
  return gulp.src('./css/style.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('./build'))
})
