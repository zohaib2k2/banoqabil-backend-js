
// 11. print object keys

const obj1 = {a:1, b:2, c:3};

console.log("Keys of value in object:\n");
for (const key in obj1) {
    console.log(key)
}


// 12. print object values
console.log("\nValues of objects\n");
for (const val in Object.values(obj1)){
    console.log(val)
}

// 13. count properties
console.log("count properties...")

console.log(Object.keys(obj1).length);

// 14. sum object values

sum = 0;
for (let idx in Object.values(obj1)){
    sum += Object.values(obj1)[idx];
}

console.log("The sum of values is: "+sum);