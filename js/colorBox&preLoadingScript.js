// changing colorItems color by jquery
let colorItems  =$(".colorItem");//contain a list of div with colorItem class
colorItems.eq(0).css("backgroundColor","black"); //selection specified div and setting its backgroundColor
colorItems.eq(1).css("backgroundColor","teal");
colorItems.eq(2).css("backgroundColor","#8e7754");
colorItems.eq(3).css("backgroundColor","pink");
colorItems.eq(4).css("backgroundColor","red");
$(".gear-box").animate({right:- $(".colorBox").outerWidth(true)});//hide color box items
//changing colors
colorItems.click(function(){ //click event on every colorItem div
    let selectedColor = $(this).css("backgroundColor");//this refers to the clicked color item , arrow function dosenot have this ,
    //we use jQuery .css() as a getter to get the wnated backgroundColor
    $("h1,h2,h3,h4,i").css("color",`${selectedColor}`);
})

//toggle gear box
$("#gearBoxToggleBtn").click(()=>{
    let colorBoxWidth=$(".colorBox").outerWidth(true);
    // console.log( $(".gear-box").css("right")); //"0px" as a string
  if ($(".gear-box").css("right") === "0px") {
    $(".gear-box").animate({right:-colorBoxWidth},1000);
  } else {
    $(".gear-box").animate({right:0},1000);
  }   
})
//pre loading 
$(document).ready(()=>{
    $("#loading img").fadeOut(500,()=>{
        $("#loading").fadeOut(500 , ()=>{
            $("body").css("overflow","auto")
        })
    })
})