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
    console.log(counter);
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
