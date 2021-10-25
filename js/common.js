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
    $(".logo>a>img").attr("src","../images/logo_on.png")
    $(".sub_gnbbox").css("display","block")
    $(".sub_gnbbox").css("border-top","1px solid #808080")
});

$(".main_gnb").on("mouseout", function() {
    $("#main_header").removeClass("on");
    $(".main_gnb>li>a").css("color","#fff");
    $(".langs").css("color","#fff");
    $(".logo>a>img").attr("src","../images/logo.png")
    $(".sub_gnbbox").css("display","none")
});


// 서브메뉴 디스플레이
// 1
$(".gnb1").on("mouseover", function() {
    $(".gnb1>ul").removeClass("show_menu");
});

$(".gnb1").on("mouseout", function() {
    $(".gnb1>ul").addClass("show_menu");
});

// 2
$(".gnb2").on("mouseover", function() {
    $(".gnb2>ul").removeClass("show_menu");
});

$(".gnb2").on("mouseout", function() {
    $(".gnb2>ul").addClass("show_menu");
});

// 3
$(".gnb3").on("mouseover", function() {
    $(".gnb3>ul").removeClass("show_menu");
});

$(".gnb3").on("mouseout", function() {
    $(".gnb3>ul").addClass("show_menu");
});

// 4
$(".gnb4").on("mouseover", function() {
    $(".gnb4>ul").removeClass("show_menu");
});

$(".gnb4").on("mouseout", function() {
    $(".gnb4>ul").addClass("show_menu");
});

// 5
$(".gnb5").on("mouseover", function() {
    $(".gnb5>ul").removeClass("show_menu");
});

$(".gnb5").on("mouseout", function() {
    $(".gnb5>ul").addClass("show_menu");
});