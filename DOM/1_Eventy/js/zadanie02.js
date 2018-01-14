/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {
  var bubble = document.querySelector('#bubblingButtons');
  console.log(bubble);
  var buttons = bubble.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
      this.dataset.counter = parseInt(this.dataset.counter, 10) + 1;
    });
  }

});
