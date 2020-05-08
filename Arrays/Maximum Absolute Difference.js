/////////////////////////////////////////////////
O(n^2) Time Complexity
/////////////////////////////////////////////////
function Abs(A) {
  var c = 0;
  var temp = 0;
  for (var i = 1; i <= A.length; i++) {
    for (var j = 1; j <= A.length; j++) {
      c = Math.abs(A[i - 1] - A[j - 1]) + Math.abs(i - j);
      if (c > temp) {
        temp = c;
      }
    }
  }
  return temp;
}

/////////////////////////////////////////////////
O(n) Time Complexity
/////////////////////////////////////////////////

function Abs(A) {
  var a = [];
  var b = [];
  for (var i = 1; i <= A.length; i++) {
    a.push(A[i - 1] + i);
    b.push(A[i - 1] - i);
  }
  // console.log("a " + a);
  // console.log("b " + b);
  var ha = Math.max(...a);
  // console.log("ha = " + ha);
  var la = Math.min(...a);
  // console.log("la = " + la);
  var hb = Math.max(...b);
  // console.log("hb = " + hb);
  var lb = Math.min(...b);
  // console.log("lb = " + lb);

  return Math.max(Math.abs(ha - la), Math.abs(hb - lb));
}

var a = [1, 3, -1];

console.log(Abs(a));
