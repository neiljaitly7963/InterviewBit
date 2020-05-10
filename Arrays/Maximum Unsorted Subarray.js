function subArray(A) {
  var s = null,
    e = null;

  for (var i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
      s = i;
      break;
    }
  }

  for (var j = A.length - 1; j > 0; j--) {
    if (A[j] < A[j - 1]) {
      e = j;
      break;
    }
  }

  var min = A[s];
  var max = A[s];

  for (var k = s; k <= e; k++) {
    if (A[k] <= min) {
      min = A[k];
      console.log("min = " + min);
    }
    if (A[k] >= max) {
      max = A[k];
      console.log("max = " + max);
    }
  }

  for (var h = 0; h < s; h++) {
    if (A[h] > min) {
      s = h;
      console.log("s = " + s);
      break;
    }
  }

  for (var g = A.length - 1; g >= e; g--) {
    if (A[g] < max) {
      e = g;
      console.log("e = " + e);
      break;
    }
  }

  var temp = [];

  if (s === null && e === null) {
    temp.push(-1);
  } else {
    temp.push(s, e);
  }

  return temp;
}

var a = [1, 1];
console.log(subArray(a));
