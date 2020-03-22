
function myFun(){

var randNum1 = Math.floor(Math.random() * 6 ) + 1;

var randImg = "images/dice" + randNum1 + ".png";

var randImgSource = randImg;

image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randImgSource);

var randNum2 = Math.floor(Math.random() * 6 ) + 1;

var randImg2 = "images/dice" + randNum2 + ".png";

var randImgSource2 = randImg2;

image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randImgSource2);

if(randNum1 > randNum2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randNum1 < randNum2){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}

}
