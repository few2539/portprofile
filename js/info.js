/* reveal animation text intro */
$(document).ready(function () {
  setTimeout(function () {
    $('.has-animation').each(function (index) {

      $(this).delay($(this).data('delay')).queue(function () 
      {
        $(this).addClass('animate-in');
      });
    });
  },9000);
  });


  // nab
