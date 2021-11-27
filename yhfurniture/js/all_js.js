/* -------------
      header 
----------------*/
AOS.init({
    duration: 1000,
    offset:200,
})

$(window).scroll(function(){
    var wst = $(window).scrollTop();
    if(wst > 0){
        $("#top").addClass("on")
        $("header").addClass("on")
    } else {
        $("#top").removeClass("on")
        $("header").removeClass("on")
    }
});





/* -------------
      index
---------------*/
/* main visual bnr */
var amsec = 1000;
var mtsec = 6000;

var mvn =1;
function mvauto(){
    mvn++
    if(mvn>3) {
        mvn=1;
        $(".mainv").animate({opacity : 0},amsec,function(){
            $(this).css({ "background" : "url(images/main_visual1.png) no-repeat center"}).animate({opacity : 1},amsec);
        });
    } else {
        $(".mainv").animate({opacity : 0},amsec,function(){
            $(this).css({ "background" : "url(images/main_visual"+ mvn +".png) no-repeat center"}).animate({opacity : 1},amsec);
        });
    }
    $(".mainlist li").eq(mvn-1).addClass("select").siblings("li").removeClass("select");
}
var mvtimer = setInterval("mvauto()",mtsec);

$("#main").hover(
    function(){
        clearInterval(mvtimer);
    }, function(){
        mvtimer = setInterval("mvauto()",mtsec);
    }
)

$(".mainlist li").click(function(){
    mvn = $(this).index()+1; // 0,1,2
    if(mvn>3) {
        mvn=1;
        $(".mainv").stop().animate({opacity : 0},amsec,function(){
            $(this).css({ "background" : "url(images/main_visual1.png) no-repeat center"}).stop().animate({opacity : 1},amsec);
        });
    } else {
        $(".mainv").stop().animate({opacity : 0},amsec,function(){
            $(this).css({ "background" : "url(images/main_visual"+ mvn +".png) no-repeat center"}).stop().animate({opacity : 1},amsec);
        });
    }
    $(".mainlist li").eq(mvn-1).addClass("select").siblings("li").removeClass("select");
})

/* #rev */
var rssec = 1000;

var rsn=0;
$("#rev .next").click(function(){
    rsn++
    if(rsn>=2){
        $("#rev .next").css({"display" : "none"})
        $(".ruslide").animate({"left":rsn*-691},rssec);
        $(".rpslide").animate({"left":rsn*-383},rssec);
    } else {
        $("#rev .next, #rev .prev").css({"display" : "block"});
        $(".ruslide").animate({"left":rsn*-691},rssec);
        $(".rpslide").animate({"left":rsn*-383},rssec);
    }
    $(".rtxt li").eq(rsn).addClass("select").siblings("li").removeClass("select");
    $(".rpage li").eq(rsn).addClass("select").siblings("li").removeClass("select");
});

$("#rev .prev").click(function(){
    rsn--
    if(rsn<=0){
        $("#rev .prev").css({"display" : "none"})
        $(".ruslide").animate({"left":rsn*-691},rssec);
        $(".rpslide").animate({"left":rsn*-383},rssec);
    } else {
        $("#rev .next, #rev .prev").css({"display" : "block"});
        $(".ruslide").animate({"left":rsn*-691},rssec);
        $(".rpslide").animate({"left":rsn*-383},rssec);
    }
    $(".rtxt li").eq(rsn).addClass("select").siblings("li").removeClass("select");
    $(".rpage li").eq(rsn).addClass("select").siblings("li").removeClass("select");
});

$(".rpage li").click(function(){
    rsn = $(this).index();
    console.log(rsn);
    
    if(rsn<=0){
        $("#rev .prev").css({"display" : "none"})
        $(".ruslide").animate({"left":rsn*-691},rssec);
        $(".rpslide").animate({"left":rsn*-383},rssec);
    } else {
        $("#rev .next, #rev .prev").css({"display" : "block"});
        $(".ruslide").animate({"left":rsn*-691},rssec);
        $(".rpslide").animate({"left":rsn*-383},rssec);
    }
    $(".rtxt li").eq(rsn).addClass("select").siblings("li").removeClass("select");
    $(".rpage li").eq(rsn).addClass("select").siblings("li").removeClass("select");
})





/* --------------
     sub_shop
----------------*/
/*  sub_shop visual bnr */
var assec = 1000;
var stsec = 6000;

var svn =1;
function svauto(){
    svn++
    if(svn>3) {
        svn=1;
        $(".shop_mainv").animate({opacity : 0},assec,function(){
            $(this).css({ "background" : "url(images/shop_main_visual1.png) no-repeat center"}).animate({opacity : 1},assec);
        });
    } else {
        $(".shop_mainv").animate({opacity : 0},assec,function(){
            $(this).css({ "background" : "url(images/shop_main_visual"+ svn +".png) no-repeat center"}).animate({opacity : 1},assec);
        });
    }
    $(".shop_mainlist li").eq(svn-1).addClass("select").siblings("li").removeClass("select");
}
var svtimer = setInterval("svauto()",stsec);

$("#smain2").hover(
    function(){
        clearInterval(svtimer);
    }, function(){
        svtimer = setInterval("svauto()",stsec);
    }
)

$(".shop_mainlist li").click(function(){
    svn = $(this).index()+1; // 0,1,2
    if(svn>3) {
        svn=1;
        $(".shop_mainv").stop().animate({opacity : 0},assec,function(){
            $(this).css({ "background" : "url(images/shop_main_visual1.png) no-repeat center"}).stop().animate({opacity : 1},assec);
        });
    } else {
        $(".shop_mainv").stop().animate({opacity : 0},assec,function(){
            $(this).css({ "background" : "url(images/shop_main_visual"+ svn +".png) no-repeat center"}).stop().animate({opacity : 1},assec);
        });
    }
    $(".shop_mainlist li").eq(svn-1).addClass("select").siblings("li").removeClass("select");
})


/* sub_shop #more hight */
var bh = $("#best .wrap:nth-child(2)").height()
var best_height = 2120; //2230 // 110

var bn = 1;
$("#more a").click(function(){
    bn++;
    $("#more").removeClass("return");
    if(bn>3){
        bn=1;
    } else if(bn==3){
        $("#more").addClass("return");
    }
    $("#best .wrap:nth-child(2)").animate({"height":bn*best_height});
    return false;
});


/* -------------
     dt_chair 
---------------*/
/* main info */
$(".dtside > a").click(function(){
    $(".dtside img").removeClass("select");
    $(this).children("img").addClass("select");
    var infoin = $(this).index()+1;
    $(".dtmain img:first-child").attr("src","images/dt_info_main"+infoin+".png");
    var korname = $(this).children("img").attr("alt");
    var engname = $(this).children("img").attr("data-selectname");
    $(".exp3 dd p").html(engname + "<br>" + korname);
});






var o_sprice = 561000;
var s_price = o_sprice - 100000;
var tsp, tos;
$(".amount .plus").click(function(){
    var amtxt = Number($(".amount p").text())+1;
    if (amtxt > 5) {
        $(".amount p").text(5);
        tsp = String(s_price*5);
        tos = String(o_sprice*5);
        $(".exp4 p").text(addComma(tsp) + " 원");
        $(".exp4 span").text(addComma(tos) + " 원");
        $(".exp5 span").text(addComma(tsp) + " 원");
    } else {
        $(".amount p").text(amtxt);
        tsp = String(s_price*amtxt);
        tos = String(o_sprice*amtxt);
        $(".exp4 p").text(addComma(tsp) + " 원");
        $(".exp4 span").text(addComma(tos) + " 원");
        $(".exp5 span").text(addComma(tsp) + " 원");
    }
});
$(".amount .minus").click(function(){  
    var amtxt = $(".amount p").text()-1;
    if (amtxt <= 1){
        $(".amount p").text(1);
        tsp = String(s_price);
        tos = String(o_sprice);
        $(".exp4 p").text(addComma(tsp) + " 원");
        $(".exp4 span").text(addComma(tos) + " 원");
        $(".exp5 span").text(addComma(tsp) + " 원");
    } else {
        $(".amount p").text(amtxt);
        tsp = String(s_price*amtxt);
        tos = String(o_sprice*amtxt);
        $(".exp4 p").text(addComma(tsp) + " 원");
        $(".exp4 span").text(addComma(tos) + " 원");
        $(".exp5 span").text(addComma(tsp) + " 원");
    }
});
function addComma(value){ //addComma(변수)는 콤마추가.
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return value; 
}

/* page click */
$("#snav ul li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    var navname = $(this).attr("data-snav");
    $("#information, #review, #qna, #guide").removeClass("on");
    $("#"+navname).addClass("on");
});

var rpn = $(".revpage ul li").length;
if(rpn>5){
    $(".predot").addClass("on");
}

var pn =0;
$(".revpage ul li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    pn = $(this).index();
    if(pn>=3){
        $(".page ul").css({"left":(pn-2)*-40})
    } else {
        $(".page ul").css({"left":0})
    }
});

$(".revpage .prev").click(function(){
    $(".revpage ul li.on").prev("li").addClass("on").siblings("li").removeClass("on");
});
$(".revpage .next").click(function(){
    $(".revpage ul li.on").next("li").addClass("on").siblings("li").removeClass("on");
});
$("#review .rev_choice li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
})
$("#qna .qna_choice li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
})


