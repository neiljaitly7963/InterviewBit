function duplicate(A) {
  var answer = null;
  A.sort((a, b) => a - b);
  for (var i = 0; i < A.length; i++) {
    if (A[i] === A[i + 1]) {
      answer = A[i];
      break;
    } else {
      answer = -1;
    }
  }
  return answer;
}

var a = [1, 2, 2, 3];
console.log(duplicate(a));
