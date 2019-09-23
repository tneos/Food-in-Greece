$(document).ready(function(){
    $('.carousel-control-prev').click(function(){
        $('.carousel-inner').carousel('prev')
    });

    $('.carousel-control-next').click(function(){
        $('.carousel-inner').carousel('next')
    });
});
