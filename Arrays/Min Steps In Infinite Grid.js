function steps(A, B) {
  var x = 0;
  var y = 0;
  var totalSteps = 0;
  for (var i = 0; i < A.length; i++) {
    if ((A[i + 1] != undefined) & (B[i + 1] != undefined)) {
      x = A[i] - A[i + 1];
      y = B[i] - B[i + 1];
      x = Math.abs(x);
      y = Math.abs(y);
      if (x >= y) {
        totalSteps = totalSteps + x;
      } else {
        totalSteps = totalSteps + y;
      }
    }
  }
  return totalSteps;
}
var a = [0, 1, 1];
var b = [0, 1, 2];
console.log(steps(a, b));
