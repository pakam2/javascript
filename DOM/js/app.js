/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
  /*   var mydiv = document.querySelector('.exercise.ex1');
     //console.log(mydiv);
     var elements = mydiv.querySelectorAll('li');
     //console.log(elements);
     for (var i = 0; i < elements.length; i++)
     {
       if  (!elements[i].hasAttribute('data-direction'))
       {

         elements[i].setAttribute('data-direction', 'up');
       }

       if (i % 2 == 0)
       {
         elements[i].style.backgroundColor = "green";


       }
     }

     elements[4].classList.add('big');

*/
// zadanie drugie
/*
     var mydiv2 = document.querySelector('.exercise.ex2');
     var elements2 = mydiv2.querySelectorAll('option');
     //console.log(elements2);
     for (var i = 0; i < elements2.length; i++) {
       elements2[i].innerText = elements2[i].getAttribute('value');
       elements2[i].dataset.year = parseInt(elements2[i].getAttribute("value"), 10) + 20;
     }
*/

//zadanie trzecie

  var el = document.querySelector('.exercise.ex3');
  var divall = el.querySelectorAll('div');
  var all_a = el.querySelectorAll('a');

  //console.log(divall);

  divall[1].style.width = '100px' ;
  all_a[0].innerText = "Chrome";
  console.log(all_a[1].getAttribute('backgroundImage'));
  all_a[1].setAttribute('href', 'https://www.microsoft.com/pl-pl/windows/microsoft-edge');
  all_a[2].setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/?utm_source=google&utm_medium=cpc&utm_campaign=Firefox-Brand-PL-TS-GGL-Exact&utm_term=firefox&utm_content=A144_A203_A006327&gclid=EAIaIQobChMIwMX1orrX2AIVU0kZCh2SQgT8EAAYASAAEgKdIvD_BwE&gclsrc=aw.ds');
  all_a[2].innerText = "Firefox";





});
