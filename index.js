var extent = require('turf-extent'),
    point = require('turf-point');

/**
* Calculates the absolute center point of all features.
*
* @module turf/center
* @param {FeatureCollection} fc - a GeoJSON Feature or FeatureCollection
* @return {FeatureCollection} center - a GeoJSON FeatureCollection of the
* absolute center points of all input features
* @example
* var features = [
*     turf.point(-97.522259, 35.469100),
*     turf.point(-97.502754, 35.463455),
*     turf.point(-97.508269, 35.463245),
*     turf.point(-97.516809, 35.465779),
*     turf.point(-97.515372, 35.467072),
*     turf.point(-97.509363, 35.463053),
*     turf.point(-97.511123, 35.466601),
*     turf.point(-97.518547, 35.469327),
*     turf.point(-97.519706, 35.469659),
*     turf.point(-97.517839, 35.466998),
*     turf.point(-97.508678, 35.464942),
*     turf.point(-97.514914, 35.463453)
* ];
* var fc = turf.featurecollection(features);
* var centerPt = turf.center(fc);
* //=centerPt
*/

module.exports = function(layer, done){
  var ext = extent(layer);
  var x = (ext[0] + ext[2])/2;
  var y = (ext[1] + ext[3])/2;
  return point([x, y]);
};
