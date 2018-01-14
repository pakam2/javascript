/**
 * Created by Jacek on 2016-01-12.
 */
var mianButton = document.querySelector('#addBtn');

mianButton.addEventListener("click", function() {

  var order = document.querySelector('#orderId');
  var item = document.querySelector('#item');
  var quantity = document.querySelector('#quantity');
  var table1 = [order, item, quantity];

  var forTable = document.querySelector('#orders');
  var newTr = document.createElement("tr");
  forTable.lastChild.appendChild(newTr);


  for (var i = 0; i <=2; i++){
    var newTd = document.createElement("td");
    var z = table1[1].innerText;
    console.log(z);
    newTd.innerText = table1[i];
    newTr.appendChild(newTd);
  }




});
