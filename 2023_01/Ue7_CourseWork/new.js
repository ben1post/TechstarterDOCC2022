"use strict";

length = 1000;

let arr = [];
for(var i=0; i < length; i++){
arr.push(i);
};

console.log(arr);

for (let elements of arr.values()) {
    console.log(elements);
  };