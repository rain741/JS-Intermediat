// no.01
// membalikkan sebuah array
// Buat fungsi yang menerima parameter data array
// kembalikan dalam bentuk array
// let angka = [1, 2, 3, 4];
// let total = [];
// for (let i = angka.length - 1; i >= 0; i--) {
//   total.push(angka[i]);
// }
// console.log(total);

let array = [1, 4, 6, 7];

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray(array));

// no.02
// menghitung total nilai yang terdapat pada sebuah array
// Buat fungsi yang menerima parameter data array
// kembalikan dalam bentuk number
// let number = [1, 2, 3, 4];

// let results = 0;
// for (let i = 0; i < number.length; i++) {
//   results += number[i];
// }
// console.log(results);

let number = [8, 3, 9, 2, 5];

function datanumber(number) {
  let results = 0;
  for (let i = 0; i < number.length; i++) {
    results += number[i];
  }
  return results;
}
console.log(number);
