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
    start: "0% 50%",
    end: "100% 70%",
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
//===== sect .title
sect1_once_tl.fromTo(
    '.sect1  .inner .wrap > *',
    {
        autoAlpha: 0,
        y: 40,
    },
    {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
    }
);
sect2_once_tl.fromTo(
    '.sect2  .inner > *',
    {
        autoAlpha: 0,
        y: 40,
    },
    {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.5,
    }
);
//===== 슬라이드시 애니메이션 함수
function animateSlideElements(slide) {
    if (!slide) return;

    const figure = slide.querySelectorAll('.sect2 .swiper-slide figure');

    if (figure) {
        gsap.fromTo(
            figure,
            { y: 80, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power1.out",
                stagger: 0.4,
            }
        );
    }
}