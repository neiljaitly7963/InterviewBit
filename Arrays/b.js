function noble(A) {
  A.sort((a, b) => a - b);
  console.log(A);
  console.log(A.length);
  var ans = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] === A.length - (i + 1)) {
      if (A[i] != A[i + 1]) {
        ans = 1;
        break;
      }
      // console.log("A[" + i + "] = " + A[i]);
      // console.log("A.length - (i + 1) = " + (A.length - (i + 1)));
    } else {
      ans = -1;
    }
  }
  return ans;
}

var A = [4, -9, 8, 5, -1, 7, 5, 3];
console.log(noble(A));
