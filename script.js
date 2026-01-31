function checkResult() {
let marks = document.getElementById("marksInput").value;
marks = Number(marks); //converts number
let resultMessage ="";
if (marks >= 80) {
    resultMessage = "Congragulation You Passed";
} else if(marks >= 50) {
    resultMessage = "Average Score please try hard next time";
} else {
    resultMessage = "Come to my Office";
}

document.getElementById("resultText").textContent = resultMessage;

}









 
















