let date = document.getElementById("date");
let birth = document.getElementById("firstLocation");
let current = document.getElementById("secondLocation");
let submit = document.getElementById("submit");
let outputHeading = document.getElementById("outputHeading");
let outputData = document.getElementById("outputData");

submit.addEventListener("click", handleData);


function handleData() {
    let inputCheck = inputIsEmpty();
    if (inputCheck) {
        alert("Please input all values");
        return 0;
    }
    let date1 = new Date(date.value);
    let date2 = new Date();

    let hours = (date1.getTime() - date2.getTime())/-1000
    hours /= 360;
    hours = Math.round(hours);
    console.log(hours);


    outputData.innerHTML = "3";
    outputHeading.classList.remove("hide");
    outputData.classList.remove("hide");
}

function inputIsEmpty() {
    let output = false;

    if ((date.value == '') || (birth.value == '') || (current.value == '')) {
        output = true;
    }

    return output;
    
}