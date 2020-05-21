//inputs
var username=document.getElementsByName("username");
var email=document.getElementsByName("email");
var subject=document.getElementsByName("subject");
var query=document.getElementsByName("query");
const inputs=[username,email,subject,query];

//labels
var labelusername=document.querySelector(".labelusername");
var labelemail=document.querySelector(".labelemail");
var labelsubject=document.querySelector(".labelsubject");
var labelquery=document.querySelector(".labelquery");
const labels=[labelusername,labelemail,labelsubject,labelquery];

username.addEventListener('focus',() =>{ 
  labelusername.style.top="40";
});

