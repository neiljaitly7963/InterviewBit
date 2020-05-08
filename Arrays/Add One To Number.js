// function add(A){
//   if (A[(A.length -1)] === 9) {
//     while (A[i] === 9) {
//
//     }
//   }
// }

var A = [0, 0, 0, 1];
var counter = 0;
for (var i = 0; i < A.length - 1; i++) {
  if (A[i] === 0) {
    counter = counter + 1;
  } else {
    break;
  }
}

A.splice(0, counter);

for (var i = A.length - 1; i > -1; i = i - 1) {
  if (i === 0 && A[i] === 9) {
    A[i] = 0;
    A.unshift(1);
    break;
  } else if (A[i] === 9) {
    A[i] = 0;
  } else {
    A[i] = A[i] + 1;
    break;
  }
}

console.log(A);
