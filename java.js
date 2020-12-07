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
const correctNumWin = document.getElementById('correctNumWin');
const correctNumLose = document.getElementById('correctNumLose');
const nexts = document.querySelectorAll('.next');
const result = document.getElementById('result');
const ansImgCorrect = document.querySelectorAll('.ansImgCorrect');
const ansImgWrong = document.querySelectorAll('.ansImgWrong');


correctNumWin.innerHTML=correct;
correctNumLose.innerHTML=correct;
for(let i = 0; i < nexts.length; i++) {
  nexts[i].hidden=true;
}

function correctAns(){
  if(clicked == false){
    for(let i = 0; i < ansImgCorrect.length; i++) {
      ansImgCorrect[i].src="images/quizImages/correct.png";
    }  
    correct++;
    clicked = true;
  }
  correctNumWin.innerHTML=correct;
  correctNumLose.innerHTML=correct;

  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=false;
    result.style.width="25vw";
  }

};

function wrongAns(){
  if(clicked == false){
    for(let i = 0; i < ansImgWrong.length; i++) {
      ansImgWrong[i].src="images/quizImages/wrong.png";
    } 
    clicked = true;
  }
   
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=false;
    result.style.width="25vw";
  }

};

function goToQ2(){
  scrollSection(navLinks[2].dataset.link);
  clicked=false;
  for(let i = 0; i < ansImgCorrect.length; i++) {
    ansImgCorrect[i].src="images/quizImages/ans.png";
  }  
  for(let i = 0; i < ansImgWrong.length; i++) {
    ansImgWrong[i].src="images/quizImages/ans.png";
  } 
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }
}

function goToQ3(){
  scrollSection(navLinks[3].dataset.link);
  clicked=false;
  for(let i = 0; i < ansImgCorrect.length; i++) {
    ansImgCorrect[i].src="images/quizImages/ans.png";
  }  
  for(let i = 0; i < ansImgWrong.length; i++) {
    ansImgWrong[i].src="images/quizImages/ans.png";
  } 
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }
}

function goToQ4(){
  scrollSection(navLinks[4].dataset.link);
  clicked=false;
  for(let i = 0; i < ansImgCorrect.length; i++) {
    ansImgCorrect[i].src="images/quizImages/ans.png";
  }  
  for(let i = 0; i < ansImgWrong.length; i++) {
    ansImgWrong[i].src="images/quizImages/ans.png";
  } 
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }

}
function goToQ5(){
  scrollSection(navLinks[5].dataset.link);
  clicked=false;
  for(let i = 0; i < ansImgCorrect.length; i++) {
    ansImgCorrect[i].src="images/quizImages/ans.png";
  }  
  for(let i = 0; i < ansImgWrong.length; i++) {
    ansImgWrong[i].src="images/quizImages/ans.png";
  } 
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
 
  const winPage=document.getElementById('section-7');

 function goToEnd() {
  clicked=false;
  for(let i = 0; i < ansImgCorrect.length; i++) {
    ansImgCorrect[i].src="images/quizImages/ans.png";
  }  
  for(let i = 0; i < ansImgWrong.length; i++) {
    ansImgWrong[i].src="images/quizImages/ans.png";
  } 
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }
  result.style.width="0vw";
   if(correct>=4){
    winPage.style.display="block"; 
    scrollSection(navLinks[6].dataset.link);
    
   }else{
     
     scrollSection(navLinks[7].dataset.link);
    }
  }

  /*home*/
const homeWin = document.getElementById('homeWin');
const homeLose = document.getElementById('homeLose');

homeWin.addEventListener('mouseenter', () => {
  homeWin.style.marginTop="0.5vw";
  });
homeWin.addEventListener('mouseleave', () => {
    homeWin.style.marginTop="0vw";
  });
homeLose.addEventListener('mouseenter', () => {
  homeLose.style.marginTop="0.5vw";
  });
homeLose.addEventListener('mouseleave', () => {
    homeLose.style.marginTop="0vw";
  });

  function goToHome() {
    correct=0;
    winPage.style.display="none"; 
   scrollSection(navLinks[0].dataset.link);
   

 }