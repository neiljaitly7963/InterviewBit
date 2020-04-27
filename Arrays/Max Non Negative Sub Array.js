function final(A) {
  var sub = [];
  var p = 0;
  var i = 0;
  for (var i = 0; i < 1; i++) {
    var temp = [];
    for (var j = p; j < A.length; j++) {
      if (A[j] > 0) {
        temp.push(A[j]);
      } else {
        p = j + 1;
        sub.push(temp);
        temp = [];
      }
    }
  }
  sub.push(temp);
  var temparray = [];
  for (var i = 0; i < sub.length; i++) {
    temparray.push(sub[i].reduce((a, b) => a + b, 0));
  }

  var max = Math.max.apply(null, temparray);

  var ind = temparray.indexOf(max);

  return sub[ind];
}
var A = [1, 2, 5, -7, 2, 5];

console.log(final(A));
