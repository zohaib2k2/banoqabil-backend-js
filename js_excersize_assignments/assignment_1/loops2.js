

let arr = [4, 8, 12, 16, 20, 14, 19, 21, 23, 25, 27, 29];



console.log("1. traversal");
for (const value of arr) {
    console.log(value);
}

console.log("\n2. multiply of all values.");

product = 1;

for (const value of arr) {
    product *= value;
}
console.log(product);

let fruits = ["apple", "banana", "kiwi"];

eachlens = [];

for (let i = 0; i < fruits.length; i++) {
    eachlens[i] = fruits[i].length;
}

console.log("\n3. length of each fruit in the array: " + eachlens);

vowels = ["a", "e", "i", "o", "u"];

vowelCount = 0;

for (const fruit of fruits){
    for (const chr of fruit){
        if (vowels.includes(chr)){
            vowelCount++
        }
    }
}

console.log("The number of vowels in fruits is: "+vowelCount);


let mynewarr = [4, 3, 11, -4, 5, 14];

for (const value of mynewarr){
    if (value < 0){
        console.log("The first negative number in the array is: "+value);
        break;
    }
}