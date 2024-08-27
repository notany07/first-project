var swiper = new Swiper(".contain .swiper", {
    spaceBetween: 0,
    centeredSlides: false,
    loop:true,
    loopedSlides: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    autoplay:false,
    navigation: {
      nextEl: ".contain .swiper .swiper-button-next",
      prevEl: ".contain .swiper .swiper-button-prev",
    },
});

function fillProgressBar(container) {
    const fillValue = container.getAttribute('data-fill');
    const progressBar = container.querySelector('.progress-bar');
    progressBar.style.width = fillValue + "%";
}

function showProgressBars() {
    const trigger = document.querySelector('.skill');
    const triggerPosition = trigger.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (triggerPosition < screenPosition) {
        const progressContainers = document.querySelectorAll('.progress-container');
        progressContainers.forEach(container => {
            container.style.opacity = "1"; // 막대 보이게 하기
            fillProgressBar(container); // 막대 채우기
        });
        window.removeEventListener('scroll', showProgressBars); // 이벤트 리스너 제거
    }
}

window.addEventListener('scroll', showProgressBars);