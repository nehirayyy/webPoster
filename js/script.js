$(document).ready(function() {

    $(document).on('mousemove', function(e) {
 
        let mouseX= e.pageX
        let mouseY=e.pageY
 
        $(".spotlight").css({
            "left": mouseX + "px",
            "top": mouseY + "px"
        })
 
    });
    
    
    $("header").click(function(){
        $(".date, .time, .location, .info, a").toggleClass("show");
      });

});
console.log("lets see if this remains in your code")