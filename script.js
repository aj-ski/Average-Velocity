let date = document.getElementById("date");
let birth = document.getElementById("firstLocation");
let current = document.getElementById("secondLocation");
let submit = document.getElementById("submit");

submit.addEventListener("click", handleData);


function handleData() {
    let inputCheck = inputIsEmpty();
    if (inputCheck) {
        alert("Please input all values");
    }
    let date1 = new Date(date.value);
    let date2 = new Date();

    // console.log((date1.getTime() - date2.getTime())/1000)

}

function inputIsEmpty() {
    let output = false;

    if ((date.value == '') || (birth.value == '') || (current.value == '')) {
        output = true;
    }

    console.log(output);
    return output;
    
}