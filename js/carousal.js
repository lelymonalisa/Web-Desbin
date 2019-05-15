var video = document.querySelectorAll('video');

$(document).ready(function(){
    $("#carouselExampleIndicators").on('slide.bs.carousel', function(){
        for (var x=0;x<video.length;x++){
            video[x].pause();
        }
    });
});