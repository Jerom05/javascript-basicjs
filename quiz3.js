let balance= 3333;
var isActive = true;
let checkedBalance = true;
if(checkedBalance == true){
  if(isActive==true && balance>0){
    console.log("your account balance is :", balance);
  }
  else {
    if(isActive== false){
      console.log("your account is no longer to active");
    }
    else{
      console.log("your balance is less than 0");
    }
  }
}
else {
  console.log("Have a nice day");
}
