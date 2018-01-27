$(document).ready(function(){
  var button1 = $('.ironMan-btn'),
      button2 = $('.thor-btn'),
      button3 = $('.wolverine-btn');
  button1.on('click', function(event){
    console.log("IronMan");
  });
  button2.on("click", function(event){
    console.log("Thor");
  });
  button3.on("click", function(event){
    button1.off();
    button2.off();
    button3.off();
  });
})
