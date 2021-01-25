/* function form(){
    var fname =document.getElementById("fname");
    var pass = document.getElementById("pass");
    
} */

/* for(var a = 1; a<= 10; a++){
    if(a % 2 == 0){
        document.write(a + "<br>");
    }
}

for(var a=1; a<=100; a++){
    if(a % 2 ==0){
        console.log(a + "<br>");
    }
}

for(var a=1; a <=10; a++){
    if(a%2==0){
        console.log(a);
    }
}

for (var a=1; a <=10; a++){
    if(a % 2 ==0){
        console.log(a);
    }
}

for(var a = 1; a <= 100; a++){
    if(a % 2 ==0){
        document.write(a);
    }
}

for(var a= 1; a <=10; a++){
    if(a % 2 !=0){
        console.log(a);
    }
} */

//check if given variable is equal to 3 if yes say hi otherwise say hello

/* function welCome(a){
  if(a >=18){
    return "Hi";
  }else{
      return"Hello";
  }
}
function greating(name,age){
    var a= welCome(age) + name;
    console.log(a);
}


/* create a function which will take 2 parameter name and age if age is greater than or equal to 
18 print hi and give name otherwise hello given name; */

/* function nameAge(name,age){
    var a= welCome(age);
    var final=a + name;
    console.log(final);
}
nameAge("ujjwal",29);
nameAge("ujjwal",17);

var target=document.getElementById("sub");
target.addEventListener("click",function(e){
    var a =document.getElementById("name").value;
nameAge(a,29);
})  */

function valiDate(){
    var a =document.getElementById("user").value;
    var b =document.getElementById("pass").value;
    var c =document.getElementById("conpass").value;
    var d =document.getElementById("mobile").value;
    var e =document.getElementById("mail").value;

    if(a == ""){
        document.getElementById("username").innerHTML="*please fill the username*";
         
    }else if((a.length <= 5) || (a.length >= 20)){
        document.getElementById("username").innerHTML="*input must be 2 to 20 *";
    }else{
        document.getElementById("username").innerHTML="";
    }
    
    /* if(!isNaN(a)){
        document.getElementById("username").innerHTML="*only chracter are allowed *";
    }
    else{
        document.getElementById("username").innerHTML="";
    }
 */

    if(b == ""){
        document.getElementById("password").innerHTML="please fill the password";
         
    }
    else if((b.length <= 5) || (b.length >= 20)){
        document.getElementById("password").innerHTML="*-input must be 5 to 20 -*";
    }
    
    else if(b!= c){
        document.getElementById("password").innerHTML="*-password are not same -*";
    }

    else{
        document.getElementById("password").innerHTML="";
    }

    
    if(c == ""){
        document.getElementById("confirmpass").innerHTML="please fill the confirmpassword";
        
    }
    else{
        document.getElementById("confirmpass").innerHTML="";
    }

    
    if(d == ""){
        document.getElementById("mobileno").innerHTML="please fill the mobile number";
        
    }
    if(isNaN(d)){
        document.getElementById("mobileno").innerHTML="Input only chracter";
    }
    if(d.length!=10){
        document.getElementById("mobileno").innerHTML="mobile number must be 10 digits";
    }
    else{
        document.getElementById("mobileno").innerHTML="";
    }


    if(e ==""){
        document.getElementById("gmails").innerHTML="please fill the gmail id";
        
    }
    if(e.indexOf('@') <= 0){
        document.getElementById("gmails").innerHTML="@ invalid position";
    }
    if((e.charAt(e.length-4)!='.') && (e.charAt(e.length-3)!='.')){
        document.getElementById("gmails").innerHTML=" . invalid position";
    }
    else{
        document.getElementById("gmails").innerHTML="";
    }
}

var btn =document.getElementById("submit");
btn.addEventListener("click",function(e){
    e.preventDefault();
    var i=valiDate();
    i;
})

