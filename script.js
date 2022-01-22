// JavaScript Document
/*$(function() {
  $('.header__btn').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.header__nav').addClass('active');
    } else {
      $('.header__nav').removeClass('active');
    }
  });
});*/

// $(".openbtn1").click(function() {
//     $(this).toggleClass('active');
// });

$(function() {
    $(".openbtn1").click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header__nav').addClass('active');
        } else {
            $('.header__nav').removeClass('active');
        }
    });
});