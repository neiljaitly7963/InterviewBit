function antiDiagonals(A) {
  var array = [];
  var a = 0;
  var b = A.length - 1;
  console.log("A[" + 0 + "] [" + 0 + "] = " + A[0][0]);
  var temp = [];
  temp.push(A[0][0]);
  array.push(temp);
  console.log("for loop over");
  for (var i = 1; i < A.length; i++) {
    var a = 0;
    var k = i;
    var temp = [];
    for (var j = 0; j < i + 1; j++) {
      console.log("A[" + a + "] [" + k + "] = " + A[a][k]);
      temp.push(A[a][k]);
      a = a + 1;
      k = k - 1;
    }
    array.push(temp);
    console.log("for loop over");
  }

  // console.log("A[" + j + "] [" + i + "]");
  var l = 1;
  for (var i = A.length - 1; i > 0; i = i - 1) {
    var b = A.length - 1;
    var g = l;
    var temp = [];
    for (var j = 1; j < i + 1; j++) {
      console.log("A[" + g + "] [" + b + "] = " + A[g][b]);
      temp.push(A[g][b]);
      g = g + 1;
      b = b - 1;
    }
    array.push(temp);
    l = l + 1;
    console.log("for loop over");
  }
  return array;
}
var A = [
  [1, 2, 3, 4, 9],
  [5, 6, 7, 8, 9],
  [9, 10, 11, 12, 9],
  [13, 14, 15, 16, 9],
  [1, 2, 3, 4, 5],
];

console.log(antiDiagonals(A));
