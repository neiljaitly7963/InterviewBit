function repeat(A) {
  A.sort((a, b) => a - b);
  var a = null;
  var b = null;
  var temp = [];
  if (A[0] !== 1) {
    b = 1;
  }
  for (var i = 0; i < A.length; i++) {
    if (A[i] === A[i + 1]) {
      a = A[i];
    }
  }
  for (var i = 0; i < A.length; i++) {
    if (A[i] + 1 !== A[i + 1] && A[i] !== A[i + 1] && A[i + 1] !== undefined) {
      b = A[i] + 1;
    }
  }
  temp.push(a, b);
  return temp;
}

var s = [3, 1, 2, 5, 3];
console.log(repeat(s));
