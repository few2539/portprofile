function restart(){
  
  $('.e1').css({'top': '40px'}),
  $('.e1').css({'display': 'none'}),
  $('.e1').animate({'top': 0}, {"duration":4000,"queue":false});
  $('.e1').fadeIn(6500); 
}

$(document).ready(restart());
setTimeout(function() { restart(); }, 2000);




function Study() {
  
  var app;

  $(document).ready(function() {
    return app.init();
  });

  app = {
    text: ".:: KING MONGKUT'S UNIVERSITY OF TECHNOLOGY THONBURI ::. ",

    index: 0,
    chars: 0,
    speed: 100,
    container: ".textnaja .contentstudy",
    init: function() {
      this.chars = this.text.length;
      return this.write();
    },
    write: function() {
      $(this.container).append(this.text[this.index]);
      if (this.index < this.chars) {
        this.index++;
        return window.setTimeout(function()   {
          return app.write();
        }, this.speed);
      }
    }
  };  

};

setTimeout(function() { Study(); }, 8500);


 