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

    if(a ==""){
        document.getElementById("username").innerHTML="*-please fill the username-*";
        return false;
    }
    if(a ==""){
        document.getElementById("password").innerHTML="please fill the password";
        return false;
    }
    if(a ==""){
        document.getElementById("confirmpass").innerHTML="please fill the confirmpassword";
        return false;
    }
    if(a ==""){
        document.getElementById("mobileno").innerHTML="please fill the mobile number";
        return false;
    }
    if(a ==""){
        document.getElementById("gmails").innerHTML="please fill the gmail id";
        return false;
    }
}

