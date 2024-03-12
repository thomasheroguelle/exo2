var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log("voici le tableau:" + arr);
console.log("le nombre le plus long du tableau est le " + largest);
