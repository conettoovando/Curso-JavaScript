function paraAbsoluto(arr){
    // let newArr = [];
    // for (let value in arr){
    //     newArr[value] = Math.abs(arr[value]);
    // }
    // return newArr;
    return arr.map(n => Math.abs(n));
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos)