'use strict';

var userPoints = 0;

console.log('Start');
alert('Welcome to yet another round of the guessing game');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you still want to play my game.');

var answer1 = prompt('Did Arthur study Pascal at Washington State University?', 'Type yes or no').toLowerCase();
console.log('Answer 1: ' + answer1);

if (answer1 === 'yes' || answer1 === 'y') {
  userPoints++;
  alert('Yes! It is a rather specific question.');
}else{
  alert('Sorry, this was a yes answer');
}
alert(user + ' you have ' + userPoints + ' out of 7 points.');

var answer2 = prompt('Was the computer lab at WSU built into the football stadium?', 'Type yes or no').toLowerCase();
console.log('Answer 2: ' + answer2);

if (answer2 === 'yes' || answer2 === 'y') {
  userPoints++;
  alert('Yes! It seems this was the closest they could get join together the jocks and the nerds. During games you could hear the roar of the crowd through the wall.');
}else{
  alert('False.  Another yes question.  Building the lab into the stadium was the closest way to join the jocks and the nerds.  During games you could hear the roar of the crowd through the wall.');
}
alert(user + ' you have ' + userPoints + ' out of 7 points.');

var answer3 = prompt('Did Arthur find the solution to a bug by dreaming that he met the class professor?', 'Type yes or no').toLowerCase();
console.log('Answer 3: ' + answer3);

if (answer3 === 'yes' || answer3 === 'y') {
  userPoints++;
  alert('Yes, another oddly specfic question.  He skipped dinner working on a problem, went to bed, dreamed he met the proessor, then woke up with the answer.  He then skipped breakfast to bike out to the lab to try it out.');
}else{
  alert('Wrong, this is another oddly specfic question.  He skipped dinner working on a problem, went to bed, dreamed he met the proessor, then woke up with the answer.  He then skipped breakfast to bike out to the lab to try it out.');
}
alert(user + ' you have ' + userPoints + ' out of 7 points.');

var answer4 = prompt('Did Arthur have to program on punched cards?', 'Type yes or no').toLowerCase();
console.log('Answer 4: ' + answer4);

if (answer4 === 'no' || answer4 === 'n') {
  userPoints++;
  alert('Yes, no is true.  I\'m not that old.');
}else{
  alert('Wrong! How old do you think I am?');
}
alert(user + ' you have ' + userPoints + ' out of 7 points.');

var answer5 = prompt('Did Arthur\'s instructors have to program on punched cards?', 'Type yes or no').toLowerCase();
console.log('Answer 5: ' + answer5);

if (answer5 === 'yes' || answer5 === 'y') {
  userPoints++;
  alert('Yes! In college they had to wait 24 hours before the could see the execution of their programms.  In high school, they had to wait a week.');
}else{
  alert('No, Actually, In college they had to wait 24 hours before the could see the execution of their programms.  In high school, they had to wait a week..');
}
alert('You have ' + userPoints + ' out of 7 points.');

// Number guessing question, giving the user four chances

for (var i = 0; i < 4; i++) {
  var answer6 = prompt('How many years did Arthur attend Washington State University?', 'Enter a number, not necessarily a whole number.');
  if (answer6 === '2.5'){
    userPoints++;
    alert('Correct! Arthur left WSU after three and a half years, but he is continuing his education at Code Fellows.');
    break;
  }else{
    //To avoid telling the user "You have 0 more chances," then ending the round:
    if (i < 3){
      if (answer6 < '2.5'){
        alert('Too low. Try again, you have ' + (3 - i) + ' more chances.');
      }else{
        alert('Too high. Try again, you have ' + (3 - i) + ' more chances.');
      }
    }else{
      alert('Sorry, Arthur left WSU after three and a half years, but he is continuing his education at Code Fellows.  (Oh, YOU\'RE sorry?)');
    }
  }
}
alert(user + ' you have ' + userPoints + ' out of 7 points.');

// Multiple correct guessible answers from an array, six tries to get a correct answer.
var subjects = ['English', 'jogging', 'geology', 'Spanish'];
var subjectTest = subjects;
var subjectString = '';
// Concatinate Subjects into a single string for printing inline in an alert.
for (i = 0; i < subjects.length; i++){
  subjectString = subjectString + subjects[i] + ', ';
  if (i == subjects.length - 2)
    subjectString = subjectString + ' and ';
}
for (var i = 0; i < 6; i++){
  console.log('Before prompt, i = ' + i);
  var answer7 = prompt('Besides computer coding what other subjects did Arthur study at WSU?', 'Enter an academic subject.');
  //Loop through each element of subjects to find a match
  var found = false;
  for (var j = 0; j < subjectTest.length; j++){
    console.log('Top of j loop. j, subjects[j], answer7 ' + j + ' ' + subjects[j] + ' ' + answer7);
    if (subjects[j] == answer7){
      found = true;
      var removedItem = subjectTest.splice(j,1); // If item is removed before j loop, it will reference an undefined index
      console.log('After if (subjects[j] == answer7). found set to true. j, subjects[j], answer7 = ' + j + ' ' + subjects[j] + ' ' + answer7);
      break;
    }//if subjects[j] == answer7
  }// next j
  console.log('Before if found test, found, j ' + found + ' ' + j);
  if (found){
    alert('Correct! ' + answer7 + ' Was one of Arthur\'s favorite subjects.  There are ' + (subjectTest.length) + ' more subjects.');
    i--; //Decrement i so it doesn't count against a wrong answer.
    console.log('found == true. i decremented. Answer7, i & j: ' + answer7 + ' ' + i + ' ' + j);
  }else{
    console.log('found != true. Answer7, subjects[j], i & j: ' + answer7 + ' ' + subjects[j] + ' ' + i + ' ' + j);
    //To avoid telling the user "You have 0 more chances," then ending the round:
    if (i < 5){
      alert('Sorry, that\'s not right. You have ' + (5 - i) + ' more chances.');
    }else{
      alert('Sorry, Arthur took ' + subjectString + 'while at Washington State University.');
    } //if i < 5
  } //If found
  if (subjectTest.length < 1){
    userPoints++;
    alert('You won the game!  Arthur took ' + subjectString + 'while at Washington State University.');
    alert(user + ' you have ' + userPoints + ' out of 7 points.');
    break;
  }
} //next i
