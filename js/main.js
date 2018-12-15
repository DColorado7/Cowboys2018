$( document ).ready(function() {
    console.log( "ready!" );
        
        $('#btn-animate').on('click',function() {
        
        $('#tip').addClass('animated fadeOutUp');
       $('#btn-animate').addClass('animated fadeOutLeft');
    })




});