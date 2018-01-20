// through2 is a thin wrapper around node transform streams
var through = require('through2');
var PluginError = require('plugin-error');
var stripBanner = require('strip-banner');

// consts
const PLUGIN_NAME = 'gulp-strip-banner';

function gulpStripBanner(){
  var stream = through.obj(function(file, enc, cb){
    if (file.isNull()) {
       // do nothing if no contents
    }

    if (file.isBuffer()) {
      file.contents = new Buffer(stripBanner(file.contents.toString()));
    }

    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported...yet!'));
    }

    this.push(file);

    return cb();
  });

  return stream
};

module.exports = gulpStripBanner;
