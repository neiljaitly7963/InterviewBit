function hotel(A, B, C) {
  var a = [];
  var b = [];
  var tem = [];
  var guest = 0;

  for (var i = 0; i < B.length; i++) {
    b.push(B[i]);
    b.push(0);
    tem.push(b);
    b = [];
  }

  console.log(tem);

  for (var i = 0; i < A.length; i++) {
    a.push(A[i]);
    a.push(1);
    tem.push(a);
    a = [];
  }
  console.log(tem);

  tem.sort(sortFunction);

  function sortFunction(d, e) {
    if (d[0] === e[0]) {
      return 0;
    } else {
      return d[0] < e[0] ? -1 : 1;
    }
  }
  console.log(tem);

  for (var i = 0; i < tem.length; i++) {
    if (tem[i][1] === 1) {
      guest = guest + 1;
    } else {
      guest = guest - 1;
    }
    if (guest > C) {
      return 0;
    }
  }
  return 1;
}

var a = [1, 2, 3];
var b = [2, 3, 4];
var c = 1;
console.log(hotel(a, b, c));
