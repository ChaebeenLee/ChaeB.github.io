/* all _ header */
$('.open-overlay').click(function() {
    $('.open-overlay').css('pointer-events', 'none');
    var overlay_navigation = $('.overlay-navigation'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');
    overlay_navigation.toggleClass('overlay-active');
    
    if (overlay_navigation.hasClass('overlay-active')) {
        top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
        middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
        bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
        overlay_navigation.velocity('transition.slideLeftIn', {
            duration: 300, delay: 0, begin: function() {
                $('.hnb ul li').velocity('transition.perspectiveLeftIn', {
                    stagger: 70, delay: 0, complete: function() {
                        $('nav ul li a').velocity({
                           opacity: [1, 0],
                        }, {
                           delay: 10, duration: 100
                        });
                    $('.open-overlay').css('pointer-events', 'auto');
                    }
                })
            }
        })
    } else {
        $('.open-overlay').css('pointer-events', 'none');
        top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
        middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
        bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
        $('.hnb ul li').velocity('transition.perspectiveRightOut', {
            stagger: 30, delay: 0, complete: function() {
                overlay_navigation.velocity('transition.fadeOut', {
                    delay: 0, duration: 100, complete: function() {
                        $('nav ul li a').velocity({
                           opacity: [0, 1],
                        }, {
                           delay: 0, duration: 30
                        });
                    $('.open-overlay').css('pointer-events', 'auto');
                    }
                });
            }
        })
    }
})

/* story */
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);}
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    var that = this;
    var delta = 200;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 400;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};


/* experiece */
var exphdt = 7000;
var donn = 1;
function exph_auto(){
    donn++
    if(donn>=4){
        $('.exp_cont .txt li:first-child, .exp_cont .image li:first-child, .exp_cont .btn li:first-child').addClass('on').siblings('li').removeClass('on');
        donn=1; 
    } else{
        $('.exp_cont .txt li:nth-child('+ donn+')').addClass('on').siblings('li').removeClass('on');
        $('.exp_cont .image li:nth-child('+ donn+')').addClass('on').siblings('li').removeClass('on');
        $('.exp_cont .btn li:nth-child('+ donn+')').addClass('on').siblings('li').removeClass('on');
    }
};
var ehtimer = setInterval("exph_auto()",exphdt);

$('.exp_cont .btn').hover(
    function(){
        clearInterval(ehtimer);
    }, function(){
        ehtimer = setInterval("exph_auto()",exphdt);
    }
)

$('.exp_cont .btn li').click(function(){
    var ehbn = $(this).index()+1;
    $(this).addClass('on').siblings('li').removeClass('on');
    donn=ehbn;
    $('.exp_cont .txt li:nth-child('+ donn+')').addClass('on').siblings('li').removeClass('on');
    $('.exp_cont .image li:nth-child('+ donn+')').addClass('on').siblings('li').removeClass('on');
});





/*other design*/
$(".snbox .menu li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    var dpt = $(this).attr("data-poftab");
    $("#portfolio ."+dpt).addClass("on").siblings(".poftab").removeClass("on");
})

/*portfolio*/

var psw = $("#portfolio .pof-slide li").width()+30; //330+30=360
var clkn=0;
var pdc;
var psn = 100/$(".pof-slide li").length;
var psln = $(".pof-slide li").length-1;
var cdpn; //data-pn

$("#portfolio .next").click(function(){
    $(".pof-slide").animate({"left":-psw},800,"easeInOutQuint",function(){
        $(".pof-slide").append($(".pof-slide li:first-child")).css({"left":0});
    });
    $(".pof-slide li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
    var ntaw = $(".title-slide li:nth-child(1)").width();
    var ntfw = $(".title-slide li:nth-child(2)").width();
    $(".title-slide").animate({"left":-(ntaw+100)},800,"easeInOutQuint",function(){
        $(".title-slide").append($(".title-slide li:first-child")).css({"left":0});
    });
    $("#portfolio .title-frame").width(ntfw);
    
    cdpn = Number($(".pof-slide li:first-child").attr("data-pn"))+1;
    if(cdpn>psln){
        $("#portfolio .ko li:first-child").addClass("on").siblings("li").removeClass("on");
        $(".bar span").animate({"left":cdpn*psn+"%"},500,function(){
            $(".bar span").css({"left":-psn+"%"}).animate({"left":0},500);
        })
    } else {
        $("#portfolio .ko li").eq(cdpn).addClass("on").siblings("li").removeClass("on");
        $(".bar span").animate({"left":cdpn*psn+"%"},800);
    }
    pdc = $(".pof-slide li.on").attr("data-color");
    $("#portfolio .snbox").css({"background": pdc});
});

$("#portfolio .prev").click(function(){
    $(".pof-slide").css({left:-psw}).prepend($(".pof-slide li:last-child")).animate({"left":0},800,"easeInOutQuint");
    $(".pof-slide li:first-child").addClass("on").siblings("li").removeClass("on");
    var ptw = $(".title-slide li:last-child").width();
    $(".title-slide").css({"left":-(ptw+100)}).prepend($(".title-slide li:last-child")).animate({"left":0},800,"easeInOutQuint")
    $("#portfolio .title-frame").width(ptw);
    
    cdpn = Number($(".pof-slide li:first-child").attr("data-pn"));
    if(cdpn>=psln){
        $("#portfolio .ko li:last-child").addClass("on").siblings("li").removeClass("on");
        $(".bar span").animate({"left":-psn+"%"},500,function(){
            $(".bar span").css({"left":100+"%"}).animate({"left":psn*psln+"%"},500);
        })
    } else {
        $("#portfolio .ko li").eq(cdpn).addClass("on").siblings("li").removeClass("on");
        $(".bar span").animate({"left":cdpn*psn+"%"},800);
    }
    pdc = $(".pof-slide li.on").attr("data-color");
    $("#portfolio .snbox").css({"background": pdc});
});

var oldm=0;
$(".pof-slide li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    var ponl = $(this).position().left;
    var tn = $(this).index();
    $(".pof-slide").animate({"left":-ponl},800,"easeInOutQuint",function(){
        for(var psi=1; psi<=tn; psi++){
            $(".pof-slide").append($(".pof-slide li:first-child"));
        }
        $(".pof-slide").css({"left":0});
    });
    var tonl = $(".title-slide li").eq(tn).position().left;
    $(".title-slide").animate({"left":-tonl},800,"easeInOutQuint",function(){
        for(var tsi=1; tsi<=tn; tsi++){
            $(".title-slide").append($(".title-slide li:first-child"));
        }
        $(".title-slide").css({"left":0});
    });
    var ctsw = $("#portfolio .title-slide li").eq(tn).width();
    $("#portfolio .title-frame").width(ctsw);
    
    pdc = $(".pof-slide li.on").attr("data-color");
    $("#portfolio .snbox").css({"background": pdc});
    cdpn = Number($(this).attr("data-pn"));
    $("#portfolio .ko li").eq(cdpn).addClass("on").siblings("li").removeClass("on");
    
    if(oldm == 4 && cdpn==0){
        $(".bar span").animate({"left":100+"%"},500,function(){
            $(".bar span").css({"left":-20+"%"}).animate({"left":0+"%"},500);
        })
    } else {
        $(".bar span").animate({"left":cdpn*psn+"%"},800);
    }
    oldm = cdpn;
});

$(".pof-slide li").hover(
    function(){
        phdc = $(this).attr("data-hcolor");
        $(this).css({"background":phdc});
        $(this).find($(".info")).height(0);
        $(this).find("h5").css({"bottom":20+"%", "font-size":"32px"})
    }, function(){
        $(this).css({"background":"#333"});
        $(this).find($(".info")).height(128);
        $(this).find("h5").css({"bottom":55+"%", "font-size":"24px"})
    }
)


/*#epilogue*/
$(".contact").click(function(){
    $(this).toggleClass("on");
});




/*process*/
AOS.init({
    duration: 1000,
    offset:200
})

function progress(){
    $('.chart100').circleProgress({
    value: 1.00,
    size:200,
    startAngle:300,
    animation:{
        duration:2000,
        easing:"swing"
    },
    thickness:1,
    fill:{
        gradient:["#ffffff","#ffffff"],
        gradientAngle: Math.PI / 2
    }
}).on('circle-animation-progress', function(event, progress, stepValue){
    var perNum = 100;
    $(this).find('strong').html(Math.round(perNum * progress) + '%');
    });
    
    
    $('.chart90').circleProgress({
    value: 0.90,
    size:200,
    startAngle:300,
    animation:{
        duration:2000,
        easing:"swing"
    },
    thickness:1,
    fill:{
        gradient:["#ffffff","#ffffff"],
        gradientAngle: Math.PI / 2
    }
}).on('circle-animation-progress', function(event, progress, stepValue){
    var perNum = 90;
    $(this).find('strong').html(Math.round(perNum * progress) + '%');
    });

    
    $('.chart80').circleProgress({
    value: 0.80,
    size:200,
    startAngle:300,
    animation:{
        duration:2000,
        easing:"swing"
    },
    thickness:1,
    fill:{
        gradient:["#ffffff","#ffffff"],
        gradientAngle: Math.PI / 2
    }
}).on('circle-animation-progress', function(event, progress, stepValue){
    var perNum = 80;
    $(this).find('strong').html(Math.round(perNum * progress) + '%');
    });
    
    
    $('.chart70').circleProgress({
    value: 0.80,
    size:200,
    startAngle:300,
    animation:{
        duration:2000,
        easing:"swing"
    },
    thickness:1,
    fill:{
        gradient:["#ffffff","#ffffff"],
        gradientAngle: Math.PI / 2
    }
}).on('circle-animation-progress', function(event, progress, stepValue){
    var perNum = 70;
    $(this).find('strong').html(Math.round(perNum * progress) + '%');
    });
}

$('#prc_footer').click(function(){
   $(window).scrollTop(0); 
});


/* toggle_btn */
$(".toggle_btn a").click(function(){
    var an = $(this).attr("data-left");
    var aname = $(this).attr("data-page");
    $(this).addClass("on").siblings("a").removeClass("on");
    $('.'+aname).addClass("on").siblings("#prc_cont").removeClass("on");
    $(".toggle_btn .bar").animate({"left" : an},700,"easeInOutQuint");
    $(window).scrollTop(2754);
});
/* yhf2_snb */
var yhfh = parseInt($(".yhf2_bg img.on").height())-373;

function dvauto(){ // 이미지 움직임
    $(".yhf2_bg img.on").css({"top":0,"opacity":0}).stop().animate({"opacity":1},700,"easeInQuad",function(){
        $(this).animate({"top":-yhfh},yhfh*15,function(){
        $(this).css({"top":0});
        })
    });
}

/*Sub nav bar click*/
$(".yhf2_snb ul li").click(function(){
    var snbn = $(this).index();
    $(this).addClass("on").siblings("li").removeClass("on"); // 폰트 색상
    $(".yhf2_bg img").eq(snbn).addClass("on").siblings("img").removeClass("on");
    yhfh = parseInt($(".yhf2_bg img.on").height())-373;
    dvauto();
    
    $(".fd_all li").eq(snbn).addClass("on").siblings("li").removeClass("on");
    var dallh = $(".fd_all li:nth-child("+ (snbn+1) +") img").height();
    $(".fd_all").css({"height":dallh});
    var snbtxt = $(this).text();
    $(".design_page .yhf_st").text(snbtxt);
});

$(".yht2_snb ul li").click(function(){
    var snbn = $(this).index();
    $(this).addClass("on").siblings("li").removeClass("on");
    $(".yht2_bg img").eq(snbn).addClass("on").siblings("img").removeClass("on");
    $(".td_all li").eq(snbn).addClass("on").siblings("li").removeClass("on");
    var dallh = $(".td_all li:nth-child("+ (snbn+1) +") img").height();
    $(".td_all").css({"height":dallh});
    var snbtxt = $(this).text();
    $(".design_page h5").text(snbtxt+" Design");
});

$(".yht2_bg img").click(function(){
    var snbn = $(this).index();
    $(this).addClass("on").siblings("img").removeClass("on");
    $(".yht2_snb ul li").eq(snbn).addClass("on").siblings("li").removeClass("on");
    
    $(".td_all li").eq(snbn).addClass("on").siblings("li").removeClass("on");
    
    var dallh = $(".td_all li:nth-child("+ (snbn+1) +") img").height();
    $(".td_all").css({"height":dallh});
    
    var snbtxt = $(".yht2_snb ul li").eq(snbn).text();
    $(".design_page h5").text(snbtxt+" Design");
});

/* 스크롤 */
var prochk = 0;
var dvchk = 0;
$(window).on('scroll',function(){
    var ph = $(window).scrollTop();
    var dbtnt = Number($(".btn_frame").attr("data-btnt"));

    
    if(ph>=1){
    $('#prc_footer').addClass('on');    
    } else {
    $('#prc_footer').removeClass('on');
    }
    
    if (ph > 1000 && ph < 2000 && prochk==0) {
        progress();
        prochk=1;
    } else if ( ph < 1000 || ph > 2000) {
        prochk=0;
    }
    
    if (ph > dbtnt) {
        $(".btn_frame").addClass("fix");
    } else {
        $(".btn_frame").removeClass("fix");
    }
    
    if(ph > 5600 && ph < 7100 && dvchk==0){
        dvauto();
        dvchk=1;
    } else if (ph < 5600 || ph > 7100) {
        dvchk=0;
    }
});



