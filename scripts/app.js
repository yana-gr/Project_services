
var   mask = document.querySelector('.mask'),
  sidebar = document.querySelector('.sidebar'),
  openSidebar = document.querySelector('.header__burger'),
  closeSidebar = document.querySelector('.sidebar__burger'),
  feedback = document.querySelector('.feedback'),
  openFeedback = document.querySelectorAll('.btn__chat'),
  closeFeedback = document.querySelector('.feedback__btn-close'),
  modalCall = document.querySelector('.modal-call'),
  openModalCall = document.querySelectorAll('.btn__call'),
  closeModalCall = document.querySelector('.modal-call__btn-close')


  if (document.body.clientWidth < 1365) {

  // Открытие/закрытие бокового меню
  openSidebar.addEventListener('click', function (evt) {
    evt.preventDefault();
    sidebar.classList.add('sidebar--show');
    feedback.classList.remove('sidebar--show');
    mask.classList.add('mask--show');
    modalCall.classList.remove('sidebar--show');
  });

  closeSidebar.addEventListener('click', function (evt) {
    evt.preventDefault();
    sidebar.classList.remove('sidebar--show');
    mask.classList.remove('mask--show');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
      sidebar.classList.remove('sidebar--show');
      mask.classList.remove('mask--show');
    }
  });
}

// Закрытие при клике ВНЕ окна
mask.addEventListener('click', (evt) => {
  if (evt.target === mask) {
     mask.classList.remove('mask--show');
     sidebar.classList.remove('sidebar--show');
     feedback.classList.remove('sidebar--show');
     modalCall.classList.remove('sidebar--show');
     document.body.style.overflow = '';
  }
});

// Открытие/закрытие Обратная связь
for (let i = 0; i < openFeedback.length; i = i + 1){
  openFeedback[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    feedback.classList.add('sidebar--show');
    sidebar.classList.remove('sidebar--show');
    mask.classList.add('mask--show');
    modalCall.classList.remove('sidebar--show');
  });
}

closeFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedback.classList.remove('sidebar--show');
  mask.classList.remove('mask--show')
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    feedback.classList.remove('sidebar--show');
    mask.classList.remove('mask--show')
  }
});

// Открытие/закрытие Звонок

for (let i = 0; i < openModalCall.length; i = i + 1){
  openModalCall[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCall.classList.add('sidebar--show');
    sidebar.classList.remove('sidebar--show');
    mask.classList.add('mask--show');
    feedback.classList.remove('sidebar--show');
  });
}

closeModalCall.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalCall.classList.remove('sidebar--show');
  mask.classList.remove('mask--show')
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    modalCall.classList.remove('sidebar--show');
    mask.classList.remove('mask--show')
  }
});



// Слайдер
if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.brands__container', {
    slidesPerView: 5,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.brands--swiper-pagination',
    },
  });
}

if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.devices__container', {
    slidesPerView: 3,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.devices--swiper-pagination',
    },
  });
} 

if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.prices__container', {
    slidesPerView: 2,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.prices--swiper-pagination',
    },
  });
} 


//Скрытие/раскрытие "Читать далее"
var buttonReadNext = document.querySelector('.about__button');
var showAllText = document.querySelector('.about__article');

buttonReadNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(!showAllText.classList.contains('about__article--show-all')){
    showAllText.classList.add('about__article--show-all');
    buttonReadNext.textContent = 'Свернуть';
    buttonReadNext.classList.remove('show__all--bottom');
    buttonReadNext.classList.add('show__all--top')
  } else {
    showAllText.classList.remove('about__article--show-all');
    buttonReadNext.textContent = 'Читать далее';
    buttonReadNext.classList.remove('show__all--top');
    buttonReadNext.classList.add('show__all--bottom')
  }
});


//Скрытие/раскрытие "Показать все бренды"
var buttonShowAll = document.querySelector('.brands__all');
var showAllBrands = document.querySelector('.brands__container');

buttonShowAll.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(!showAllBrands.classList.contains('brands__container--show-all')){
    showAllBrands.classList.add('brands__container--show-all');
    buttonShowAll.textContent = 'Скрыть';
    buttonShowAll.classList.remove('show__all--bottom');
    buttonShowAll.classList.add('show__all--top')
  } else {
    showAllBrands.classList.remove('brands__container--show-all');
    buttonShowAll.textContent = 'Показать все';
    buttonShowAll.classList.remove('show__all--top');
    buttonShowAll.classList.add('show__all--bottom')
  }
});

//Скрытие/раскрытие "Показать все услуги"
var buttonShowAllDevices = document.querySelector('.devices__all');
var showAllDevices = document.querySelector('.devices__container');

buttonShowAllDevices.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(!showAllDevices.classList.contains('devices__container--show-all')){
    showAllDevices.classList.add('devices__container--show-all');
    buttonShowAllDevices.textContent = 'Скрыть';
    buttonShowAllDevices.classList.remove('show__all--bottom');
    buttonShowAllDevices.classList.add('show__all--top')
  } else {
    showAllDevices.classList.remove('devices__container--show-all');
    buttonShowAllDevices.textContent = 'Показать все';
    buttonShowAllDevices.classList.remove('show__all--top');
    buttonShowAllDevices.classList.add('show__all--bottom')
  }
});
