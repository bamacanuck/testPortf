$(document).ready(function(){
    // invoke the carousel
        $('#myCarousel').carousel({
          interval: false
        });
    
    // scroll slides on mouse scroll 
    $('#myCarousel').bind('wheel mousewheel DOMMouseScroll', function(e){
    
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                $(this).carousel('prev');
                
            }
            else{
                $(this).carousel('next');
                
            }
        });
    
    //scroll slides on swipe for touch enabled devices 
    
         $("#myCarousel").on("touchstart", function(event){
     
            var yClick = event.originalEvent.touches[0].pageY;
            $(this).one("touchmove", function(event){
    
            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    });


    $(document).keydown(function(e) {
        if (e.keyCode === 38) {
           // Previous
           $(".carousel").carousel('prev');
           return false;
        }
        if (e.keyCode === 40) {
           // Next
           $(".carousel").carousel('next');
           return false;
        }
    });

    //     $("#myCarousel").on("touchstart", function(event){
        
    //         var yClick = event.originalEvent.touches[0].pageY;
    //         $(this).one("touchmove", function(event){

    //         var yMove = event.originalEvent.touches[0].pageY;
    //         if( Math.floor(yClick - yMove) > 1 ){
    //             $(".carousel").carousel('next');
    //         }
    //         else if( Math.floor(yClick - yMove) < -1 ){
    //             $(".carousel").carousel('prev');
    //         }
    //     });
    //     $(".carousel").on("touchend", function(){
    //             $(this).off("touchmove");
    //     });
    // });
        
});
    