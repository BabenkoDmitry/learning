// array-like object "arguments"

function getSum() {
  var count = 0;

  for (var i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }
  return count;
}


console.log(getSum(1, 5, 4, 2, 5)); // 17
