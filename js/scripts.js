 const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
 ];

 const caroselloElement = document.querySelector(".carosello");

 for (let i = 0 ; i < images.length ; i++){
    console.log("images[i]" , images[i], typeof images[i]);

    caroselloElement.innerHTML += `<div class="slide">
                                    <img src="${images[i]}"> 
                                    </div>`;
 }  

  const allSlides = document.querySelectorAll(".slide");
  console.log("allSlides" , allSlides , typeof allSlides);

  allSlides[0].classList.add("current");

let currentSlide = 0;
const nextArrow = document.querySelector(".next");
const previoustArrow = document.querySelector(".previous");

  nextArrow.addEventListener("click", 
    function(){
        console.log("cliccato su .next");

        allSlides[currentSlide].classList.remove("current");
        currentSlide = currentSlide + 1;
        allSlides[currentSlide].classList.add("current");
        previoustArrow.classList.remove("hidden");
        if(currentSlide == allSlides.length - 1){
            nextArrow.classList.add("hidden");
        }
    }
)

  previoustArrow.addEventListener("click",
    function(){
        console.log("cliccato su .previous");

        allSlides[currentSlide].classList.remove("current");
        currentSlide = currentSlide - 1;
        allSlides[currentSlide].classList.add("current");
        if(currentSlide == 0){
            previoustArrow.classList.add("hidden");
        }
        nextArrow.classList.remove("hidden");
        
    }
)
 
  