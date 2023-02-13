function navMenu() {
    let navMenu = document.querySelector('.navMenu');
    let navList = document.querySelector('.navList');
    if( navMenu.style.width === "0vw") {
    navMenu.style.width = '100vw';
    navList.style.fontSize = '3vh';
  } else {
    navMenu.style.width = '0vw';
    navList.style.fontSize = '0vh';
  }
}


   //page indicator
   const sections = document.querySelectorAll('section');
   const windowHeight = window.innerHeight;
   const pageIndicator = document.querySelector('.pageIndicator');
   console.log(windowHeight);

   function reset () {
    for (let i = 0 ; i < pageIndicator.children.length; i++) {
      pageIndicator.children[i].classList.remove('selected');
    }
  }

   window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    sections.forEach((section, i) => {
      if (section.offsetTop < scrollTop + windowHeight / 2 
      && scrollTop < section.offsetTop + windowHeight/2 ){
        reset();
        pageIndicator.children[i].classList.add('selected');
      }
    })
   })


   
function helloScreen() {
  const element = document.getElementById("helloScreen");
  element.scrollIntoView();
}

function homeScreen() {
  const element = document.getElementById("homeScreen");
  element.scrollIntoView();
}

function gameBoy() {
  const element = document.getElementById("gameBoy");
  element.scrollIntoView();
}

function gbaScreen1() {
 const element = document.getElementById("gbaScreen1");
 element.scrollIntoView(); 
}

function gbaScreen1b() {
 const element = document.getElementById("gbaScreen1bTest");
 element.scrollIntoView(); 
}

function gbaScreen2() {
 const element = document.getElementById("gbaScreen2");
 element.scrollIntoView();

}

function gbaScreen3() {
 const element = document.getElementById("gbaScreen3");
 element.scrollIntoView();
}

function projects() {
 const element = document.getElementById("projects");
 element.scrollIntoView();
}

function Calculator() {
 const element = document.getElementById("Calculator");
 element.scrollIntoView();
}

function MDSample() {
 const element = document.getElementById("MDSample");
 element.scrollIntoView();
}

function EMag() {
 const element = document.getElementById("EMag");
 element.scrollIntoView();
}

function contactArea() {
 const element = document.getElementById("contactArea");
 element.scrollIntoView();
}

function sideWork() {
 const element = document.getElementById("sideWork");
 element.scrollIntoView();
}

function divCenter() {
 const element = document.getElementById("divCenter");
 element.scrollIntoView();
}

function container2Test() {
 const element = document.getElementById("container2");
 element.scrollIntoView();
}

function dotNetflix() {
 const element = document.getElementById("dotNetflix");
 element.scrollIntoView();
}



