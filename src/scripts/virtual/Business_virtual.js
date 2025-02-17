function wrapElements() {
  const btnWraps = document.querySelectorAll('.virtual_btnWrap');
  const wraps = document.querySelectorAll('.virtual_wrap');

  // btn_wrap과 wrap의 개수가 같다고 가정
  btnWraps.forEach((btnWrap, index) => {
    const wrap = wraps[index];

    // 이미 감싸진 요소가 있으면 감싸지 않도록 처리
    if (!btnWrap.parentNode.classList.contains('virtual-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('virtual-wrapper');  // 상자에 클래스를 추가

      // btn_wrap과 wrap을 새로운 div로 감싸기
      btnWrap.parentNode.insertBefore(wrapper, btnWrap);
      wrapper.appendChild(btnWrap);
      wrapper.appendChild(wrap);
    }
  });

  // 가상의 상자에 스타일을 추가 (CSS로 설정)
  const style = document.createElement('style');
  style.textContent = `
    .virtual-wrapper {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      gap: 48px;
    }
  `;
  document.head.appendChild(style);
}

function removeWrapperElements() {
  const wrappers = document.querySelectorAll('.virtual-wrapper');
  wrappers.forEach(wrapper => {
    // wrapper 안에 있는 btnWrap과 wrap을 원래 위치로 되돌리기
    const btnWrap = wrapper.querySelector('.virtual_btnWrap');
    const wrap = wrapper.querySelector('.virtual_wrap');

    if (btnWrap && wrap) {
      // wrapper에서 btnWrap과 wrap을 제거하고, 원래 위치로 되돌리기
      wrapper.parentNode.insertBefore(btnWrap, wrapper);
      wrapper.parentNode.insertBefore(wrap, wrapper);
    }
    // wrapper 삭제
    wrapper.remove();
  });
}

const mediaQuery = window.matchMedia('(max-width: 767px)');

const handleMediaChange = (event) => {
  if (event.matches) {
    wrapElements(); // 767px 이하일 때 실행
  } else {
    removeWrapperElements(); // 768px 이상일 때 실행
  }
};

// 처음 한 번 실행
handleMediaChange(mediaQuery);

// 미디어 쿼리 상태가 변경될 때마다 실행
mediaQuery.addEventListener('change', handleMediaChange);

