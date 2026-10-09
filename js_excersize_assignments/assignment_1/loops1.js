

const main = () => {
    // 1. Print elements

    let arr = [5,10,15];

    console.log("1. traversal");
    for (let i = 0; i < arr.length;i++){
	console.log(arr[i]);
    }

    // 2. sum of all elements
    console.log("\n2. sum of all values.");
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);

    // 3. find minimum value

    console.log("\nMinimum value.\n")
    let min = arr.reduce((acc,cur) =>{
        return acc > cur ? acc = cur : acc;
    }, Number.MAX_VALUE);
    console.log( " Minmum value in the array " +min)

    // 4. Count how many odd numbers exist in an array.
    let oddCount = arr.reduce((acc, cur) => {
        if (cur % 2 !== 0) {
            acc++;
        }
        return acc;
    }, 0);
    console.log("\nCount of odd numbers: " + oddCount);

    //Create a new reversed array using a `for` loop.
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    console.log("\nReversed array: " + reversedArr);
}

main()
