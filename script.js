function checkResult() 
{
let marks = document.getElementById("marksInput").value;
marks = Number(marks); //converts number
let resultMessage =" ";
if (marks >= 80) {
    resultMessage = "Congragulation You Passed";
} else if(marks >= 50) {
    resultMessage = "Average Score please try hard next time(did you get 6 7 (:  )";
}else if(marks > 100) {
    resultMessage = "please be resoneble and enter a possible mark";
} else if(marks < 50) {
resultMessage = "you need to leave(your expelded this school doesnt take students with marks less than 50)";
}
document.getElementById("resultText").textContent = resultMessage;
}


