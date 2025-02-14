const header = document.querySelector('header');
const sect2 = document.querySelector('.sect2'); // sect2 클래스를 선택

let lastScrollY = 0; // 이전 스크롤 위치 초기화

window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY; // 현재 스크롤 위치를 가져옴
    if (currentScrollY < lastScrollY) {
        // 스크롤을 위로 올리고 있는 경우
        header.classList.remove("scrolled");
    } else {
        // 스크롤을 아래로 내리고 있는 경우
        header.classList.add("scrolled");
    }

    // sect2가 화면에 닿을 때 배경색 변경
    const sect2Top = sect2.getBoundingClientRect().top;
    //헤더 아랫부분이 sect2에 만났을때
    if (sect2Top <= 100) {
        // sect2가 화면에 닿았을 때
        header.classList.add("header"); // 'header' 클래스를 추가
        header.classList.remove("header1"); // 'header1' 클래스를 제거
    } else {
        // sect2가 화면에 없을 때
        header.classList.add("header1"); // 'header1' 클래스를 추가
        header.classList.remove("header"); // 'header' 클래스를 제거
    }

    // 마지막 스크롤 위치를 현재 스크롤 위치로 업데이트
    lastScrollY = currentScrollY;
});
