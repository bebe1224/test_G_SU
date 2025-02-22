const globButton = document.querySelector('.glob');
const translateTexts = document.querySelectorAll('.translate_texts');
const inputFields = document.querySelectorAll('input[placeholder], textarea[placeholder]');

let currentLanguage = 'ko'; // 기본 언어는 한국어

// 버튼 클릭 시 언어 변경
globButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ko' ? 'en' : 'ko';

    // 각 content 요소의 data-* 속성 값을 변경 (HTML도 포함)
    translateTexts.forEach((translateText) => {
        translateText.innerHTML = translateText.getAttribute(`data-${currentLanguage}`);
    });

    inputFields.forEach((inputField) => {
        inputField.setAttribute('placeholder', inputField.getAttribute(`data-placeholder-${currentLanguage}`));
    });
});
