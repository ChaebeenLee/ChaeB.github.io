/* section #mainv bg pc */
var mvssec = 1000;
var mvtsec = 6000;
$(".mainvslide.pc").append($(".mainvslide.pc li:first-child").clone());
var msln = $(".mainvslide.pc li").length;
$(".mainvslide.pc").css({"width" : msln*100+"%"});
$(".mainvslide.pc li").css({"width" : 100/msln+"%"});
$(".all").text(msln-1);
var mvn = 0;
function mvauto(){
    mvn++
    if(mvn>=7){
       $(".mainvslide").animate({"left" : mvn*-100+"%"},mvssec,function(){
           $(this).css({"left" : 0});
       });
        mvn = 0;
       } else {
        $(".mainvslide").animate({"left" : mvn*-100+"%"},mvssec);
    }
    $(".num").text(mvn+1);
}
var mvtimer = setInterval("mvauto()",mvtsec);
$(".mvnext").click(function(){
    clearInterval(mvtimer);
    mvauto();
    mvtimer = setInterval("mvauto()",mvtsec);
});
$(".mvprev").click(function(){
    clearInterval(mvtimer);
    mvn--
    if(mvn<=-1){
        $(".mainvslide").css({"left" : (msln-1)*-100+"%"});
        $(".mainvslide").animate({"left" : (msln-2)*-100+"%"},mvssec);
        mvn = msln-2;
       } else {
        $(".mainvslide").animate({"left" : mvn*-100+"%"},mvssec);
    }
    $(".num").text(mvn+1);
    mvtimer = setInterval("mvauto()",mvtsec);
});
var chk=0;
$(".mvstop").click(function(){
    if(chk==0){
        clearInterval(mvtimer);
        $(".mvstop img").attr({"src":"images/visual_play_icon.png", "alt":"자동 넘김 시작"});
        chk=1;
    } else{
        mvtimer = setInterval("mvauto()",mvtsec);
        $(".mvstop img").attr({"src":"images/visual_stop_icon.png", "alt":"자동 넘김 시작"});
       chk=0; 
    }
});
/* section #mainv bg mob */

var swiper1 = new Swiper('.swiper1', {
    loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
});

/* section #mainv .quick */
var qsubn = $(".qsub.on li").length;
$(".qsub.on li").css({ "width" : 100/qsubn +"%" }); 

$(".qchoice li").click(function(){
    $(this).addClass("on1").siblings("li").removeClass("on1");
    var qtname = $(this).attr("data-qtab");
    $(".qsub").removeClass("on2");
    $("."+qtname).addClass("on2");
    qsubn = $(".qsub.on2 li").length;
    // console.log(qsubn);
    $(".qsub.on2 li").css({ "width" : 100/qsubn +"%" });
    
    $(".qcont").removeClass("on4");
    $("."+qtname+"sub").first().addClass("on4");
    $(".direct").removeClass("select");
});

$(".qsub li").click(function(){
    $(this).addClass("on2").siblings("li").removeClass("on2"); 
    var qtsname = $(this).attr("data-qstab");
    $(".qcont").removeClass("on4");
    $("."+qtsname).addClass("on4");
    $(".direct").removeClass("select");
});

$(".direct").click(function(){
    $(this).toggleClass("select");
});



/* calander */
$(".qtourdom .date, .qtourfrn .date").click(function(){
    $(".calender").toggleClass("on")
    $(".paybar").removeClass("on");
});
$(".cldclose, .cldresult input").click(function(){
    $(".calender").removeClass("on");
})

var clds = 0;
$(".calender .next").click(function(){
    clds++
    if(clds>1){
        $(".clddate.on").next().addClass("on").siblings(".clddate").removeClass("on");
        $(".cldmonth .on").next().addClass("on").siblings().removeClass("on"); 
        $(".calender .next").css({"display":"none"});
    } else {
        $(".calender .prev").css({"display":"block"});
        $(".calender .next").css({"display":"block"});
        $(".clddate.on").next().addClass("on").siblings(".clddate").removeClass("on");
        $(".cldmonth .on").next().addClass("on").siblings().removeClass("on"); 
    }
    console.log(clds);
});
$(".calender .prev").click(function(){
    clds--
    if(clds<1){
        $(".clddate.on").prev().addClass("on").siblings(".clddate").removeClass("on");
        $(".cldmonth .on").prev().addClass("on").siblings().removeClass("on"); 
        $(".calender .prev").css({"display":"none"});
    } else {
        $(".calender .prev").css({"display":"block"});
        $(".calender .next").css({"display":"block"});
        $(".clddate.on").prev().addClass("on").siblings(".clddate").removeClass("on");
        $(".cldmonth .on").prev().addClass("on").siblings().removeClass("on"); 
    }
});

$(".clddate li").click(function(){
    if ( $(this).attr("class") != "light") {
            $(this).toggleClass("select").siblings("li").removeClass("select");
            $(".cldresult p span:last-child").text($(this).text()+"일");
            $(".cldresult p span:first-child").text($(".cldmonth li.on").text()); 
        }
});

/* 오늘 날짜 */
var today = new Date(); //오늘 년,월,일,시간위치
var date = new Date();
var doMonth = new Date(today.getFullYear(),today.getMonth(),1); //이번달 첫날
var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0); //이번달 마지막날
var y = today.getFullYear() //년
var m = today.getMonth()+1 //월
var d = today.getDate() //일

$(".m"+m).addClass("on");
var cl = $(".clddate.on li").length;
for (var i=0; i<cl; i++) {
    if (d == $(".clddate.on li").eq(i).text()) {
        if ( $(".clddate.on li").eq(i).attr("class") != "light" ) {
            $(".clddate.on li").eq(i).addClass("qtoday");
            $(".clddate.on .qtoday").prevAll("li").addClass("light");
        }
    }
}



/* paybar */
$(".qtourdom .price, .qtourfrn .price").click(function(){
    $(".paybar").toggleClass("on");
    $(".calender").removeClass("on");
});

$(".pbclose, .payresult2 input").click(function(){
    $(".paybar").removeClass("on");
});

$(function() {      
    $(".slider-range").slider({
        range: true,
        min: 10,
        max: 300,
        step: 10,
        values: [10, 300],
        animate: 300,
        slide: function(event, ui) {
            $(".amount2").val(ui.values[0]+ " 만원 ~ " + ui.values[1] +" 만원");
        }
    });
    $(".amount2").val($(".slider-range").slider("values", 0)+ " 만원 ~ " + $(".slider-range").slider("values", 1) +" 만원");
});

/* section #cont1 */
$(".mrecom_btn .next").click(function(){
    $("#mrecom").stop().animate({"left":-305},300,function(){
    $("#mrecom").append( $("#mrecom li:first-of-type"));
    $("#mrecom").css({"left":0});
    }); 
});  
$(".mrecom_btn .prev").click(function(){
    $("#mrecom").css({"left":-305}); 
    $("#mrecom").prepend( $("#mrecom li:last-of-type") );    
    $("#mrecom").stop().animate({"left":0},300);
}); 

$(".mbest_btn .next").click(function(){
    $("#mbest").stop().animate({"left":-305},300,function(){
    $("#mbest").append( $("#mbest li:first-of-type"));
    $("#mbest").css({"left":0});
    }); 
});  
$(".mbest_btn .prev").click(function(){
    $("#mbest").css({"left":-305}); 
    $("#mbest").prepend( $("#mbest li:last-of-type") );    
    $("#mbest").stop().animate({"left":0},300);
}); 


var swiper2 = new Swiper('.swiper2', {
    breakpoints : { 
        800 : {slidesPerView : 2, spaceBetween : 10,},
        2000 : { slidesPerView : 4, spaceBetween : 20,},
    }
});
var swiper3 = new Swiper('.swiper3', {
    breakpoints : {
        800 : {slidesPerView : 2,spaceBetween : 10,},
        2000 : {slidesPerView : 4,spaceBetween : 20,},
    }
});

/* section #cont2 .yhairpack .yhairmob */   
var ah = $(".yhairmob + a").height() + 18;
// console.log(ah);
$(".yhairmob").height(ah);

$(window).resize(function(){
    ah = $(".yhairmob + a").height()+2;
    $(".yhairmob").height(ah);
});

/* section #cont3 #mthemenav */
$("#mthemenav li").hover(
    function(){
        var bw = 170 - $(this).children("a").width();
        // console.log(bw);
        $(this).children("span").css({"width":bw});
    },
    function(){
        $(this).children("span").css({"width":0});
    }
);



/* section #cont6 .note /notice*/
var nssec = 500;
var ntsec = 3000;
$(".nslide").append($(".nslide li:first-of-type").clone());
var nsn = 0;
function nauto(){
    nsn++
    if(nsn>=5){
        $(".nslide").animate({"top" : nsn*-17},nssec,function(){
            $(this).css({"top": 0});
        })
        nsn=0;
    } else {
        $(".nslide").animate({"top" : nsn*-17},nssec);
    }
}
var ntimer = setInterval("nauto()",ntsec);

$(".notice").hover(
    function(){
        clearInterval(ntimer);
    },
    function(){
         ntimer = setInterval("nauto()",ntsec);
    }
)