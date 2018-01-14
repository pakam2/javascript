/**
 * Created by Jacek on 2016-01-12.
 */
var search_divs = document.querySelectorAll('div');
console.log(search_divs);
for (var i = 0; i < search_divs.length; i++){
  search_divs[i].addEventListener("mouseover", function(){
    this.classList.add('hover');
    for (var j = 0;j < this.children.length; j++){
      var par = this.children[j];
        //console.log(par.children);
        for (var g = 0; g < par.children.length; g++){
          par.children[g].style.backgroundColor = "green";
        }
          par.firstElementChild.style.backgroundColor = "red";
          par.lastElementChild.style.backgroundColor = "blue";
  }
  });
}
