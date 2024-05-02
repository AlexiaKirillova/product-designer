document.addEventListener('DOMContentLoaded', () => {
  // fixed menu

  //burger
  const burger = document?.querySelector('[data-burger]');
  const nav = document?.querySelector('[data-nav]');
  const navItems = nav?.querySelectorAll('a')
  const body = document.body;
  const header = document?.querySelector('.header');
  const headerHeight = header.offsetHeight;
  // console.log(headerHeight)
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

  burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger__btn--active');
    nav.classList.toggle('header__nav--visible');
  });

  navItems.forEach(el => {
    el.addEventListener('click', () => {
      body.classList.remove('stop-scroll');
      burger.classList.remove('burger__btn--active');
      nav.classList.remove('header__nav--visible');  
    })
  })

  // fixed menu
  const section = document.querySelectorAll('.section')
  let lastScrollTop;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > lastScrollTop || scrollDistance <= headerHeight) {
      header.classList.remove('header--fixed');
    } else {
      header.classList.add('header--fixed');
    }

    lastScrollTop = scrollDistance;
    
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav__link').forEach((link) => {
          let id = link.getAttribute('href').replace('#', '');
          if (id === entry.target.id) {
            link.classList.add('nav__link--active');
          } else {
            link.classList.remove('nav__link--active');
          }
        });
      }
    });
  }, {
    threshold: 0.5
  });
  
  document.querySelectorAll('.section').forEach(section => { observer.observe(section)} );

  });
  

  // swiper for skillset icons
  const swiper = new Swiper('#swiperSkillset', {
    slidesPerView: 2,
    grid: {
      fill: 'row',
      rows: 3,
    },
    loop: false,
    breakpoints: {
      769: {
        loop: true,
        slidesPerView: 4,
        grid: {
          rows: 1,
        },        
      },
    },
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
