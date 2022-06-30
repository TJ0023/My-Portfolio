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


