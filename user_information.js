let Name= sessionStorage.getItem("name");
let Score =sessionStorage.getItem("score");
let Time =sessionStorage.getItem("time");
// score and name ko session storage se laker value Name and Score ko de di

document.querySelector(".name").innerHTML= Name;
// Name ki value .name class ko assign kar di
document.querySelector(".score").innerHTML= Score;
document.querySelector(".time").innerHTML= Time;