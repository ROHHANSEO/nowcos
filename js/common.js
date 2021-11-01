$(".lang_kr").on("mouseover", function() {
    $(".lang a").removeClass("none");
});

$(".lang_kr").on("mouseout", function() {
    $(".lang_cn,.lang_en").addClass("none");
});


// 네비바
$(".main_gnb").on("mouseover", function() {
    $("#main_header").addClass("on");
    $(".main_gnb>li>a").css("color","black");
    $(".langs").css("color","black");
    $(".logo>a>img").attr("src","./images/logo_on.png")
    $(".sub_gnbbox").css("display","block")
    $(".sub_gnbbox").css("border-top","1px solid #808080")
});

$(".main_gnb").on("mouseout", function() {
    $("#main_header").removeClass("on");
    $(".main_gnb>li>a").css("color","#fff");
    $(".langs").css("color","#fff");
    $(".logo>a>img").attr("src","./images/logo.png")
    $(".sub_gnbbox").css("display","none")
});


// 서브메뉴 디스플레이

$(".main_gnb .gnb1").hover(function() {
    $(".main_gnb>.gnb1>ul").removeClass("show_menu");
}, function() {
    $(".main_gnb>.gnb1>ul").addClass("show_menu");
});

$(".main_gnb .gnb2").hover(function() {
    $(".main_gnb>.gnb2>ul").removeClass("show_menu");
}, function() {
    $(".main_gnb>.gnb2>ul").addClass("show_menu");
});

$(".main_gnb .gnb3").hover(function() {
    $(".main_gnb>.gnb3>ul").removeClass("show_menu");
}, function() {
    $(".main_gnb>.gnb3>ul").addClass("show_menu");
});

$(".main_gnb .gnb4").hover(function() {
    $(".main_gnb>.gnb4>ul").removeClass("show_menu");
}, function() {
    $(".main_gnb>.gnb4>ul").addClass("show_menu");
});

$(".main_gnb .gnb5").hover(function() {
    $(".main_gnb>.gnb5>ul").removeClass("show_menu");
}, function() {
    $(".main_gnb>.gnb5>ul").addClass("show_menu");
});

// $(".main_gnb li").hover(function(){
//     $(this).removeClass("show_menu");
// }, function() {
//     $(this).childran("ul").addClass("show_menu");
// });




// 모바일메뉴 활성화

$(".bt_mn").on("click", function() {
    $("#mo_nav").addClass("active");
});

$(".mo_lang>a").on("click", function() {
    $("#mo_nav").removeClass("active");
});


$(".mo_gnb>li>a").on("click", function() {
    $(".mo_gnb>li").removeClass("active")
    $(".mo_gnb>li>a").removeClass("on")
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
        $(this).parent().addClass("active")
    } else {
        $(this).parent().removeClass("active")
    }
});

