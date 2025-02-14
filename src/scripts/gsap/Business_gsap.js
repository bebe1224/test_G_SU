//===== ScrollTrigger 설정
const sect1_title_once = {
    trigger: ".sect1",
    start: "0% 10%",
    end: "100% 10%",
    markers: false, // 디버그용 마커 (선)
    once: true, // 한 번만 실행
}
const sect2_title_once = {
    trigger: ".sect2",
    start: "0% 10%",
    end: "100% 10%",
    markers: false, // 디버그용 마커 (선)
    once: true, // 한 번만 실행
}
const sect3_title_once = {
    trigger: ".sect3",
    start: "0% 10%",
    end: "100% 10%",
    markers: false, // 디버그용 마커 (선)
    once: true, // 한 번만 실행
}
//===== tl
const sect1_once_tl = gsap.timeline({
    scrollTrigger: sect1_title_once,
});
const sect2_once_tl = gsap.timeline({
    scrollTrigger: sect2_title_once,
});
const sect3_once_tl = gsap.timeline({
    scrollTrigger: sect3_title_once,
});
//===== sect .title
sect1_once_tl.fromTo(
    '.sect1  .inner .wrap > *',
    {
        autoAlpha: 0, // opacity: 0 + visibility: hidden
        y: 100,
    },
    {
        autoAlpha: 1, // opacity: 1 + visibility: visible
        y: 0,
        duration: 2,
        stagger: 0.5,
    }
);
ScrollTrigger.matchMedia({
    // 0px ~ 767px
    "(max-width: 767px)": function () {
        const btn = ['.sect2 .inner .swiper-button-prev', '.sect2 .inner .swiper-button-next']

        sect2_once_tl
            .fromTo(
                '.sect2 .inner .title5',
                {
                    autoAlpha: 0,
                    y: 100,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                }
            )
            .fromTo(
                '.sect2 .inner .wrap',
                {
                    autoAlpha: 0,
                    y: 100,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.4" // 0.4초 전부터 시작, 동시에 진행되게 설정
            )
            .fromTo(
                btn,
                {
                    autoAlpha: 0,
                    y: 100,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.3" // 0.3초 전부터 시작, 동시에 진행되게 설정
            )
            .fromTo(
                '.sect2 .inner .btn_wrap',
                {
                    autoAlpha: 0,
                    y: 100,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.2" // 0.2초 전부터 시작, 동시에 진행되게 설정
            );
    },

    // 767px 이상
    "(min-width: 767px)": function () {
        sect2_once_tl.fromTo(
            '.sect2 .inner > *',
            {
                autoAlpha: 0, // opacity: 0 + visibility: hidden
                y: 100,
            },
            {
                autoAlpha: 1, // opacity: 1 + visibility: visible
                y: 0,
                duration: 2,
                stagger: 0.4,
            }
        );
    }
});
ScrollTrigger.matchMedia({
    // 0px ~ 767px
    "(max-width: 767px)": function () {
        const btn = ['.sect3 .inner .swiper-button-prev', '.sect3 .inner .swiper-button-next']

        sect3_once_tl
            .fromTo(
                '.sect3 .inner .title5',
                {
                    autoAlpha: 0,
                    y: 100,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                }
            )
            .fromTo(
                '.sect3 .inner .wrap',
                {
                    autoAlpha: 0,
                    y: 100,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.4" // 0.4초 전부터 시작, 동시에 진행되게 설정
            )
            .fromTo(
                btn,
                {
                    autoAlpha: 0,
                    y: 100,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.3" // 0.3초 전부터 시작, 동시에 진행되게 설정
            )
            .fromTo(
                '.sect3 .inner .btn_wrap',
                {
                    autoAlpha: 0,
                    y: 100,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.2" // 0.2초 전부터 시작, 동시에 진행되게 설정
            );
    },

    // 767px 이상
    "(min-width: 767px)": function () {
        sect3_once_tl.fromTo(
            '.sect3 .inner > *',
            {
                autoAlpha: 0,
                y: 100,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 2,
                stagger: 0.4,
            }
        );
    }
});
//===== 슬라이드시 애니메이션 함수
function animateSlideElements(slide) {
    if (!slide) return;

    const i_ws = slide.querySelector('.sect2 .i_ws');
    const sub_title6 = slide.querySelector('.sect2 .sub_title6');

    if (i_ws) {
        gsap.fromTo(
            i_ws,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power1.out" }
        );
    }

    if (sub_title6) {
        gsap.fromTo(
            sub_title6,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.75, ease: "power1.out" }
        );
    }
}
function animateSlideElements1(slide) {
    if (!slide) return; //(slide)가 존재하지 않으면 함수 실행을 중단

    const i_ws = slide.querySelectorAll('.sect3 .swiper-slide .i_ws > *');

    if (window.innerWidth > 768) {  // 화면 너비가 768px 이상일 때만 실행
        gsap.fromTo(
            i_ws,
            { y: 80, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power1.out",
                stagger: 0.15,
            }
        );
    }

}

