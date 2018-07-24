const gulp = require('gulp')
const streamqueue = require('streamqueue')
const browserSync = require('browser-sync').create()
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const pump = require('pump')
const gulpIf = require('gulp-if')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')
const del = require('del')
const runSequence = require('run-sequence')

// File paths
const paths = {
  html: 'app/index.html',
  css: ['app/css/*.css', '!app/css/*.min.css'],
  cssMin: 'app/css/*.min.css',
  js: 'app/js/*.js',
  images: 'app/images/**/*.+(png|jpg|gif|svg)',
  fonts: 'app/fonts/**/*',
}

// browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
    browser: 'Google Chrome Canary',
  })
})

// Build HTML for prod
gulp.task('html', function() {
  return gulp
    .src(paths.html)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest('.'))
})

// Build css for prod
gulp.task('css', function() {
  const plugins = [
    autoprefixer({ browsers: ['last 3 versions'] }),
    cssnano({ zindex: false }),
  ]

  return streamqueue(
    { objectMode: true },
    gulp
      .src(paths.css)
      .pipe(sourcemaps.init())
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write()),
    gulp.src(paths.cssMin)
  ).pipe(gulp.dest('css'))
})

// Build JS for prod
gulp.task('js', function(cb) {
  pump(
    [
      gulp.src(paths.js),
      sourcemaps.init(),
      gulpIf('!*.min.js', uglify()),
      sourcemaps.write(),
      gulp.dest('js'),
    ],
    cb
  )
})

// Optimize images for prod
gulp.task('images', function() {
  return (
    gulp
      .src(paths.images)
      // cache images that run through imagemin
      .pipe(cache(imagemin()))
      .pipe(gulp.dest('images'))
  )
})

// Copy fonts for prod
gulp.task('fonts', function() {
  return gulp.src(paths.fonts).pipe(gulp.dest('fonts'))
})

// Watch task for development with browser reload on change
gulp.task('watch', ['browserSync'], function() {
  // Other watchers
  // Reloads the browser whenever HTML, CSS or JS files change
  // Reload on any changes in fonts or images
  gulp.watch('app/*.html', browserSync.reload)
  gulp.watch('app/css/**/*.css', browserSync.reload)
  gulp.watch('app/js/**/*.js', browserSync.reload)
  gulp.watch('app/images/*', browserSync.reload)
  gulp.watch('app/fonts/*', browserSync.reload)
})

// Build all files for prod
gulp.task('build', function(callback) {
  console.log('Building files')
  runSequence('build:clean', ['html', 'css', 'js', 'images', 'fonts'], callback)
})

// Delete all build files
gulp.task('build:clean', function() {
  console.log('Deleteing all build files')
  return del(['css/**', 'fonts/**', 'images/**', 'js/**', 'index.html'])
})

// Clear images in cache
gulp.task('cache:clean', function(callback) {
  console.log('Clearing cache')
  return cache.clearAll(callback)
})

// Delete all build files and cached
gulp.task('clean', ['cache:clean', 'build:clean'], function() {
  console.log('Deleting build files and clearing cache')
})
