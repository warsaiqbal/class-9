//for loop
for(let i = 0; i < 5; i++){
console.log("hello world", i);
}

//practicing for loop
for(let i = 20; i < 30; i = i + 1){ //initialization mei jo number likhenge us number se loop/msg print hona start krega
console.log("warsa parhle", i);  //condition mei jo number likhenge utni times msg print hoga
}

//how to add all the values in an array through for loop
let num1 = [10, 20, 30, 40]
let sum = 0 //sum of num1
for (let i = 0; i < num1.length; i++){ //i+=1 also gives the same result
sum += num1[i];
}
console.log(sum);

//loop for an array altogether
let names = ["arin","billy","charlie","dory","eliana","fiona","gabriel"]
for (let i = 0; i < 7; i++){
console.log(names[i]);
}

//if we dont write the same amount of names as mentioned in the condition number then it will give us undefined
//for eg
let names1 = ["arin","billy","charlie"]
for (let i = 0; i < 5; i++){
console.log(names1[i]);
}

//while loop: executes a block of code as long as the specified condition is true
// agar 1 chez galat hogi to wo chal jayega phir error dega
// isme steps line se honge or i++ bracket mei hoga with console.log
let i = 0
while(i < 10){
console.log("warsa plz parhle",i);
i++
}

//how to add all the values in an array through while loop
let num1 = [10, 20, 30, 40];
let sum = 0;
let i = 0;
while (i < num1.length) {
  sum += num1[i];
  i++;
}
console.log(sum);

//do-while loop
let i = 0
do{
console.log("warsa go study",i);
i++
} while(i < 10)

//how to add all the values in an array through do-while loop
let num1 = [10, 20, 30, 50];
let sum = 0;
let i = 0;
do {
  sum += num1[i];
  i++;
} while (i < num1.length);
console.log(sum);