/* header scroll bg */
$(window).scroll(function(){
    var hsc = $(this).scrollTop();
    // console.log(hsc);
    if(hsc > 0){
        $("header").css({"background":"#fff"});
    } else {
        $("header").css({"background":"rgba(255,255,255,0.7)"});
    }
});

/* header hot slide */
var hssec = 500;
var htsec = 3000;
$(".hotslide").append($(".hotslide li:first-child").clone());
var hsn = 0;
function hauto(){
    hsn++
    if(hsn>=10){
        $(".hotslide").animate({"top" : hsn*-18},hssec,function(){
        $(this).css({"top" : 0});
    });
    hsn=0;
    } else {
       $(".hotslide").animate({"top" : hsn*-18},hssec);
    }
}
var htimer = setInterval("hauto()",htsec);

$(".hotslide").hover(
    function(){
        clearInterval(htimer);
    },
    function(){
        htimer = setInterval("hauto()",htsec);
    }
)




/* mob header */
$("#hamburger-9").click(function(){
    $(this).toggleClass("is-active");
    $(".mobnbt").toggleClass("on");
    $("header").toggleClass("on");
    $("#gnb ul").slideUp();
});

$("#gnb > li > a").click(function(){
    if(bw < 800){
        $("#gnb ul").slideUp(300); // #lnb의 모든 ul은 슬라이드가 접히게 하라. 
        $(this).next().stop().slideToggle(300);
        return false;
    }
});

var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
})

if(bw > 800){
    $("#gnb").hover(
    function(){
        $("header").addClass("on");
    },
    function(){
        $("header").removeClass("on");
    }
    )
}