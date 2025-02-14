
// height400 = swiper400 함수
function updateSlideState(swiperInstance) {
    const slideTitles = document.querySelectorAll('.swiper400 span'); // 슬라이드 제목
    const slideElements = document.querySelectorAll('.sect2 .swiper .swiper-wrapper .swiper400'); // 슬라이드 요소

    // 모든 슬라이드 제목 숨기기
    slideTitles.forEach(title => title.style.opacity = 0);

    // 모든 슬라이드 필터 적용
    slideElements.forEach(slide => slide.style.filter = 'brightness(0.5) invert(0)');

    // 활성화된 슬라이드의 제목과 필터 상태 업데이트 (안전성 체크 포함)
    if (swiperInstance.activeIndex >= 0) {
        const activeTitle = slideTitles[swiperInstance.activeIndex];
        const activeSlide = slideElements[swiperInstance.activeIndex];

        if (activeTitle) {
            activeTitle.style.opacity = 1;
        }
        if (activeSlide) {
            activeSlide.style.filter = 'none';
        }
    }
}

// Swiper 초기화 및 설정
const swiper400 = new Swiper(".height400", {
    // effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 32,
    speed: 1000,
    on: {
        init: function () {
            updateSlideState(this); // 초기화 시 슬라이드 상태 설정
        },
        slideChange: function () {
            updateSlideState(this); // 슬라이드 변경 시 상태 업데이트
        }
    },
    pagination: {
        el: '.height400-pagination',
        clickable: true,
    },
});

// 화면 크기 변화 감지 및 Swiper 초기화 (스와잎 루프키면 작동안됨)
window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) { // 모바일 화면 크기 이하일 경우
        swiper400.slideTo(0); // 첫 번째 슬라이드로 이동
    }
});

