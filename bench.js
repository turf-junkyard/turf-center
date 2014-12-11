var center = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var fixture = JSON.parse(fs.readFileSync(__dirname+'/####.geojson')));
var suite = new Benchmark.Suite('turf-center');
suite
  .add('turf-center',function () {
    center(fixture);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();