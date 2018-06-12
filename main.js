$(document).ready(function(){
    $("#a").click(function(){

        $("#a").fadeOut(1000);
        $("#wejscie").fadeOut(1000).delay(100);

    });
});//do znikniecia zdj

$(document).ready(function(){
    $("#a").click(function(){
        $("#menu").fadeIn(2000);
        $("#start").fadeIn(2000);        
    });
});//pokazanie menu


$(document).ready(function(){
    $("#Historia").click(function(){
        $("#start").fadeOut(10);
        $("#hl").fadeOut(10);
        $("#o").fadeOut(10);
        $("#s").fadeOut(10).delay(3000);
        $("#h").fadeIn(2000);
        $("#hh").fadeIn(500);
        $("#hhh").fadeIn(100);
    });
});

$(document).ready(function(){
    $("#Statystyki").click(function(){
        $("#start").fadeOut(10);
        $("#hl").fadeOut(10);
        $("#o").fadeOut(10);
        $("#h").fadeOut(10);
        $("#hh").fadeOut(10);
        $("#hhh").fadeOut(10).delay(3000);
        $("#s").fadeIn(3000);
    });
});

$(document).ready(function(){
    $("#Osiągnięcia").click(function(){
        $("#start").fadeOut(10);
        $("#s").fadeOut(10);
        $("#hl").fadeOut(10);
        $("#hhh").fadeOut(10);
        $("#hh").fadeOut(10);
        $("#h").fadeOut(10).delay(3000);
        $("#o").fadeIn(2000);
    });
});

$(document).ready(function(){
    $("#Highlights").click(function(){
        $("#start").fadeOut(10);
        $("#s").fadeOut(10);
        $("#o").fadeOut(10);
        $("#hhh").fadeOut(10);
        $("#hh").fadeOut(10);
        $("#h").fadeOut(10).delay(3000);
        $("#hl").fadeIn(2000);
    });
});