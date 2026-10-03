"use strict";
const $hamburger = document.getElementById("hamburger");
const $nav = document.getElementById("nav-menu");
const $menuLinks = document.querySelectorAll(".nav-links a");


// メニューを閉じる
const closeMenu = () => {
    $hamburger.classList.remove("active");
    $nav.classList.remove("active");
    document.body.style.overflow = "";//スクロール停止
};


// ハンバーガーボタン
$hamburger.addEventListener("click", () => {
    $hamburger.classList.toggle("active");
    $nav.classList.toggle("active");
    if ($nav.classList.contains("active")) {
        document.body.style.overflow = "hidden";//スクロール停止
    } else {
        document.body.style.overflow = "";//スクロール開始
    }
});


// nav-linksをクリック
$menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        closeMenu();
        setTimeout(() => {
            window.location.href =link.href;
        },200);
    });
});
//choromeでガタつくので1.メニューを閉じる → 2. 0.2秒待つ → 3. リンク先へ移動