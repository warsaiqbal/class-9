// for counting number of elements in an array, starts from 1.
let num1 = [3, 46, 7, 8, 6, 4, 3]
console.log("Array length", num1.length); 
for (let i = 0; i < num1.length; i++){
   console.log(i);
   console.log(num1[i]);
}

// assignment of adding all the values in an array through loop
let num2 = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for (let i = 0; i < num2.length; i+=1){
    sum += num2[i];
}
console.log(sum);

// loop for an array altogether
let letters = ["a","b","c","d","e","f","g"]
for (let i = 0; i < 7; i++){
console.log(letters[i]);
}

//while loop => jab tak //agar 1 chez galat hogi to wo chal jayega phir error dega
// executes a block of code as long as the specified condition is true
//jab tak condition true ho code ko run krdo //isme steps divide krdiye //jb alteration ka nhi pta ho
let i = 0
while(i < 5){
    console.log(i);
    i++
}

// //for loop mei masla ata hai to wo aik bar bhi nhi chalta //isme aik sath kam krrhe the 
// //jb apko pta ho condition kb tk true hogi to for loop use kro //jb alteration ka pata ho
for (let i=0; i<5; i++){
}

//do while loop
// it executes the block of code once before checking the condition.
let i = 0
do{
console.log(i);
i++
} while(i < 5)
 
//assignment: 
//1. use array in while & do while loop using numbers (done in loop practice separately)

//2. reverse array
// let num = [10, 20, 30, 50];
// num.reverse()
// console.log(num);
