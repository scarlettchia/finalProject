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

const navDot = document.getElementsByTagName('li');

for(let i = 1; i < navDot.length; i++) {
  navDot[i].hidden=true;
};



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
    document.getElementById('section-2').style.display="block";
    scrollSection(navLinks[1].dataset.link);
    navDot[1].hidden=false;
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
const winPage=document.getElementById('section-7');


for(let i = 0; i < nexts.length; i++) {
  nexts[i].hidden=true;
};


for(let i = 0; i < nexts.length; i++) {
  nexts[i].addEventListener('mouseenter', () => {
    nexts[i].style.marginTop="41.5vw";
    });
  nexts[i].addEventListener('mouseleave', () => {
    nexts[i].style.marginTop="41vw";
    }); 
};

const ansA = document.querySelectorAll('.ansA.slide-in');
const ansB = document.querySelectorAll('.ansB.slide-in');

for(let i = 0; i < ansA.length; i++) {
  ansA[i].addEventListener('mouseenter', () => {
    ansA[i].style.backgroundColor="white";
    });
    ansA[i].addEventListener('mouseleave', () => {
      ansA[i].style.backgroundColor="black";
      });
};
for(let i = 0; i < ansA.length; i++) {
  ansB[i].addEventListener('mouseenter', () => {
    ansB[i].style.backgroundColor="white";
    });
    ansB[i].addEventListener('mouseleave', () => {
      ansB[i].style.backgroundColor="black";
      });
};




/*Q1*/
const canele = document.getElementById('canele');
canele.addEventListener('mouseenter', () => {
  canele.src = "images/quizImages/canele.png";
});
canele.addEventListener('mouseleave', () => {
  canele.src = "animation/canele.gif";
});

function q1_correct(){
  if(clicked == false && ansImgCorrect[0].src == ansImgWrong[0].src){
    ansImgCorrect[0].src="images/quizImages/correct.png";
    correct++;
    clicked = true;
  }  
    nexts[0].hidden=false;
};
function q1_wrong(){
  if(clicked == false && ansImgCorrect[0].src == ansImgWrong[0].src){
    ansImgWrong[0].src="images/quizImages/wrong.png";
    clicked = true;
  }  
    nexts[0].hidden=false;
};
function goToQ2(){
  document.getElementById('section-3').style.display="block";
  scrollSection(navLinks[2].dataset.link);
  clicked=false;
  navDot[2].hidden=false;
};

/*Q2*/
const ginger = document.getElementById('ginger');
ginger.addEventListener('mouseenter', () => {
  ginger.src = "images/quizImages/ginger.png";
});
ginger.addEventListener('mouseleave', () => {
  ginger.src = "animation/ginger.gif";
});
function q2_correct(){
  if(clicked == false && ansImgCorrect[1].src == ansImgWrong[1].src){
    ansImgCorrect[1].src="images/quizImages/correct.png";
    correct++;
    clicked = true;
  }  
    nexts[1].hidden=false;
};
function q2_wrong(){
  if(clicked == false && ansImgCorrect[1].src == ansImgWrong[1].src){
    ansImgWrong[1].src="images/quizImages/wrong.png";
    clicked = true;
  }  
    nexts[1].hidden=false;
};
function goToQ3(){
  document.getElementById('section-4').style.display="block";
  scrollSection(navLinks[3].dataset.link);
  clicked=false;
  navDot[3].hidden=false;
};

/*Q3*/
const tiramisu = document.getElementById('tiramisu');
tiramisu.addEventListener('mouseenter', () => {
  tiramisu.src = "images/quizImages/tiramisu.png";
});
tiramisu.addEventListener('mouseleave', () => {
  tiramisu.src = "animation/tiramisu.gif";
});
function q3_correct(){
  if(clicked == false && ansImgCorrect[2].src == ansImgWrong[2].src){
    ansImgCorrect[2].src="images/quizImages/correct.png";
    correct++;
    clicked = true;
  }  
    nexts[2].hidden=false;
};
function q3_wrong(){
  if(clicked == false && ansImgCorrect[2].src == ansImgWrong[2].src){
    ansImgWrong[2].src="images/quizImages/wrong.png";
    clicked = true;
  }  
    nexts[2].hidden=false;
};
function goToQ4(){
  document.getElementById('section-5').style.display="block";
  scrollSection(navLinks[4].dataset.link);
  clicked=false;
  navDot[4].hidden=false;
};

/*Q4*/
const chocolate = document.getElementById('chocolate');
chocolate.addEventListener('mouseenter', () => {
  chocolate.src = "images/quizImages/chocolate.png";
});
chocolate.addEventListener('mouseleave', () => {
  chocolate.src = "animation/chocolate.gif";
});
function q4_correct(){
  if(clicked == false && ansImgCorrect[3].src == ansImgWrong[3].src){
    ansImgCorrect[3].src="images/quizImages/correct.png";
    correct++;
    clicked = true;
  }  
    nexts[3].hidden=false;
};
function q4_wrong(){
  if(clicked == false && ansImgCorrect[3].src == ansImgWrong[3].src){
    ansImgWrong[3].src="images/quizImages/wrong.png";
    clicked = true;
  }  
    nexts[3].hidden=false;
};
function goToQ5(){
  document.getElementById('section-6').style.display="block";
  scrollSection(navLinks[5].dataset.link);
  clicked=false;
  navDot[5].hidden=false;
};

/*Q5*/
const puff = document.getElementById('puff');
puff.addEventListener('mouseenter', () => {
  puff.src = "images/quizImages/puff.png";
});
puff.addEventListener('mouseleave', () => {
  puff.src = "animation/puff.gif";
});
function q5_correct(){
  if(clicked == false && ansImgCorrect[4].src == ansImgWrong[4].src){
    ansImgCorrect[4].src="images/quizImages/correct.png";
    correct++;
    clicked = true;
  }  
    result.style.display="block";
};
function q5_wrong(){
  if(clicked == false && ansImgCorrect[4].src == ansImgWrong[4].src){
    ansImgWrong[4].src="images/quizImages/wrong.png";
    clicked = true;
  }  
    result.style.display="block";
};
function goToEnd(){
  correctNumWin.innerHTML=correct;
  correctNumLose.innerHTML=correct;
  if(correct>=4){
    winPage.style.display="block"; 
   scrollSection(navLinks[6].dataset.link);
   navDot[6].hidden=false;
  }else{
    document.getElementById('section-8').style.display="block";
    scrollSection(navLinks[7].dataset.link);
    navDot[7].hidden=false;
   }
   console.log(correct);
};


 /*result*/
 
 result.addEventListener('mouseenter', () => {
  result.style.marginTop="41.5vw";
  });
result.addEventListener('mouseleave', () => {
  result.style.marginTop="41vw";
  });  


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
    scrollSection(navLinks[0].dataset.link);
    for(let i = 1; i < navDot.length; i++) {
      navDot[i].hidden=true;
    };
    setTimeout("reset()",1000 );  
 };

 function reset(){
  correct=0;
  clicked=false;
  for(let i = 0; i < 5; i++) {
    ansImgCorrect[i].src="images/quizImages/ans.png";
    ansImgWrong[i].src="images/quizImages/ans.png";
  }  
  for(let i = 0; i < nexts.length; i++) {
    nexts[i].hidden=true;
  }
  result.style.display="none";
  document.getElementById('section-2').style.display="none";
  document.getElementById('section-3').style.display="none";
  document.getElementById('section-4').style.display="none";
  document.getElementById('section-5').style.display="none";
  document.getElementById('section-6').style.display="none";
  document.getElementById('section-7').style.display="none";
  document.getElementById('section-8').style.display="none";
  
  
 };