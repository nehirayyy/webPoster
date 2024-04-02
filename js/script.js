$(document).ready(function() {

    $(document).on('mousemove', function(e) {
 
        let mouseX= e.pageX
        let mouseY=e.pageY
 
        $(".spotlight").css({
            "left": mouseX + "px",
            "top": mouseY + "px"
        })
 
    });
  



    // $('h1').hover(
    //     function() {
    //         $('.spotlight').css({ width: '15rem', height: '50px', transform: 'rotate(90deg)', 'transform-origin': '20% 40%'});
    //     },
    //     function() {
    //         $('.spotlight').css({ width: '15rem', height: '10rem' });
    //     }
    // );   NVM LET'S DO THIS ONCE I FIGURE OUT THE DIDACTICS

});
console.log("lets see if this remains in your code")