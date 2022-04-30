
// change navigation bar when scrolling by jQuery navigation bar
let whoWeAreOffset = $(".whoWeAre").offset().top;
$(window).scroll(function(){
    let windowTopPos = $(window).scrollTop();
    // console.log(windowTopPos);
    // console.log(whoWeAreOffset);
    if(windowTopPos > whoWeAreOffset ){
        $(".navigationLayer").css("backgroundColor","white");
        $(".navigationLayer  a").css("color","#686868");
        $(".navigationLayer .logo img").attr("src","images/bakery-color.png");
        $(".navigationBtn").fadeIn(500);
    }else{
        $(".navigationLayer").css("backgroundColor","transparent");
         $(".navigationLayer  a").css("color","white");
         $(".navigationLayer .logo img").attr("src","images/bakery-light-1.png");
         $(".navigationBtn").fadeOut(500);
    }
})
//-------------------------------------------------------------------
//  navigation Btn scroll top
$(".navigationBtn").click(()=>{
    $("html,body").animate({scrollTop:'0'},2000);
})
