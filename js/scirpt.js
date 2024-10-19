document.addEventListener(`DOMContentLoaded`, function () {

    // 스와이퍼 동작
      var swiper = new Swiper(".boonSwiper", {
      slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
        nextEl: ".sec_01 .swiper-button-next",
        prevEl: ".sec_01 .swiper-button-prev",
      }
      });
  
  var swiper = new Swiper(".parlorSwiper", {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".sec_02 .swiper-button-next",
        prevEl: ".sec_02 .swiper-button-prev",
      },
  });
  
  var swiper = new Swiper(".eventSwiper", {
    
    loop: true,
    centeredSlides: true,
    spaceBetween: 300,
    navigation: {
        nextEl: ".sec_03 .swiper-button-next",
        prevEl: ".sec_03 .swiper-button-prev",
    },
  });


  // 스크롤시 배경색 변경
  const sec2 = document.querySelector(`.sec_02`);
  const sec3 = document.querySelector(`.sec_03`);

  window.addEventListener(`scroll`, function () {
    const sec2OffsetTop = sec2.offsetTop + 500;
    const sec3OffsetTop = sec3.offsetTop + 500;

    const scrollTop = window.scrollY;

    const bodyBg = document.querySelector(`body`);

    if (scrollTop > sec2OffsetTop && scrollTop < sec3OffsetTop) {
      bodyBg.classList.add(`bg`)
    } else {
      bodyBg.classList.remove(`bg`)
    }
  });

    // 상단이동버튼
    const topBtn = document.querySelector(`.top_btn`);

    window.addEventListener(`scroll`, function () {
        const scrollTop = window.scrollY;

        if (scrollTop >= 300) {
            topBtn.classList.add(`scroll`)
        } else {
            topBtn.classList.remove(`scroll`)
        }
    });

    topBtn.addEventListener(`click`, () => {
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    });
})