$(document).on('mousemove','.banner',function(e){

    var positionX = e.clientX;
    var positionY = e.clientY;


    positionX = Math.round(positionX / 10) - 80;
    positionY = Math.round(positionY / 10) - 80;


    $(this).find(".banner-text").css({'transform':'translate('+positionX+'px, '+positionY+'px )' ,
    
    'transition-duration':'0'});

});