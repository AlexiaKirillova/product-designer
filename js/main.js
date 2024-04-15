document.addEventListener('DOMContentLoaded', () => {

  // swiper for svg icons
  const swiper = new Swiper('#swiperSkillset', {
    loop: true,
    slidesPerView: 4
  });


  // photo - tabs

  const tabBtn = document.querySelectorAll('.btns-tabs__btn');
  const tabContent = document.querySelectorAll('.content-tabs__list');
    
  function openTabContent (e) {
    const currentBtn = e.currentTarget;
    const currentTab = currentBtn.getAttribute('data-btn');

    if (!currentBtn.classList.contains('btns-tabs__btn--active')) {
      tabBtn.forEach(btn => {
        btn.classList.remove('btns-tabs__btn--active');
      });
      currentBtn.classList.add('btns-tabs__btn--active')
  
      tabContent.forEach(tab => {
        tab.classList.remove('content-tabs__list--active')
      });
      document.getElementById(currentTab).classList.add('content-tabs__list--active')

    }

  }

  tabBtn.forEach(e => {
    e.addEventListener('click', openTabContent)
  })

  document.querySelector('.btns-tabs__btn').click();

}
);
