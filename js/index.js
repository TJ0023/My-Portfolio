//clock

function displayTime() {
let date = new Date();
let day = date.getDay();
let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = date.getMonth();
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November','December'];
let dateNum = date.getDate();
let hour = date.getHours() % 12 || 12; // just makes it a 12 hour format
let min = date.getMinutes();
let padMin = min.toString().padStart(2,'0');

document.getElementById('time').innerHTML = `${hour}:${padMin}`;
document.getElementById('day').innerHTML = `${weekday[day]}, ${monthList[months]} 
${dateNum}`;

// for the other iphone screens since 
document.getElementById('time2').innerHTML = `${hour}:${padMin}`;


}

setInterval(displayTime, 10);

//loading screen

const loader = document.querySelector(".spinContainer");
const body1 = document.querySelector('body');
const main = document.querySelector(".container1");
const main2 = document.querySelector(".container2");
const main3 = document.querySelector(".projects");
const main4 = document.querySelector(".contactMe");
const pageInd = document.querySelector(".pageIndicator");

function load() {
    setTimeout(() => {
        
        loader.style.opacity = 0;  // sets opacity of loader to 0 and the rest is obvious
        loader.style.display = 'none';

        body1.style.overflowY ='auto';
        main.style.display = 'flex';
        setTimeout(() => (main.style.opacity = 1), 10);
        main2.style.display = 'flex';
        setTimeout(() => (main2.style.opacity = 1), 10);
        main3.style.display = 'flex';
        setTimeout(() => (main3.style.opacity = 1), 10);
        main4.style.display = 'flex';
        setTimeout(() => (main4.style.opacity = 1), 10);
        pageInd.style.display = 'block';
        setTimeout(() => (pageInd.style.opacity = 1), 10);
    }, 2500)

}

load ();

 // display age 
//  function Age() {
//     let today = new Date();
//     let birthday = new Date("2000-03-23");
//     let bday_val = birthday.getTime();
//     let age = today - bday_val;

//     let year = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
//     let miliseconds = Math.floor(age);

//     document.getElementById("display").textContent = `${year}.${miliseconds}`;
//  }
//  setInterval(Age, 1);

// anchor url hide by just using scroll into view I guess?

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
  const element = document.getElementById("gbaScreen1b");
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

function container2() {
  const element = document.getElementById("container2");
  element.scrollIntoView();
}

function dotNetflix() {
  const element = document.getElementById("dotNetflix");
  element.scrollIntoView();
}
