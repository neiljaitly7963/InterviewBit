function pascal(A) {
  var array = [[1], [1, 1]];
  var v = 0;
  var temp = [];

  if (A === 0) {
    return [];
  } else if (A === 1) {
    return [[1]];
  } else if (A === 2) {
    return [[1], [1, 1]];
  } else if (A > 2) {
    for (var i = 2; i < A; i++) {
      for (var j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          temp.push(1);
        } else {
          v = array[i - 1][j] + array[i - 1][j - 1];
          temp.push(v);
        }
      }
      array[i] = temp;
      temp = [];
    }
    return array;
  }
}

console.log(pascal(5));
