const arr = [10, 20,  40, 50, 60, 70, 80, 90, 100];

// for (let i = arr.length - 1; i >= 2; i--) {
//     arr[i + 1] = arr[i]
//     // arr[10] = 100
// }
// arr[2] = 30;
// console.log(arr);

const newArray = arr.slice(2, 4);
console.log(newArray);
console.log(arr);

const arr1 = ["shruti" , "Santosh" , "kc"];
const newArray1 = arr1.slice(8,14);
console.log(newArray1)
console.log(arr1)


// const splice = arr.splice(2, 0, 30);


// console.log(splice);

// console.log(arr);