document.querySelector("#submit-btn-btn").addEventListener("click",()=>{
    let ipe_marks = document.querySelector("#ipe_marks_input").value;
let eamcet_marks = document.querySelector("#eamcet_marks_input").value;

ipe_marks = Number(ipe_marks);
eamcet_marks = Number(eamcet_marks);

let total_converted_marks = 0.25*ipe_marks + 0.75*eamcet_marks;

let submit_btn = document.querySelector(".submit-btn");
submit_btn.classList.add("hidden");

let display_marks = document.querySelector(".display-marks");
display_marks.classList.remove("hidden");

console.log(total_converted_marks);
display_marks.innerText = total_converted_marks;
})

document.querySelector(".ipe_marks_info").addEventListener("click",()=>{
    alert("Maths IA[75] + Maths IB[75] + Physics(1st year)[60] + Chemistry(1st year)[60]+Maths IIA[75] + Maths IIB[75] + Physics(2nd year)[60] + Chemistry(2nd year)[60] + Practicals( Phy + Che)[30+30]")
})
