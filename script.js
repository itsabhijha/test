$(document).ready(function(){
    $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }
        else{
            $('.navbar').removeClass("sticky");
      
    }

    })

});

// js foter code start here 

/* Code by CodingTuting.Com */
function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}