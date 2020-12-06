const navLinks = document.querySelectorAll('nav a'),
sliderRects = document.querySelectorAll('.rect');


function scrollSection(section) {

window.scroll({
top: document.getElementById(section).offsetTop,
behavior: 'smooth' 
});
}

function animateStuff() {
sliderRects.forEach(function(sliderRect) {
const slideInAt = (window.scrollY + window.innerHeight) - sliderRect.offsetHeight / 2;
const imageBottom = sliderRect.offsetTop + sliderRect.offsetHeight;
const isHalfShown = slideInAt > sliderRect.offsetTop;
const isNotScrolledPast = window.scrollY < imageBottom;
if (isHalfShown && isNotScrolledPast) {
sliderRect.classList.add('active');
} else {
sliderRect.classList.remove('active');
}
});
}

navLinks.forEach(function(element) {
element.addEventListener('click', function(e) {
e.preventDefault();

let target = this.dataset.link;

scrollSection(target);
});
});

window.addEventListener('scroll', function() {
animateStuff();
});




/*left box*/
const left = document.getElementById('left');
left.addEventListener('mouseenter', () => {
  left.src = "images/home_left.png";
});
left.addEventListener('mouseleave', () => {
    left.src = "animation/home_left_animation.gif";
});


/*center box*/
const center = document.getElementById('center');
center.addEventListener('mouseenter', () => {
  center.src = "images/home_center.png";
});
center.addEventListener('mouseleave', () => {
    center.src = "animation/home_center_animation.gif";
});

/*start*/
const start = document.getElementById('start');

start.addEventListener('mouseenter', () => {
    start.style.marginTop="1.5vw";
  });
start.addEventListener('mouseleave', () => {
    start.style.marginTop="1vw";
  });

function startQuiz() {
    scrollSection(navLinks[1].dataset.link);
 }


/*click Ans*/
 

var correct = 0;
var clicked = false;
const correctNum = document.getElementById('correctNum');
const nexts = document.querySelectorAll('.next');
const result = document.getElementById('result');

correctNum.innerHTML=correct;
for(let i = 0; i < nexts.length; i++) {
  nexts[i].hidden=true;
}

function correctAns(){
  if(clicked == false){
    correct++;
    clicked = true;
  }
  correctNum.innerHTML=correct; 
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=false;
    result.style.display="20vw";
  }

};

function wrongAns(){
  if(clicked == false){
    clicked = true;
  }
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=false;
    result.style.width="20vw";
  }

};

function goToQ2(){
  scrollSection(navLinks[2].dataset.link);
  clicked=false;
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }
}

function goToQ3(){
  scrollSection(navLinks[3].dataset.link);
  clicked=false;
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }
}

function goToQ4(){
  scrollSection(navLinks[4].dataset.link);
  clicked=false;
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }

}
function goToQ5(){
  scrollSection(navLinks[5].dataset.link);
  clicked=false;
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }
  result.style.width="0vw";

}


 /*result*/
 
 


 result.addEventListener('mouseenter', () => {
   result.style.marginTop="41.5vw";
   });
 result.addEventListener('mouseleave', () => {
   result.style.marginTop="41vw";
   });  
 
 function goToEnd() {
     scrollSection(navLinks[6].dataset.link);
  }
 
  function goToHome() {
   scrollSection(navLinks[0].dataset.link);
 }