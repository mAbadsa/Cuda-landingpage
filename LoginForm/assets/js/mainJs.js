$(document).ready(function() {
    $(".showForm").click(function(){
        $(".continer").css("display","block");
        $(this).css("left","-200px");
        $(".continer").css("z-index","1");
        $("#page").css("z-index","0");
//        $("#page").css("background-color","#777");
        $("#page").css("opacity","0.2");
    });
    $(".submitBtn").click(function(){
        $(".continer").hide(200);
        $(".continer").css("transition","0.5s");
        $("#page").css("background-color","#990026");
        $("#page").css("opacity","1");
        $(".showForm").css("left","-70px");
        $(".showForm").css("transition","0.5s");
    });
//    $(".submitBtn").hover.css("left","-30px");
    $("#page").click(function(){
        $(".continer").css("display","none");
        $(".continer").css("transition","0.5s");
        $("#page").css("background-color","#990026");
        $("#page").css("opacity","1");
        $(".showForm").css("left","-70px");
        $(".showForm").css("transition","0.5s");
    });
});