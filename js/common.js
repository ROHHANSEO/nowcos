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
$(".main_gnb .gnb1").on("mouseover", function() {
    $(".main_gnb>.gnb1>ul").removeClass("show_menu");
});

$(".main_gnb .gnb1").on("mouseout", function() {
    $(".main_gnb>.gnb1>ul").addClass("show_menu");
});

// 2
$(".main_gnb .gnb2").on("mouseover", function() {
    $(".main_gnb>.gnb2>ul").removeClass("show_menu");
});

$(".main_gnb .gnb2").on("mouseout", function() {
    $(".main_gnb>.gnb2>ul").addClass("show_menu");
});

// 3
$(".main_gnb .gnb3").on("mouseover", function() {
    $(".main_gnb>.gnb3>ul").removeClass("show_menu");
});

$(".main_gnb .gnb3").on("mouseout", function() {
    $(".main_gnb>.gnb3>ul").addClass("show_menu");
});

// 4
$(".main_gnb .gnb4").on("mouseover", function() {
    $(".main_gnb>.gnb4>ul").removeClass("show_menu");
});

$(".main_gnb .gnb4").on("mouseout", function() {
    $(".main_gnb>.gnb4>ul").addClass("show_menu");
});

// 5
$(".main_gnb .gnb5").on("mouseover", function() {
    $(".main_gnb>.gnb5>ul").removeClass("show_menu");
});

$(".main_gnb .gnb5").on("mouseout", function() {
    $(".main_gnb>.gnb5>ul").addClass("show_menu");
});


// 모바일메뉴 활성화

$(".bt_mn").on("click", function() {
    $("#mo_nav").addClass("active");
});

$(".mo_lang>a").on("click", function() {
    $("#mo_nav").removeClass("active");
});





$(".mo_gnb>.gnb1>a").on("mouseover", function() {
    $(".mo_gnb>.gnb1").addClass("active");
});

$(".mo_gnb>.gnb2>a").on("mouseover", function() {
    $(".mo_gnb>.gnb2").addClass("active");
});

$(".mo_gnb>.gnb3>a").on("mouseover", function() {
    $(".mo_gnb>.gnb3").addClass("active");
});

$(".mo_gnb>.gnb4>a").on("mouseover", function() {
    $(".mo_gnb>.gnb4").addClass("active");
});

$(".mo_gnb>.gnb5>a").on("mouseover", function() {
    $(".mo_gnb>.gnb5").addClass("active");
});

$(".mo_gnb>li").on("mouseout", function() {
    $(".mo_gnb>li").removeClass("active");
});


