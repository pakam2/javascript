$(document).ready(function() {
  var shopping = $('.shopping button');
  shopping.on('click', function(event){
    if ($(this).hasClass('added')){
      $(this).removeClass('added');
      $(this).closest('.cart-item').css('border-color', 'black');
    }
    else {
      $(this).addClass('added');
      $(this).closest('.cart-item').css('border-color', 'green');
    };

  });


});
