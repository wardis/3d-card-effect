const SMOOTH_FACTOR = 15;

const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

container.addEventListener('mousemove', (e) => {
  let posX = (window.innerWidth / 2 - e.pageX) / SMOOTH_FACTOR;
  let posY = (window.innerHeight / 2 - e.pageY) / SMOOTH_FACTOR;
  card.style.transform = `rotateY(${-posX}deg) rotateX(${posY}deg)`;
});

container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';

  translateRotateZ(sneaker, 150, -10);

  [title, description, sizes, purchase].forEach((el) => translateZ(el, 80));
});

container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';

  [card, sneaker, title, description, sizes, purchase].forEach((el) =>
    resetTransform(el)
  );
});

function resetTransform(element) {
  element.style.transform = 'none';
}

function translateZ(element, distance = 0) {
  element.style.transform = `translateZ(${distance}px)`;
}

function translateRotateZ(element, distance = 0, angle = 0) {
  element.style.transform = `translateZ(${distance}px) rotateZ(${angle}deg)`;
}
