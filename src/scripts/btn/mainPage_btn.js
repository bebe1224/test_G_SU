function updateButtonClass() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        if (window.innerWidth <= 767) {
            button.classList.remove("btn3");
            button.classList.add("btn1");
        } else {
            button.classList.remove("btn1");
            button.classList.add("btn3");
        }
    });
}
function updateButtonClass1() {
    const buttons = document.querySelectorAll(".btn4");
    buttons.forEach((button) => {
        if (window.innerWidth <= 767) {
            button.classList.remove("btn4");
            button.classList.add("btn2");
        } else {
            button.classList.remove("btn2");
            button.classList.add("btn4");
        }
    });
}

// 초기화 (순서 중요)
updateButtonClass();
updateButtonClass1();

// 창 크기 변경 시 두 함수 실행
window.addEventListener("resize", () => {
    updateButtonClass();
    updateButtonClass1();
});

function btn14() {
    const Btns14 = document.querySelectorAll(".btn14");
    const Btns14TEXT = document.querySelector(".btn14 .text");
    const swiperScreen = document.querySelector(".swiper_screen");

    Btns14.forEach((Btn14) => {
        Btn14.addEventListener("click", () => {
            swiperScreen.style.transition = "0.5s ease-in-out";
            if (swiperScreen.style.width === "100%") {
                swiperScreen.style.width = "47%";
                Btns14TEXT.textContent = "open me";
            } else {
                swiperScreen.style.width = "100%";
                Btns14TEXT.textContent = "close me";
            }
        });
    });

    // 화면 크기 변경 시 초기 상태로 리셋
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            swiperScreen.style.width = "47%";
            Btns14TEXT.textContent = "open me";
        }
    });
}
btn14();