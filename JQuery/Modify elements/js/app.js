/*$('document').ready(function () {
  var myButton = $("input[type=submit]");
  console.log(myButton, "tekst");
  myButton.on("click", function(){
      var addUserValue = $("#addUser").val(),
          ageValue = $("#age").val();

      var newElement = $("<li>", {'data-age': ageValue});
          newElement.text(addUserValue
          );
          $(".main").append(newElement);
          changeColor(ageValue, newElement);
  });
  function changeColor (age, newElement) {
    if (age < 15) {
      newElement.css("color", "red");
    }
    else if (age >= 15 && age <40){
      newElement.css("color", "blue");
    }
    else {
      newElement.css("color", "brown")
    }
  }
});
*/
//adding a div with span and events
/*
document.addEventListener('DOMContentLoaded', function(){
  var selectedUl = document.querySelector('ul'),
      krzysztof = selectedUl.querySelector('#krzys'),
      newDiv = document.createElement('div'),
      allLi = selectedUl.querySelectorAll('li'),
      divChildren,
      result = '';
      selectedUl.insertBefore(newDiv, krzysztof);
  for (var i = 0; i < allLi.length; i++) {
    result += "<span>" + allLi[i].innerText + "</span>";
  }
  newDiv.innerHTML = result;
  divChildren = newDiv.children;
  for (i = 0; i < divChildren.length; i++){
    divChildren[i].addEventListener("click", function(){
      this.parentElement.removeChild(this);
    });
  }

});
*/


$(document).ready(function(){
    var krzys = $('#krzys'),
        newDiv = $('<div>'),
        allLi = $('li'),
        result = '';
    krzys.before(newDiv);
    newDiv.on('click', 'span', function(){
        $(this).remove();
    });
    allLi.each(function(index, element){
        result += "<span>" + $(this).text() + "</span>"

    });
    newDiv.html(result);

    var removeButton = $('#remove');
    var removeDiv = $('.where-i-am div');
    var removeHtml = "";
    removeButton.on("click", function() {
      setTimeout(function() {
        newDiv.remove();
        }, 2000);
      setTimeout(function(){removeDiv.remove(),4000});
    });
});
