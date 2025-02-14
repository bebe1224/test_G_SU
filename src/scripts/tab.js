initTabs(document.querySelectorAll('.sect2 .tab_btn'), document.querySelectorAll('.sect2 .tab_box'), '.sect2_swiper635');
initTabs(document.querySelectorAll('.sect3 .tab_btn'), document.querySelectorAll('.sect3 .tab_box'), '.sect3_swiper635');

function initTabs(tabBtns, tabBoxes, container) {
    let swiperInstance = null; // Swiper 인스턴스 저장 변수

    tabBtns.forEach((tabBtn, index) => {
        tabBtn.addEventListener('click', () => {
            // 기존 탭 비활성화
            tabBoxes.forEach((tabBox) => tabBox.classList.remove('on'));
            tabBtns.forEach((btn) => btn.classList.remove('on'));

            // 클릭된 탭 활성화
            tabBoxes[index].classList.add('on');
            tabBtns[index].classList.add('on');

            // 기존 Swiper가 있다면 제거
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }

            // 새로운 Swiper 초기화
            swiperInstance = initSwiper(container, index);
        });
    });

    // 기본적으로 첫 번째 탭 활성화
    tabBtns[0].classList.add('on');
    tabBoxes[0].classList.add('on');

    // 첫 번째 탭에 대한 Swiper 인스턴스 초기화
    swiperInstance = initSwiper(container, 0);

    // 리사이즈 처리 함수  스와이퍼 위치
    function handleResize() {
        if (window.innerWidth <= 768) {
            if (swiperInstance) {
                swiperInstance.slideTo(0, 0); // 화면이 작을 때 첫 번째 슬라이드로 초기화
            }
        } else {
            if (swiperInstance) {
                swiperInstance.slideTo(0, 0); // 화면이 커질 때 첫 번째 슬라이드로 초기화
            }
        }
    }

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
    
}

