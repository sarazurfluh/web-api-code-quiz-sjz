//GIVEN I am taking a code quiz
console.log("meow")
//Create 
var h1Tag =document.createElement("h1");
//Add content/ style
h1Tag.textContent = "Holiday Quiz";
h1Tag.style.textAlign = "center";
// append to page
document.body.appendChild(h1Tag);

var pTag =document.createElement("p");
pTag.textContent= "If you hate the holidays return to extreme quarantine and have 5 quarantinis. If you love the holidays, test your knowledge by clicking on the start button"
pTag.style.textAlign = "center";
pTag.style.font = "cursive";
document.body.appendChild(pTag);


//question 1


var listTag = document.createElement("ol");
    //create content
var option1 = document.createElement("li");
option1.textContent = "option 1";
listTag.style.margin = "0 auto";
listTag.style.width = "10%";
option1.style.border = "1px solid green";
listTag.appendChild(option1);



    //append to page
document.body.appendChild(listTag);

//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score