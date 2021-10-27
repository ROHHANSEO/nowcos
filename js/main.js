// 메인페이지
var swiper1 = new Swiper('.swiper1', {
    autoplay: {
    delay: 2000,
    },
    speed:1000,
    navigation: {
        prevEl: '.prev',
        nextEl: '.next',
        },
});

swiper1.on('transitionStart', function() { 
    var index = swiper1.realIndex
    $('#test').text(index+1+" ");
    var arr = [
        "나우코스는 세상이 원하는 그 이상의 <strong>아름다움</strong>을 창조합니다.",
        "나우코스는 <strong>혁신적인기술</strong>로 최고의 품질을 약속합니다.",
        "더 넓은 <strong>글로벌 무대</strong>로 나우코스가 함께 도약합니다.",
        "언제나 당신의 든든한 <strong>파트너</strong>,나우코스."
    ]
    $(".slide_content").html(arr[index]);
});

swiper1.on("slideChange", function(){
    $(".button").removeClass("active");
    $(".button").eq(this.realIndex).addClass("active");
});


$(".slide_button1").on("click", function() {
    swiper1.slideTo(0);
});
$(".slide_button2").on("click", function() {
    swiper1.slideTo(1);
});
$(".slide_button3").on("click", function() {
    swiper1.slideTo(2);
});


// 두번째 페이지
var swiper2 = new Swiper('.swiper2', {
    loop: true,
    autoplay: {
    delay: 2000,
    },
    speed:1000,
    slidesPerView: 3,
    width: 1000,
    setWrapperSize: true,
    spaceBetween: 30,
});


//세번째 페이지
var swiper3 = new Swiper('.swiper3', {
    effect : 'fade',
    fadeEffect: {
    crossFade: true
    },
    autoplay: {
    delay: 5000,
    },
    speed:500,
});

$(".slide3_button1").on("mouseover", function(){
    swiper3.slideTo(0);
});
$(".slide3_button2").on("mouseover", function(){
    swiper3.slideTo(1);
});
$(".slide3_button3").on("mouseover", function(){
    swiper3.slideTo(2);
});

swiper3.on("slideChange", function(){
    $(".page3_button").removeClass("active");
    $(".page3_button").eq(this.realIndex).addClass("active");
});
swiper3.on("slideChange", function(){
    $(".button3").removeClass("active");
    $(".button3").eq(this.realIndex).addClass("active");
});


$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,
        anchors: ["main01","main02","main03","main04"],
        animateAnchor:false
	});
});