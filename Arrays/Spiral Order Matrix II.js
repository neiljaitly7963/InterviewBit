function matrix(n) {
  var a = 0,
    b = n - 1,
    c = n - 1,
    d = 0;

  var v = 0;
  var f = n * n;
  var go = true;

  var array = new Array(n);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(n);
    array[i].fill(0);
  }

  for (var i = 0; i < 10; i++) {
    if (go === true) {
      for (var i = 0; i < n; i++) {
        console.log(
          "left to right, array[" + a + "][" + i + "] = " + array[a][i]
        );
        if (array[a][i] === 0) {
          console.log(
            "looks like it was empty so i will fill it with = " + (v + 1)
          );
          array[a][i] = v + 1;
          if (array[a][i] === f) {
            go = false;
            break;
          }
          v = v + 1;
        } else {
          console.log("sorry it was filled, skipping it!");
        }
      }
      a = a + 1;
      // v = v - 1;
    } else {
      break;
    }

    if (go === true) {
      for (var i = 0; i < n; i++) {
        console.log(
          "top to bottom, array[" + i + "][" + b + "] = " + array[i][b]
        );
        if (array[i][b] === 0) {
          console.log(
            "looks like it was empty so i will fill it with = " + (v + 1)
          );
          array[i][b] = v + 1;
          if (array[i][b] === f) {
            go = false;
            break;
          }
          v = v + 1;
        } else {
          console.log("sorry it was filled, skipping it!");
        }
      }

      b = b - 1;
    } else {
      break;
    }
    if (go === true) {
      for (var i = n - 1; i > -1; i--) {
        console.log(
          "right to left, array[" + b + "][" + i + "] = " + array[b][i]
        );
        if (array[c][i] === 0) {
          console.log(
            "looks like it was empty so i will fill it with = " + (v + 1)
          );
          array[c][i] = v + 1;
          if (array[c][i] === f) {
            go = false;
            break;
          }
          v = v + 1;
        } else {
          console.log("sorry it was filled, skipping it!");
        }
      }

      c = c - 1;
      // v = v - 1;
    } else {
      break;
    }

    if (go === true) {
      for (var i = n - 1; i > -1; i--) {
        console.log(
          "bottom to top, array[" + i + "][" + a + "] = " + array[i][a]
        );
        if (array[i][d] === 0) {
          console.log(
            "looks like it was empty so i will fill it with = " + (v + 1)
          );
          array[i][d] = v + 1;
          if (array[i][d] === f) {
            go = false;
            break;
          }
          v = v + 1;
        } else {
          console.log("sorry it was filled, skipping it!");
        }
      }

      d = d + 1;
    } else {
      break;
    }
  }
  return array;
}

console.log(matrix(4));
