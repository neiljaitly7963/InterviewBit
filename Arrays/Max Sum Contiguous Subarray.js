function max(A) {
  var maxHere = 0;
  var maxSoFar = Number.NEGATIVE_INFINITY;
  var maxGlobal = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < A.length; i++) {
    maxHere = A[i];
    console.log("maxHere " + maxHere);
    maxSoFar = maxHere + maxSoFar;
    console.log("maxSoFar " + maxSoFar);
    maxSoFar = Math.max(maxHere, maxSoFar);
    console.log("finally maxSoFar is = " + maxSoFar);
    if (maxSoFar > maxGlobal) {
      maxGlobal = maxSoFar;
    }
  }
  return maxGlobal;
}

var a = [-1, -2, -4, -3, -9, -5, -8, 0, -100, 1];
console.log(max(a));
