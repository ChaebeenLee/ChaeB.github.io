$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        anchors: ['anchor1', 'anchor2', 'anchor3'],
        menu: '#menu',
        sectionsColor: ['#f9f8f6', '#f9f8f6', '#fff'],
        onLeave: function(index, nextIndex, direction){
            if (index==1) {
                $(".scroll").removeClass("on");
            }
            if (index==2) {
                $(".about_cont .cont2 mark").removeClass("on");
            }
            if (index==3) {
                $(".bar").removeClass("on");
                var barw = new Array;
                var gtimer = setInterval(function(){
                    for (var i = 0; i<6; i++) { 
                        barw[i] = parseInt($(".cont3 li").eq(i).find("span").width() / 540 * 100);
                        $(".cont3 li").eq(i).find("i").text(barw[i]+"%");
                    }
                },100);
                setTimeout(function(){
                    clearInterval(gtimer)
                },3100);
            }
            if (index==4){
                $(".story_cont .cont4 figure").delay(300).animate({"width":"0"},10);
                $(".about_cont .cont4 mark").removeClass("on"); 
            }
            if (index==5) {
                $(".about_cont .cont5 .hobby").animate({"opacity":0},1000, 'easeOutCirc'); 
            }
            if (nextIndex<7) {
                $(".story_cont .cont7 div").animate({"opacity":0},1000, 'easeOutCirc');
            };
        },
        afterLoad: function(anchorLink, index){
            if (index==1) {
                $(".scroll").addClass("on");
            }
            if (index==2) {
                $(".about_cont .cont2 mark").addClass("on");
            }
            if (index==3) {
                $(".bar").addClass("on");
                var barw = new Array; // barw ?????? ????????? ????????? ?????? ????????????.
                var gtimer = setInterval(function(){ //gtimer??? 0.1????????? ??????
                    for (var i = 0; i<6; i++) { //i??? 0~5?????? ??????
                        barw[i] = parseInt($(".about_cont .cont3 li").eq(i).find("span").width() / 540 * 100);
                        // barw?????? i?????? ?????? ???????????? ?????????(i?????? li??? ????????? ????????? ???????????? ??????)
                        // parseInt : ????????? ??????(????????? ?????????) */
                        $(".about_cont .cont3 li").eq(i).find("i").text(barw[i]+"%");
                        // i?????? li??? ?????? ??? i??? ????????? ???????????? ??????
                    }
                },100);
                setTimeout(function(){
                    clearInterval(gtimer)
                },3100);
            }
		    if (index==4) {
                $(".story_cont .cont4 figure").animate({"width":"135px"},300);
                $(".about_cont .cont4 mark").addClass("on"); 
            }
            if (index==5) {
                $(".about_cont .cont5 .hobby").animate({"opacity":1},1000, 'easeOutCirc'); 
            }
            if (index>=7) {
                $(".story_cont .cont7 div").animate({"opacity":1},1000, 'easeOutCirc');
            };
        },
    });
});
