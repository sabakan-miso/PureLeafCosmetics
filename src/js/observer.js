"use strict";
const $observeTitles = [...document.querySelectorAll(".observe-title")];
console.log("observe-title:", $observeTitles);

const options = {
    rootMargin:"0px 0px 0px 200px",//observe-titleが横幅90pxなので移動-200pxがはみ出てしまうので検知しない
    threshold: 0.5,
};

const setItemActive =(entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");

        }else{
            entry.target.classList.remove("active")
        }

    });
};

const observer = new IntersectionObserver(setItemActive, options);

$observeTitles.forEach((title) => {
    observer.observe(title);
});


// skill-bar
const $observerBars = [...document.querySelectorAll(".skill-bar")];
const optionsBar ={
    threshold:0.5,
}
const skillActive =(skills) =>{
    skills.forEach((skill) =>{
        if(skill.isIntersecting){
            skill.target.classList.add("active");
        }else{
            skill.target.classList.remove("active")
        }
    });
};

const observerBar = new IntersectionObserver(skillActive, optionsBar);

$observerBars.forEach((bar) =>{
    observerBar.observe(bar);
});