
let text = document.getElementById('typing');
let index = 1;

let Name = ["Elevate Your Code with PowerMyCode!","Embark on a Path of Limitless Possibilities"];
let isCompleted = false;
let i=0;
const typeWriter = () => {
    // console.log(index);
    if(isCompleted == false){
        let new_title = Name[i].slice(0,index);
        text.innerText = new_title;
        index++;
    }else{ // decrease
        let new_title = Name[i].slice(0,index);
        text.innerText = new_title;
        index--;
    }
    if(index>Name[i].length+10){
        isCompleted = true;
    }
    else if(index==0){
        isCompleted = false;
        if(i==Name.length-1){
            i=0;
        }
        i++;
    }
    setTimeout( () => {typeWriter()}, 100);
}


typeWriter ();
const cursorElement = document.getElementById('cursor');
function toggleCursorVisibility() {
    cursorElement.style.visibility = cursorElement.style.visibility === 'visible' ? 'hidden' : 'visible';
}
setInterval(toggleCursorVisibility, 500); // Change the blinking speed by adjusting the interval time in milliseconds

////////////////////////////////////////////////////////////

let people = document.getElementById("peopleText");
console.log(people);

function people1(){
    people.innerHTML = "Arun Rachuri is an Ex-IBMer and has the vision to deliver world class websites and mobile applications meaningful to businesses across the globe. He has a proven track record of building clientele including popular MNC’s. Arun has a Bachelor's Degree in Business Administration.";
}
function people2(){
    people.innerHTML = "Ram Peri, another Ex-IBMer, brings expertise in B2B sales, contract executions, and project budgeting. His background, along with a Bachelor's Degree in World History, enables him to excel in sales and project management.";
}
function people3(){
    people.innerHTML = "Simran Tripathy is the HR Management Specialist overseeing the Human Resources department. With an MBA in Human Resource Management, she ensures a positive and inclusive work environment for the team.";
}

////////////////////////////////////////////////////////////
const slides = document.querySelectorAll(".slide")
// console.log(slides)
var counter =0;
slides.forEach(
    (slide, index) =>{
        slide.style.left = `${index*100}%`
    }
)

textFetch(counter);
const goPrev = () => {
    if(counter>0){
        counter--;
        slideImage();
    }
    textFetch(counter);
}
const goNext = () => {    
    if(counter>2){
        counter=-1;
    }
    counter++;
    // console.log(counter);
    slideImage();
    textFetch(counter);
}
const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

setInterval(goNext, 10000);

function textFetch(index){
    let t = "";
    switch(index) {
        case 0:
            t = "Let's get Interview Ready<br>Course 1";
            break;
        case 1:
            t = "Let's Learn FullStack<br>Course 2";
            break;
        case 2:
            t = "Get Set go Machine Learning<br>Course 3";
            break;
        case 3:
            t = "Let's Learn FullStack<br>Course 4";
            break;
        default:
          // code block
      }
    let carouselText = document.getElementById("carousel_text");
    carouselText.style.opacity = 0;
    setTimeout(() => {
        carouselText.innerHTML = t;
        carouselText.style.opacity = 1;
    }, 500);
}

// review 
const comments = document.querySelectorAll(".review_sec");

var count = 0;
console.log(comments)

 
comments.forEach(
    (comments, index) =>{       
        comments.style.left = `${index*115}%`
    }
)    


const revPrev = () => {
    if(count>0)
    count--;
    slideRev();
}
const revNext = () => {    
    count++;
    slideRev();
}
const slideRev = () =>{
    comments.forEach(
        (cmt) => {
            cmt.style.transform = `translate(-${count*104.7}%)`;
            console.log("running inside")
        }
    )
}
