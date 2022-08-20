import $ from 'jquery';
var buton = document.getElementById("buton");
var allchar = "0123456789ABCDEF";

buton.addEventListener("click", myFun);

function myFun() {
  var randcol = "";
  for (var i = 0; i < 6; i++) {
    randcol += allchar[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = "#" + randcol;
     var element=document.getElementById("element");
     element.style.color="#" + randcol;
     var btn = document.getElementById("buton");
       btn.style.backgroundColor = "#" + randcol;

}
/*-----------------------------------------------------*/
     var quotearray =[
        " <q>Whatever the mind of man can conceive and believe, it can achieve.</q>",
        "<q>You only live once, but if you do it right, once is enough.</q>",
        "<q>Life isn’t about getting and having, it’s about giving and being.</q>",
        "<q>I attribute my success to this: I never gave or took any excuse.</q>",
        "<q>You miss 100% of the shots you don’t take.</q>",
        "<q>I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.</q>",
        "<q>The most difficult thing is the decision to act, the rest is merely tenacity.</q>",
        "<q>If a man does his best, what else is there?</q>",
        "<q>Every strike brings me closer to the next home run</q>",
        "<q>Definiteness of purpose is the starting point of all achievement.</q>",
      ]
      
     var authorarray =[
     "Napoleon Hill",
     "Albert Einstein",
     "Kevin Kruse",
     "Robert Frost",
     "Florence Nightingale",
     "Wayne Gretzky",
     "Michael Jordan",
     "Amelia Earhart",
     "Babe Ruth",
     "W. Clement Stone",
    ]
   function myLost(){
     var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('element').innerHTML = quotearray[randNum];
   document.getElementById('author').innerHTML = authorarray[randNum];
}

buton.addEventListener("click", myLost);