"use strict";
// const $observeTitles = [...document.querySelectorAll(".observe-title")];
// console.log("observe-title:", $observeTitles);

// const options = {
//     rootMargin:"0px 0px 0px 200px",//observe-titleが横幅90pxなので移動-200pxがはみ出てしまうので検知しない
//     threshold: 0.5,
// };

// const setItemActive =(entries) =>{
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             entry.target.classList.add("active");

//         }else{
//             entry.target.classList.remove("active")
//         }

//     });
// };

// const observer = new IntersectionObserver(setItemActive, options);

// $observeTitles.forEach((title) => {
//     observer.observe(title);
// });


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
