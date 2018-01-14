/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
     var timeout = setTimeout( function(){
     var homeElementId = homeElement.id;
     var homeElementClass = home.className;
     homeElement.id = homeElementClass;
     homeElement.className = homeElementId;
     }, 5000);


     //console.log(homeElement, typeof homeElement);
     //console.log(childElements, typeof childElements);
     //console.log(banner, typeof banner);
     //console.log(blocks, typeof blocks);
     //console.log(links, typeof links);

     for (var i = 0; i < childElements.length; i++){
        console.log("Typ to: " + typeof childElements[i] + ", warotść to " + childElements[i].innerText);
     }

});
