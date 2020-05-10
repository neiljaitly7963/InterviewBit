// function largest(A) {
//   var temp = A.map(String);
//   A.sort();
//   // temp.sort();
//   console.log(temp[0] + temp[1] > temp[1] + temp[0]);
//   return temp;
// }
//
// var A = [, 30, 34, 5, 9];
// console.log(largest(A));

function bubbleSort(A) {
  var temp = null;
  var yesItsZero = false;
  var B = A.map(String);
  for (var i = 0; i < B.length; i++) {
    for (var j = i + 1; j < B.length; j++) {
      if (B[j] + B[i] > B[i] + B[j]) {
        temp = B[j];
        B[j] = B[i];
        B[i] = temp;
      }
    }
  }

  var ans = B.join("");

  for (var i = 0; i < B.length; i++) {
    if (B[i] === "0") {
      yesItsZero = true;
    } else {
      yesItsZero = false;
    }
  }
  if (yesItsZero === true) {
    ans = "0";
  }

  return ans;
}
var A = [0, 0, 0, 0];
console.log(bubbleSort(A));
