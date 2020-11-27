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
    carouselImage.style.backgroundSize = 'auto 100%';
    carouselImage.style.transition = '0.6s ease';
  });
  
  arrowRight.addEventListener('click', () => {
    counter = Math.abs(counter + 1) % 5;
    carouselImage.style.background = sliderData[counter].background;
    carouselImage.style.backgroundSize = 'auto 100%';
    carouselImage.style.transition = '0.6s ease';
  });
}

export default carousel;
