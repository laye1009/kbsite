// possible d'obetenir la librairie de jquery avec le llien fourni par google hosted library
$(document).ready(function(){
    /*
    $(".image").click(function(){
        $(this).fadeOut(3000);
        $(this).siblings(".description").show();
        
        console.log("me");
    })
    */
    /*
    $( "#image1" ).bind( "mouseenter mouseleave", function() {
        $(this).fadeOut(1000);
        $( this ).siblings(".description").toggleClass( "entered" );
    })
    */
    
    /*

    if ($('.image1').mouseenter(function(){}))
        {
            alert("enter");
        }
    */    
    
    
    $( ".col-sm-4" ).bind( "mouseenter mouseleave", function() {
        $( this ).children(".description").slideDown("slow");
    });


    $( ".col-sm-4" ).bind( "mouseleave", function() {
        $( this ).children(".description").slideUp("slow");
    })
    

});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //la fonction à l'intérieur sera exécuté quand le document sera prêt
    //$("h1").hide();
   // $(".par1").hide();//selecteur class
    //$("#title1").hide();//selecteur id
    //$("p:nth-child(2)").hide();// sélection le second child de p
    //$("#par1").click(function(){
        //$("#par4").hide();
    
    //$("#par1").mouseenter(function(){ //de même mouseleave
        //$("#par4").hide();
    /*$("#par1").hover(function(){ //de même mouseleave
        $("#par4").hide();
    },
    function(){
        $("#par4").show();*/
    
    /*$("#par1").on("click",function(){
        $("#par4").hide();
    });*/
    
    /*
    $("#par1").on({
        mousenter:function(){
            $("#par4").hide();
        },
        mouseleave:function(){
            $("#par4").show();
        }
    })*/
    
    
    /*$("#par1").click(function(){
        $("#par4").hide("slow"); */// de même fast est possible.de m^me hide(5):hide dans 5 sec
    /*
        $("#par1").click(function(){
            $("#par4").hide(1000,function(){ //hide en cascade
                $("#par3").hide(5000);
            });
    });*/
    /*
    $(document).ready(function(){
    $(".bw").click(function(){
        alert("clique déteté")
    });
});
    
    /*$("#par1").click(function(){ 
            $("#par4").toggle(); //pour faire apparaitre et disparaitre par4 quand click est //opéré sur par1. on aussi fadeOut vs fadeIn vs fadeToggle vs fadeTo(0.5): 0.5 est l'opacité comprise entre 0 et 1. fadeTo(1000,0.5):opacité 0.5 dans 3 sec.
    })*/
    
    /* Animation*/
    /*
    $("button").click(function(){
        $("div").animate({
            left:"600px",
            opacity:0.2,
            //width:"200px",
            width:"=+150px", //rajoute à width 150
            height:"200px"
        },5000)
        
        // left est en accolade pour dire que c'est une //propriété
        // animate() peut prendre trois arguents: le premier c'est l'objet qui est modifié, le //second la durée d'exécution et le troisième un call-back ie une autre fonction qui //est appelée.
    })*/
    /*
    $("#start").click(function(){
        $("div").animate({
            left:"600px",
            opacity:0.2,
            //width:"200px",
            width:"=+150px", //rajoute à width 150
            height:"200px"
        },5000)
    });
        $("#stop").click(function(){
            $("div").stop(true,true); // arrête l'animation en se plaçant à la fin du //processus
            
        });*/
    
    /*$("#start").click(function(){
        $("div").slideUp(5000).slideDown(5000).fadeOut(3000);//enchainement d'animation
    });*/
    
    /*
    var myvar=$("#par1").text();//recupère le texte qui est dans l'objet par1.html à la place //de texte 
    console.log(myvar);*/
    
    /*$("#start").click(function(){
        var myvar=$("#myinput").val();
        console.log(myvar);
    })*/
    
    /*$("#start").click(function(){
       // var myvar=$("#div").attr(style);//recupère le style  de la div
       // console.log(myvar);
        //$("#par1").text("voila mon nouveau text");
        //$("#myinput").val("nouvelle valeur");
       // $("div").append("voila un nouveau paragraphe"); aussi prepend().before() vs after()
        //$("#p1").remove(); // empty: vide sans suppimer l'élément
        //$("#par1,#par2").addClass("red"); //ajoute la classe red à par1
        //$("#par1").addClass("red bold");//son opposé removeClass. aussi toggleClass
        //$("#par1").css("color","red");// sans red on obtient le style css sur par1
        /*
        $("#par1").css("color"{
                       
                       "color":"red",
                       "font-weight":"bold",
                       }*/ //pour changer plusieurs paramètres
        //$("#batton").width()// donne le width de l'objet. width(150) la largeur est 150   
        
        
        // arborescence
        /*$("#p1").css("border-color","green")
        $("#p1").parent().css("border-color","green") // change le parent direct
        $("#p1").parents().css("border-color","green") // change les parents et grands parent
        //parents(".special"): change les parents de class spéciale
        //children().css: change les enfants directs
        //$("#p1").find("p").css(): change les enfants direct et petits enfants de p1
        //$("#p1").siblings().css: change le css des frères de p1
        //$("#p1").next().css: sélection le frère suivant
        //$("p").first().css(..):sélection le premier de la liste de paragraphe. idem last()
        //$("#p").eq(2).css(..): sélectionne le paragraphe à la deuxième position
        //$("#p").filter(.special).css(..): sélectionne les paragraphe de la class spécial. Par contrairenot(.special) fait le contraire
        
        //voir ajax concernant le raffraîchissement des pages web
        
        $("#div2").load("demo.txt");
        
    
    });*/
    /*var $mainMenuItems=$("#main-menu ul").children("li");
    var $totalMainIt=$mainMenuItems.length;
    var $openIndex=-1,  */
    
            
   

/*

    var $mainMenu=$("#main-menu ul").children("li");
    var $totalMainIt=$mainMenu.length;
    //var openIndex=-1;
    var openIndex=2;
    
    var init=function(){
        bindEvents();
        if (validIndex(openIndex))
            {
                animateItem($mainMenu.eq(openIndex),true,250);
            }     

            
                
        
        
    },
    bindEvents=function(){
        $mainMenu.children(".images").click(function(){
            var newIndex=$(this).parent().index();
            $item=$mainMenu.eq(newIndex);
            
            if (newIndex===openIndex)
                {
                    animateItem($item,false,250);
                    openIndex=-1;
                }
            else{
                if (validIndex(newIndex))
                    {
                        animateItem($mainMenu.eq(openIndex),false,250);
                        openIndex=newIndex;
                        animateItem($item,true,250);
                    
                    }
            }
                
                /*
            $colorImage=$item.find(".color");
            $colorImage.animate({left:"0px"},250);*/
            //$item.animate({width:"420px"},250);
            //animateItem($item,true,250);
            //openIndex=newIndex;
/*        }); 
        //hover est fonction qui prend deux fonctions
/*
        $(".button").hover(
            function(){
                $(this).addClass("hovered");
            
            },
            
            function(){
                
                $(this).removeClass("hovered");
            
            
            }
            
        );
        $(".button").click(function(){
            var newIndex=$(this).index();
            $item=$mainMenu.eq(newIndex);
            
            if (newIndex===openIndex)
                {
                    animateItem($item,false,250);
                    openIndex=-1;
                }
            else{
                if (validIndex(newIndex))
                    {
                        animateItem($mainMenu.eq(openIndex),false,250);
                        openIndex=newIndex;
                        animateItem($item,true,250);
                    
                    }
            }
        });
            
            
        
    },
    validIndex=function(IndextoCheck){
        return (IndextoCheck>=0) && (IndextoCheck<5)
        
    },
    animateItem=function($item,toOpen,speed){
        
        var $colorImage=$item.find(".color");
        itemParam=toOpen?{width:"420px"}:{width:"140px"};
        colorImageParam=toOpen?{left:"0px"}:{left:"140px"};
        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,speed);
        
    },
    // fonction à utiliser pour éviter sa répétition dans le code
    checkandAnimate=function(indexTocheck){
        if (indexTocheck===openIndex)
                {
                    animateItem($item,false,250);
                    openIndex=-1;
                }
            else{
                if (validIndex(newIndex))
                    {
                        animateItem($mainMenu.eq(indexTocheck),false,250);
                        openIndex=indexTocheck;
                        animateItem($mainMenu.eq(openIndex),true,250);
                    
                    }
            }
    };
    init();
    
*/


