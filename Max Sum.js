function max(A) {
  A.sort(function (a, b) {
    return a - b;
  });
  Math.max(...A);
}

var a = [1, 2, 3];
max(a);
