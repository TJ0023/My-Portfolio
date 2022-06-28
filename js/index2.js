function navMenu() {
    let navMenu = document.querySelector('.navMenu');
    let navList = document.querySelector('.navList');
    if( navMenu.style.height === "0vh") {
    navMenu.style.height = '100vh';
    navList.style.fontSize = '4vh';
  } else {
    navMenu.style.height = '0vh';
    navList.style.fontSize = '0vh';
  }
}

