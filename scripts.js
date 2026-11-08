// Массив с путями к изображениям
const images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg'
];

// Сохранение элементов в константы, что бы не искать их каждый раз
const imageEl  = document.getElementById('slide-image');
const counterEl = document.getElementById('counter');
const prevBtn  = document.getElementById('prev-btn');
const nextBtn  = document.getElementById('next-btn');

// Сохранение начального индекса в переменную
let currentIndex = 0;

// Функция обновления слайдера по текущему индексу
function render() {
  // Изменение картинки и ее названия
  imageEl.src = images[currentIndex];
  imageEl.alt = `Изображение ${currentIndex + 1}`;
  // Обновляем пагинацию (+1, потому, что индексы в массиве начинаются с 0)
  counterEl.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

// Функция смены изображения на следующее с зацикливанием
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  render();
}

// Функция смены изображения на предыдущее с зацикливанием
function prevSlide() {
  // + images.length, что бы число не стало отрицательным при индексе 0
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  render();
}

// Добавление обработчиков событий на кнопки
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Первичная отрисовка при загрузке страницы
render();