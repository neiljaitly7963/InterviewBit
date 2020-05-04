function wave(A) {
  A.sort(function (a, b) {
    return a - b;
  });
  var temp = [];
  for (var i = 1; i < A.length; i = i + 2) {
    temp.push(A[i]);
    temp.push(A[i - 1]);
    if (i === A.length - 2 && A.length % 2 != 0) {
      temp.push(A[i + 1]);
    }
  }
  return temp;
}

var a = [1, 2, 3, 4];
console.log(wave(a));
