// //output your name
console.log("jinath");   

// //read the name of your user

var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your Name?');
console.log(userName);

// //welcome your user

console.log("welcome " + userName);

// //print right/wrong if greater than 25 and print score

var userAge  = readlineSync.question("am I greater than 25?");
 var score=0;
 if(userAge === "yes"){
   console.log('I am Right');
   score=score+1;
 }
 else{
   console.log('I am wrong');
   score=score-1;
 }
console.log("score is "+score);

// //assignment: Increment the score

var userHobbies = readlineSync.question('do you like reading books?');
if(userHobbies === "yes"){
  score=score+1;
}
else{
  score=score-1;
}

console.log("Final Score is "+score);


// Functon to add two numbers

function add(numOne,numTwo){
  var sum=numOne+numTwo;
  return sum;
}

var result= add(1,2);
console.log("sum of two numbers " + result);

//assignment: create a function prod using operators 

function prod(numOne,numTwo){
  var mult= numOne*numTwo;
 console.log("multiplication of two numbers " + mult);
  var sub = numOne-numTwo;
  console.log("subtraction of two numbers " + sub);
 return (mult,sub);
}

 prod(7,3);


//program to update score after every q&a

var readlineSync = require("readline-sync");
var score = 0;
function play(question,answer){
  var Answer= readlineSync.question(question);

  if(Answer===answer){
    console.log("you are right!");
    score=score+1;
  }
  else{
    console.log("you are Wrong!");
    score=score-1;
  }
}

play("what is your name?","jinath");
play("where do you live?","Assam");
play("which department?","computerScience");
console.log("your score is:" +score);

//print your name 5times using for loop

for(var i=0;i<5;i++){
  console.log("My name is jinath");
}


// print star pattern

for(var i=1;i<=5;i++){
  for(var j=1;j<=i;j++){
    process.stdout.write("*");
  }
 process.stdout.write("\n");
}

// assignment: Run a loop and print the sum of two numbers

var firstNumber=22;
var secondNumber=0;

for(var i=0;i<10;i++){
  var sum=firstNumber+secondNumber;
  console.log(sum);
  secondNumber=sum;
}


// basics of array: grocery items

var items=['milk','choclates','oats','chips','butter'];
console.log(items[0]);
console.log(items[2]);
console.log(items[4]);

for(var i=0;i<items.length;i++){
  console.log(items[i]);
}


//basics of object

var superMan={
  name:"superMan",
  power: "flight",
  colour: "blue",
  strength: 1000,
  stealth:0,

}

var batMan={
  name: "batMan",
  power: "martail-art",
  colour: "black",
  strength:100,
  stealth:1000,
}

console.log(superMan.strength>batMan.strength);

//print the stealth of both superMan and Batsman
var m=console.log(superMan.stealth);
var n=console.log(batMan.stealth);

if(m>n){
  console.log("superman will win");
}
else{
  console.log("batMan will win");
}


//challange to create array of superhero objects

var superheroes=[superMan,batMan];
for(var i=0;i<superheroes.length;i++){
  var m=superheroes[i];
  console.log(m.name);
  console.log(m.colour);
}
