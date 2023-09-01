/*******healthiest*******/

$(document).ready(function(){
    $("button#bowl").click(function(){
        $("#brekporg").toggle();
    });
    $("button#porigshow").click(function(){
        $("#porig").toggle();
    });

    $("button#bbqingr").click(function(){
        $("#bbqsalad").toggle();
    });
    $("button#bbqsaladshow").click(function(){
        $("li#bbq").toggle();
    });

    $("button#dinnshow").click(function(){
        $("#diningr").toggle();
    });
    $("button#dinnershow").click(function(){
        $("li#dinprep").toggle();
    });
});
   
/*******breakfast*******/

$(document).ready(function(){
    $("#btn-oat").click(function(){
        $("#oatingr").toggle()
    })
    $("#btn-oatprep").click(function(){
        $("#oatprep").toggle()
    })
});