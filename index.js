var readlineSync = require('readline-sync');
var userInput = readlineSync.question("Enter your name !" );
console.log("Welcome ! " + userInput.toUpperCase() + " Lets Play!" );
var score = 0;

function play(question,answer){
  var userAns=readlineSync.question(question);
  if (userAns === answer){
    score =1+score;
    console.log("right!");
    console.log("------------")
    
  }
    else {
      console.log("wrong!");
      console.log("------------")
    
  }
  console.log("your score is : " + score);
  console.log("------------")
}

var array=[{
  "ques":"What is the most eaten food in the world?  \n a-wheat \n b-rice \n c-meat \n d-pulses ", 
  "ans": "b"},

  {
  "ques":"What is a canine? \n a-dog \n b-fish \n c-snakes \n d-rat" , 
  "ans":"a"
},{
  "ques":"Which metal is heavier, gold or silver?  \n a-Gold \n b-Silvr" , 
  "ans":"a"
},{
   "ques":"How many legs does a spider have? \n a-5\n b-4 \n c-6 \n d-8" , 
  "ans":"d"
},{
  "ques":"Are 2, 4, 6 & 8 odd or even numbers?", 
  "ans":"even"
},{
"ques":"Which country is home to the Koala?", 
  "ans":"australia"

}];

for (var i=0; i<array.length; i++){
  var currentQues =array[i];

  play(currentQues.ques,currentQues.ans);
}

var quesnos = array.length
console.log("your final score is : " + score + " out of " + quesnos);

if (score<3){
  console.log("Shit ! You failed this quizz.")
} else{
  console.log("Hurray ! You are Incredible ");
}