$(function(){
    $(".navbar a,footer a").on("click",function(event){
        event.preventDefault();
        var hash=this.hash;
        $("body").animate({scrollTop:$(hash).offset().top},900,function(){window.location.hash=hash;}) /*mettre $("body,html)... pour ça marche sur firefox*/
    });

})