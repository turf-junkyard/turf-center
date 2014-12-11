var center = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var fc = require('./geojson/fc');

var suite = new Benchmark.Suite('turf-center');
suite
  .add('turf-center',function () {
    center(fc);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();