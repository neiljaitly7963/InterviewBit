function spc(A) {
  var lsv = 0;
  var rsv = 0;
  var sp = 0;
  var test = 0;
  var pest = 0;
  var temp = [];
  for (var i = 0; i < A.length; i++) {
    console.log("i " + i);
    for (var j = 0; j < i; j++) {
      if (A[j] > A[i]) {
        lsv = j;
      } else {
      }
    }
    console.log(
      "lsv for " + array[i] + " with position i =  " + i + " is " + lsv
    );
    for (var k = i; k < A.length; k = k + 1) {
      if (A[k] > A[i]) {
        rsv = k;
        break;
      } else {
      }
    }
    console.log(
      "rsv for " + array[i] + " with position i =  " + i + " is " + rsv
    );
    sp = lsv * rsv;
    lsv = 0;
    rsv = 0;
    test = 0;
    pest = 0;
    temp.push(sp);
    console.log("sp for i " + i + " is " + sp);
  }
  console.log(temp);
  return Math.max.apply(Math, temp);
}

var array = [6, 5, 4, 9, 9, 6, 5, 4, 5, 9, 9];
console.log(spc(array));
