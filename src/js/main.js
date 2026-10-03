// splide

import Splide from '@splidejs/splide';
// 基本構造
import '@splidejs/splide/css';

// 色が緑の矢印
// import '@splidejs/splide/css/sea-green';


new Splide( '.splide',{
    type   : 'loop',
    perPage: 5,
    autoplay: true, //自動再生
    interval: 4000, // 自動再生の間隔
    focus: "center",//中央をアクティブに
    gap: "1rem",//スライド間の余白
    
    breakpoints: {
        768: {
            perPage: 3,
        }
    }
} ).mount();

