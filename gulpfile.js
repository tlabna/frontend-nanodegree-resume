const gulp = require('gulp')
const streamqueue = require('streamqueue')
const browserSync = require('browser-sync').create()
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const pump = require('pump')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')
const del = require('del')
const runSequence = require('run-sequence')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
// const gulpIf = require('gulp-if')
// const rename = require('gulp-rename')

// File paths
const paths = {
  html: 'app/index.html',
  css: {
    cssRootDir: 'app/css',
    cssSourceFiles: [
      'app/css/*.css',
      '!app/css/*.min.css',
      '!app/css/styles.css',
    ],
    cssToBuild: ['app/css/styles.css'],
    cssMin: 'app/css/*.min.css',
  },
  js: {
    jsSourceFiles: [
      'app/js/*.js',
      '!app/js/resumeBuilder.js',
      '!app/js/*.min.js',
    ],
    jsRootDir: 'app/js',
    jsToBuild: 'app/js/resumeBuilder.js',
    jsMin: 'app/js/*.min.js',
  },
  images: 'app/images/**/*.+(png|jpg|gif|svg|ico)',
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

// Build css for production w/o source map
gulp.task('css', function() {
  const plugins = [
    autoprefixer({ browsers: ['last 3 versions'] }),
    cssnano({ zindex: false }),
  ]
  const { cssToBuild, cssMin } = paths.css

  return streamqueue(
    { objectMode: true },
    gulp
      .src(cssToBuild)
      .pipe(postcss(plugins))
      .pipe(concat('styles.css')),
    gulp.src(cssMin)
  ).pipe(gulp.dest('css'))
})

// Build css for production w/ source map
gulp.task('css:sourcemap', function() {
  const plugins = [
    autoprefixer({ browsers: ['last 3 versions'] }),
    cssnano({ zindex: false }),
  ]
  const { cssToBuild, cssMin } = paths.css

  return streamqueue(
    { objectMode: true },
    gulp
      .src(cssToBuild)
      .pipe(sourcemaps.init())
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write())
      .pipe(concat('styles.css')),
    gulp.src(cssMin)
  ).pipe(gulp.dest('css'))
})

// Build JS for production w/o source map
gulp.task('js', function(cb) {
  const { jsToBuild, jsMin } = paths.js
  const minBuild = pump(
    [
      gulp.src(jsToBuild),
      babel({
        presets: ['env'],
      }),
      uglify(),
    ],
    cb
  )

  streamqueue({ objectMode: true }, minBuild, gulp.src(jsMin)).pipe(
    gulp.dest('js')
  )
})

// Build JS for production w/ source map
gulp.task('js:sourcemap', function(cb) {
  const { jsToBuild, jsMin } = paths.js
  const minBuild = pump(
    [
      gulp.src(jsToBuild),
      sourcemaps.init(),
      babel({
        presets: ['env'],
      }),
      uglify(),
      sourcemaps.write(),
      // gulp.dest('js'),
    ],
    cb
  )

  streamqueue({ objectMode: true }, minBuild, gulp.src(jsMin)).pipe(
    gulp.dest('js')
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

// Concat css files for dev
gulp.task('concatCSS', () => {
  const { cssSourceFiles, cssRootDir } = paths.css

  return gulp
    .src(cssSourceFiles)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(cssRootDir))
})

// Concat JS files for dev -> resumeBuilder.js
gulp.task('concatJS', () => {
  const { jsSourceFiles, jsRootDir } = paths.js

  return gulp
    .src(jsSourceFiles)
    .pipe(concat('resumeBuilder.js'))
    .pipe(gulp.dest(jsRootDir))
})

// Watch task for development with browser reload on change
gulp.task('watch', ['concatCSS', 'concatJS', 'browserSync'], function() {
  const { cssToBuild } = paths.css
  // Other watchers
  // Reloads the browser whenever HTML, CSS or JS files change
  // Reload on any changes in images
  gulp.watch('app/*.html', browserSync.reload)
  gulp.watch(
    ['app/css/**/*.css', `!${cssToBuild}`],
    ['concatCSS', browserSync.reload]
  )
  gulp.watch('app/js/**/*.js', ['concatJS', browserSync.reload])
  gulp.watch('app/images/*', browserSync.reload)
})

// Delete files created from watch or build tasks
gulp.task('app:clean', () => {
  const cssFile = 'styles.css'
  const jsFile = 'resumeBuilder.js'
  const { cssRootDir } = paths.css
  const { jsRootDir } = paths.js

  console.log(`Deleteing files: ${jsFile} and ${cssFile}`)

  return del([`${cssRootDir}/${cssFile}`, `${jsRootDir}/${jsFile}`])
})

// Build all files for production (w/o source maps)
gulp.task('build', function(callback) {
  console.log('Building files')
  runSequence(
    'build:clean',
    ['concatCSS', 'concatJS'],
    ['html', 'css', 'js', 'images'],
    callback
  )
})

// Build all files for production w/ source maps
gulp.task('build:sourcemap', function(callback) {
  console.log('Building files')
  runSequence(
    'build:clean',
    ['concatCSS', 'concatJS'],
    ['html', 'css:sourcemap', 'js:sourcemap', 'images'],
    callback
  )
})

// Delete all build files
gulp.task('build:clean', ['app:clean'], function() {
  console.log('Deleteing all build files')
  return del(['css/**', 'images/**', 'js/**', 'index.html'])
})

// Delete all files created from build (cache too)
gulp.task('build:cleanAll', ['cache:clean', 'build:clean'], function() {
  console.log('Deleting build files, generated app files and clearing cache')
})

// Clear images in cache
gulp.task('cache:clean', function(callback) {
  console.log('Clearing cache')
  return cache.clearAll(callback)
})
