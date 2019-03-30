
var room="gallery";
var suspect;
let weapon;
let sloved;

if (room =="dining room"){
  suspect ="Mr. Parker";
  weapon = "knife"
  sloved = true;
}
else if (room =="gallery") {
  suspect= "Ms van clave";
  weapon= "trophy";
  sloved= true;
}
else if (room=="billiards room") {
  suspect="Mrs Spar";
  weapon = "stick";
  sloved= true;
}
else {
  suspect="Mr. kaleoff";
  weapon= "poison"
  sloved=true;
}

if(sloved){
  console.log(suspect,"did it in the",room ,"with the", weapon+"");
}
