function navMenu() {
    let navMenu = document.querySelector('.navMenu');
    let navList = document.querySelector('.navList');
    if( navMenu.style.width === "0vw") {
    navMenu.style.width = '50vw';
    navList.style.fontSize = '3vh';
  } else {
    navMenu.style.width = '0vw';
    navList.style.fontSize = '0vh';
  }
}

function gbaScreen1b() {
    const element = document.getElementById("gbaScreen1-b");
    element.scrollIntoView(); 
   }