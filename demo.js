var per = 0;
var timer;
timer = setInterval(function(){
    $('.bar').css('width' , per + '%')
    per += 1;
    if(per > 100){
      $('.LoadingPage').addClass('complete');
      setTimeout(function(){
          $('.word').html('<h2>Hello<br>There</h2><br><h4>Ahhhh We will eat you!!</h4>')
        },2500);
      clearInterval(timer);
    }
  },30)