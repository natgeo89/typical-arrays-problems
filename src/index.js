
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) return 0;

  array.sort((a,b) => a - b);
  return array[0];
}


exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) return 0;

  array.sort((a,b) => a - b);
  return array.pop();
}


exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) return 0;

  let sumOfArray = array.reduce((accum, item)=> accum + item ,0)
  return sumOfArray/array.length;
}
