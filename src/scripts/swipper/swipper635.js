// ${container}는 템플릿 리터럴을 사용하여 해당 container(즉, ".sect2_swiper635" 또는 ".sect3_swiper1000") 내에서 Swiper 요소를 찾고 설정을 적용하는데 사용됩니다. 내가 sect2에다가 sect2_swiper635 라는 클래스 를쎃으니 여기안에서 스와이퍼를 찾음
const swiper635 = initSwiper(".sect2_swiper635");
const swiper635_1 = initSwiper(".sect3_swiper635");

function initSwiper(container, tabIndex) {
    return new Swiper(`${container} .tab_box:nth-child(${tabIndex + 1}) .swiper`, {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 700,
        pagination: {
            el: `${container} .swiper-pagination`,
            clickable: true,
        },
        navigation: {
            nextEl: `${container} .swiper-button-next`,
            prevEl: `${container} .swiper-button-prev`,
        },
        on: {
            init: function () {
                addHoverEffect();
            },
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];  // 현재 활성화된 슬라이드 선택
                animateSlideElements(activeSlide);
                animateSlideElements1(activeSlide);
            },
        },
    });
}
// Swiper next,prev svg 호버 이펙트
function addHoverEffect() {
    const prev = document.querySelectorAll(".svg_prev");
    const next = document.querySelectorAll(".svg_next");

    prev.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            const path = this.querySelector("path");
            if (path) {
                path.setAttribute("d", "M 40 10 Q 0 65 40 140");
            }
        });

        element.addEventListener("mouseleave", function () {
            const path = this.querySelector("path");
            if (path) {
                path.setAttribute("d", "M 40 10 Q 40 65 40 140");
            }
        });
    });

    next.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            const path = this.querySelector("path");
            if (path) {
                path.setAttribute("d", "M 10 10 Q 50 65 10 140");
            }
        });

        element.addEventListener("mouseleave", function () {
            const path = this.querySelector("path");
            if (path) {
                path.setAttribute("d", "M 10 10 Q 10 65 10 140");
            }
        });
    });
}


