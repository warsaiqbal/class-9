//Array
let icecreamFlavors = ["chocolate", "kulfa", "pista", "cheesecake"]
// console.log(icecreamFlavors);

//a. for adding and subtracting elements from array

//1. push: for adding element
icecreamFlavors.push("crunch")
console.log(icecreamFlavors);
//2. pop: for removing last element of an array
icecreamFlavors.pop()
console.log(icecreamFlavors);
//3. shift: for removing first element of an array
icecreamFlavors.shift()
console.log(icecreamFlavors);
//4. unshift: for adding an element in beginning of an array
icecreamFlavors.unshift("blueberry")
console.log(icecreamFlavors);
//5. slice: to copy a part or any element in an array without changing it
let someicecreamFlavors = icecreamFlavors.slice(1, 3)  //array mei jo element chahiye phele uske index no likho phir jaha tk elements extract krne hai us element ke baad ke element ka index no likho
console.log(someicecreamFlavors);
//6. splice: changes the array by removing or adding items
let removeicecreamFlavor = icecreamFlavors.splice(1, 1, "crunch")  //array mei se jo element remove krna hai uska index no likho phir coma laga kr kitne no of elements delete krne hai wo likho phir agar kisi element ko replace krna hai to usse replace krne ke loye new element ka nam likho
console.log(removeicecreamFlavor); 
console.log(icecreamFlavors);

//b. for reversing array
icecreamFlavors.reverse()
console.log(icecreamFlavors);

//c. for counting number of elements in an array.    //same can be done using while & do-while loop
console.log("Array length", icecreamFlavors.length); 
for (let i = 0; i < icecreamFlavors.length; i++){
   console.log(i);
   console.log(icecreamFlavors[i]);
}

//d. loop for an array to arrange it line-wise      //same can be done using while & do-while loop
for (let i = 0; i < 4; i++){
    console.log(icecreamFlavors[i]);
    }
