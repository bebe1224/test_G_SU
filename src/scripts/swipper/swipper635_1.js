
//tab 없는 스와이퍼 그리고 Project_and_Achievements 페이지 전용
const swiper635 = initSwiper(".sect2_swiper635");

function initSwiper(container) {
    return new Swiper(`${container} .swiper`, {
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
            },
        },
    });
}

window.addEventListener('resize', function () {
    swiper635.update();  // Swiper 상태 업데이트
    if (window.innerWidth <= 768) {
        swiper635.slideTo(0); // 첫 번째 슬라이드로 이동
    } else {
        swiper635.slideTo(0); // 첫 번째 슬라이드로 이동
    }
});

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