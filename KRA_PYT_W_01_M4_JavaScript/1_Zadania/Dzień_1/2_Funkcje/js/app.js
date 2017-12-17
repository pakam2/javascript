/**
 * Created by Jacek on 2016-01-11.
 */
function zadaniepierwsze(a, b, c) {
  return a + b + c;
}
console.log(zadaniepierwsze(1, 2, 3));

function zadaniedrugie(promien) {
  var pi = 3.14;
  flag = true;
  if (typeof promien == "number") {

    var pole = pi * (promien * promien);
    var obwod = 2 * promien * pi;
    return pole + " i " +  obwod;
}
  else {
    flag = false;
    return flag;
  }


}
var zadanietrzecie= function () {
  for (i = 1; i < 11; i++){
    console.log('Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych');
    document.write('Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych');
  }
}




function calculateTip(amount, raiting) {
  var tip = 0;
  var textToReturn = 'Opis nieczytelny';
    
  switch (raiting) {
    case "Bardzo dobra obsluga":
      tip = 25;
      console.log(tip);
      break;
    case "Dobra obsluga":
      tip = 20;
      console.log(tip);
      break;
    case "Srednia obsluga":
      tip = 15;
      console.log(tip);
      break;
    case "Zla obsluga":
      console.log(0);
      break;
    default:
      console.log(textToReturn);

}
}
