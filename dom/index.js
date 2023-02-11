var name =prompt("Enter your Name....,","Enter..,");
var lover= prompt("Enter your Lover Name...,","Enter..,");
var loveScore =Math.random();
loveScore =loveScore *100;
loveScore =Math.floor(loveScore) + 1;
if(loveScore >=70){
  alert("Your loveSciore is : " + loveScore);
  alert("You and  " + lover + "  are the true and Aswome lovers 💕💘💕...,");
  alert("Wish You Happy Valentence Day to Both Of  💕" + name + " 💘  " + lover + "💕.");
}
else if (loveScore >= 50) {
  alert("Your loveSciore is : " + loveScore + " %");
  alert("You and " + lover + " are the true lovers only..,");
  alert("Wish You Happy Valentence Day to Both Of  " + name + " 💘   " + lover + ".");
}
else if (loveScore >= 30) {
  alert("Your loveSciore is : " + loveScore + " %");
  alert("You and " + lover + " are the lovers only..,");
  alert("Wish You Happy Valentence Day to Both Of  " + name + " 💕 " + lover + ".");
}
else{
  alert("Your Love Score is : " + loveScore + "%");
  alert(" Any way Wish You Happy Valentence Day");
}
