/* jshint node: true */
/* global describe, it, beforeEach */
'use strict';

var strip_banner = require('../');
var should = require('should');
var gutil = require('gulp-util');
require('mocha');

describe('strip_banner', function(){
  var fakeFile;

  function getFakeFile(fileContent){
    return new gutil.File({
      path: './test/fixture/test.js',
      cwd: './test/',
      base: './test/fixture/',
      contents: new Buffer(fileContent || '')
    });
  }

  beforeEach(function(){
    // fakeFile = getFakeFile('/** A banner  **/ Hello world');
  });

  it('should work in buffer mode', function(done){
    fakeFile = getFakeFile('/** A banner  **/ Hello world /!** protected **/');
    
    var stream = strip_banner();
    stream.on('data', function (newFile) {
      should.exist(newFile.contents);
      newFile.contents.toString().should.equal(' Hello world /!** protected **/');
    });
    stream.once('end', done);
    stream.write(fakeFile);
    stream.end();
  });
})