document.querySelector("#submit-btn-btn").addEventListener("click",()=>{
    let mathsy1AInput = Number(document.querySelector("#mathsy1AInput").value);
let mathsy1BInput = Number(document.querySelector("#mathsy1BInput").value);
let phyy1input = Number(document.querySelector("#phyy1input").value);
let chemy1input = Number(document.querySelector("#chemy1input").value);
let mathsy2AInput = Number(document.querySelector("#mathsy2AInput").value);
let mathsy2BInput = Number(document.querySelector("#mathsy2BInput").value);
let phyy2input = Number(document.querySelector("#phyy2input").value);
let chemy2input = Number(document.querySelector("#chemy2input").value);
let practical_phy = Number(document.querySelector("#practical-phy").value);
let practicals_che = Number(document.querySelector("#practicals-che").value);
let eamcet_marks_input = Number(document.querySelector("#eamcet-marks-input").value);

let total_converted_marks = ((mathsy1AInput+mathsy1BInput+phyy1input+chemy1input+mathsy2AInput+mathsy2BInput+phyy2input+chemy2input+practical_phy+practicals_che)/600)*25+(eamcet_marks_input/160)*75;

let display_box = document.querySelector(".display-box");

display_box.innerText = total_converted_marks;

let submit_btn = document.querySelector("#submit-btn-btn");

submit_btn.classList.add("hidden");
display_box.classList.remove("hidden");
})