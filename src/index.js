function slider() {
  const sliderData = [
    {
      h1: 'Взыскание дебиторской задолженности',
      p: 'Индивидуальный подход и нацеленность на достижение результата',
      background: 'url("/img/header-slider/Rectangle5.png") center (center/cover) no-repeat'
    },
    {
      h1: 'Юридический аутсорсинг',
      p: 'Гарантия своевременности и качества услуг',
      background: 'url("/img/header-slider/Rectangle1.png") center (center/cover) no-repeat'
    },
    {
      h1: 'Юридическая консультация',
      p: 'Детальные разъяснения вопросов по ведению бизнеса от профессионалов',
      background: 'url("/img/header-slider/Rectangle2.png") center (center/cover) no-repeat'
    },
    {
      h1: 'Ликвидация предприятия',
      p: 'Эффективное решение сложных задач',
      background: 'url("/img/header-slider/Rectangle3.png) center (center/cover) no-repeat'
    },
    {
      h1: 'Регистрация ООО',
      p: 'Гарантируем минимальные сроки регистрации под ключ ',
      background: 'url("/img/header-slider/Rectangle4.png") center (center/cover) no-repeat'
    }
  ];
  
  const arrowLeft = document.querySelector('.slider__nav-left');
  const arrowRight = document.querySelector('.slider__nav-right');
  const slider = document.querySelector('.slider');
  const title = slider.querySelector('h1');
  const text = slider.querySelector('p');
  let counter = 0;

  function updateSliderData(index) {
    slider.style.background = sliderData[index].background;
    title.textContent = sliderData[index].h1;
    text.textContent = sliderData[index].p;
  }

  arrowLeft.addEventListener('click', () => {
    console.log('click');
    counter = (counter) ? counter - 1 : 4;
    updateSliderData(counter);
    slider.style.transition = '0.6s ease';
  });
  
  arrowRight.addEventListener('click', () => {
    console.log('click');
    counter = Math.abs(counter + 1) % 5;
    updateSliderData(counter);
    slider.style.transition = '0.6s ease';
  });
}

slider();

function carousel() {
  const sliderData = [
    {
      background: 'url("./img/carousel/carousel.png") center',
    },
    {
      background: 'url("./img/carousel/carousel1.png") center'
    },
    {
      background: 'url("./img/carousel/carousel2.png") center'
    },
    {
      background: 'url("./img/carousel/carousel3.png") center'
    },
    {
      background: 'url("./img/carousel/carousel4.png") center'
    },
  ];
  
  const arrowLeft = document.querySelector('.carousel__arrow-left');
  const arrowRight = document.querySelector('.carousel__arrow-right');
  const carouselImage = document.querySelector('.carousel__image');
  let counter = 0;

  arrowLeft.addEventListener('click', () => {
    counter = (counter) ? counter - 1 : 4;
    carouselImage.style.background = sliderData[counter].background;
    carouselImage.style.transition = '0.6s ease';
  });
  
  arrowRight.addEventListener('click', () => {
    counter = Math.abs(counter + 1) % 5;
    carouselImage.style.background = sliderData[counter].background;
    carouselImage.style.transition = '0.6s ease';
  });
}

carousel();
