"use strict";
// FVのテキストアニメーション
const $observerTexts = [...document.querySelectorAll(".observer-text")];

const options = {
    rootMargin:"0px 0px 0px 200px",//observe-titleが横幅90pxなので移動-200pxがはみ出てしまうので検知しない
    threshold: 0.5,
};

const observerTextActive =(entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("is-active");

        }else{
            entry.target.classList.remove("is-active")
        }

    });
};

const observerText = new IntersectionObserver(observerTextActive, options);

$observerTexts.forEach((text) => {
    observerText.observe(text);
});


// FVのBOXアニメーション
const $fvBoxes = document.querySelector(".box-items");

const option={
    threshold: 0.3,
}
const fvBoxActives = (boxes)=>{
    boxes.forEach((box) =>{
        if(box.isIntersecting){
            box.target.classList.add("is-active")
        }else{
            box.target.classList.remove("is-active")
        }
    })

}

const fvObserver = new IntersectionObserver(fvBoxActives, option);
fvObserver.observe($fvBoxes);
