var imgs = Array.from(document.querySelectorAll(".image-gallery img"));
var galleryLightBox = document.getElementById("galleryLightBox");
var galleryLightBoxItem = document.getElementById("galleryLightBoxItem");
var closeBtn = document.getElementById("closeBtn");
var rightBtn = document.getElementById("rightBtn");
var leftBtn = document.getElementById("leftBtn");
var currentSlideIndex = 0 ;

// console.log(imgs);

for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",openGalleryLightBox)
}
function openGalleryLightBox(eventInfo){
    galleryLightBox.style.display="flex";
    // console.log(eventInfo);
    // console.log(eventInfo.target);
    var imgSrc = eventInfo.target.src
    // console.log(imgSrc);
    galleryLightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    currentSlideIndex = imgs.indexOf(eventInfo.target);
    // console.log(currentSlideIndex);
}

closeBtn.addEventListener("click",closeGalleryLightBox);
function closeGalleryLightBox(){
    galleryLightBox.style.display="none";
}

rightBtn.addEventListener("click" , nextSlide);

function nextSlide(){
    currentSlideIndex++ ;
    if(currentSlideIndex===imgs.length){
        currentSlideIndex=0;
    }
    var imgSrc = imgs[currentSlideIndex].src;
    galleryLightBoxItem.style.backgroundImage=`url(${imgSrc})`

}

leftBtn.addEventListener("click",previousSlide);
function previousSlide(){
    currentSlideIndex-- ;
    if(currentSlideIndex < 0){
        currentSlideIndex= imgs.length-1
    }
    var imgSrc = imgs[currentSlideIndex].src;
    galleryLightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}

document.addEventListener("keydown",function(eventInfo){
    if(eventInfo.code==="ArrowRight"|| eventInfo.keyCode===39){
        nextSlide();
    }else if(eventInfo.code==="ArrowLeft"|| eventInfo.keyCode===37){
        previousSlide();
    }else if (eventInfo.code==="Escape"|| eventInfo.keyCode===27){
        closeGalleryLightBox();
    }
})
