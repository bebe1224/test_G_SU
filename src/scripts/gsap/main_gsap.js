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
    start: "0% 20%",
    end: "100% 10%",
    markers: false, // 디버그용 마커 (선)
    once: true, // 한 번만 실행
}
const sect3_title_once = {
    trigger: ".sect3",
    start: "0% 54%",
    end: "50% 20%",
    markers: false, // 디버그용 마커 (선)
    once: true, // 한 번만 실행
}
const sect4_title_once = {
    trigger: ".sect4",
    start: "0% 20%",
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
const sect4_once_tl = gsap.timeline({
    scrollTrigger: sect4_title_once,
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
        sect2_once_tl.fromTo(
            '.sect2  .inner .wrap > *',
            {
                autoAlpha: 0, // opacity: 0 + visibility: hidden
                y: 100,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 2,
                stagger: 0.5,
            }
        );
    },

    // 767px 이상
    "(min-width: 767px)": function () {
        sect2_once_tl.fromTo(
            '.sect2 .inner .wrap > *',
            {
                autoAlpha: 0,
                y: 100,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.4,
            }
        );
        sect2_once_tl.fromTo(
            '.sect2 .swiper_screen',
            {
                autoAlpha: 0,
                x: 100,
            },
            {
                autoAlpha: 1,
                x: 0,
                duration: 1,
            },
            '-=0.4' //첫 번째 애니메이션이 끝나기 0.4초 전에  시작
        );
    }
}); //반응형포함
sect3_once_tl.fromTo(
    '.sect3 .inner .wrap > *',
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
        sect4_once_tl.fromTo(
            '.sect4 .inner .wrap > *',
            {
                autoAlpha: 0, // opacity: 0 + visibility: hidden
                y: 100,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 2,
                stagger: 0.5,
            }
        );
    },

    // 767px 이상
    "(min-width: 767px)": function () {
        sect4_once_tl.fromTo(
            '.sect4 .inner > *',
            {
                autoAlpha: 0, // opacity: 0 + visibility: hidden
                y: 100,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 2,
                stagger: 0.5,
            }
        );
    }
}); //반응형포함


