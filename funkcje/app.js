//count.html
var count = (function() {
  var counter;
  counter = 0;
  return function(){
    counter++;
    document.getElementById("first").innerHTML = counter;
  }
})();
