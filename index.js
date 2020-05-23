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

function username1(){
  if(username.value === ""){
    console.log('null');
  }
  else if(username.value.length < 3){
    console.log('<3');
  }
  else if(username.value.length > 19){
    console.log('>19');
  }
}