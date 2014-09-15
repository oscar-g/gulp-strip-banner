# gulp-strip-banner
Removes unprotected comment banners (/** */ and /* */) from the top of files.

## Installation
`npm install gulp-strip-banner'

##Usage
```js
var gulp = require('gulp'),
    strip = require('gulp-strip-banner');

gulp.task('strip', function(){
  gulp.src('path/to/file')
    .pipe(strip())
    .pipe(gulp.dest('./path/to/dest')
})
````

Currently, only buffer is supported.

