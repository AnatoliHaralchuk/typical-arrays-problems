
exports.min = function min (array) {
  return array.isArray(array)? Math.min(...array):0
}

exports.max = function max (array) {
  return array.isArray(array)? Math.max(...array):0
}

exports.avg = function avg (array) {
  return reduce((midlle,item)=>{midlle += item},0)/array.length()
}
