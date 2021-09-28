const slider = () => {
  const slider = document.querySelector('.slider');
  const slide = document.querySelectorAll('.slider-item');
  const sliderWrap = document.querySelector('.slider-wrap');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const dot = document.querySelectorAll('.dot');

const adaptiveSlider = () => {
    let currentSlide = 0;
  let translate = 0;
    
  const clientWidth = slider.clientWidth;

  slide.forEach(item => {
    item.style.minWidth = `${clientWidth}px`;
  });

  

  const prevSlide = () => {
    dot[currentSlide].classList.remove('active');
  }


  const nextSlide = () => {
    dot[currentSlide].classList.add('active');
  }
  

  sliderWrap.addEventListener('click', e => {
    prevSlide();

    if(e.target.closest('.arrow-right')) {
      currentSlide++;
      translate -= clientWidth;
      slider.style.transform = `translateX(${translate}px)`;
      arrowLeft.style.pointerEvents = 'auto';
    } else if(e.target.closest('.arrow-left')) {
      currentSlide--;
      translate += clientWidth;
      slider.style.transform = `translateX(${translate}px)`;
      
    } else if(e.target.closest('.dot')) {
      dot.forEach((item, index) => {
        if(item === e.target) {
          translate = 0;
          currentSlide = index
          translate -= clientWidth * index; 
          slider.style.transform = `translateX(${translate}px)`;
          arrowLeft.style.pointerEvents = 'auto';
        }
      })
    }

    nextSlide();

    if(currentSlide === 5) {
      arrowRight.style.pointerEvents = 'none';
    } else {
      arrowRight.style.pointerEvents = 'auto';
    }

    if(currentSlide === 0) {
      arrowLeft.style.pointerEvents = 'none';
    } else {
      arrowLeft.style.pointerEvents = 'auto';
    }

  });
}

  if(window.innerWidth < 1023 && window.innerHeight > 768) {
    adaptiveSlider();
  }

}

slider();



const showBlocks = () => {
  const adaptiveBlocks = () => {
  const blocks = document.querySelectorAll('.slider-item');
  const btn = document.querySelector('.slider-btn');
  
  const showCard = () => {
    blocks[0].style.display = 'flex';
    blocks[1].style.display = 'flex';
  }

  btn.addEventListener('click', () => {
    blocks.forEach(item => {
      item.style.display = 'flex';
      btn.style.display = 'none';
    })
  })

  showCard();
  
  }

  if(window.innerWidth < 767) {
    adaptiveBlocks();
  }
  
}

showBlocks();