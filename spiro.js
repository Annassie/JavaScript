// Muuttujien määrittäminen
const canvas = document.getElementById('canvas'); // canvas-muuttujan määrittäminen
const context = canvas.getContext('2d'); // canvasin sisältö-muuttujan määrittäminen
let Radius; // Isompi Ympärä Radius- muuttuja
let radius; // pienempi ympyräradius- muuttuja
let diametr; // etäisyys diameter- muuttuja
let angle = 0; // kulman angle-muuttuja
let timer; // timer-muuttuja, jonka kutsutaan setTimeout-funktiolla (3)

// spiro-funktion määrittäminen, Spirograph-kaavion mukaisesti вызывает внутри себя саму себя (см. setTimeout)
function drawSpiro() {
  const x = (Radius - radius) * Math.cos(angle) + diametr * Math.cos(((Radius - radius) * angle) / radius); // x-koordinaatin määrittäminen
  const y = (Radius - radius) * Math.sin(angle) - diametr * Math.sin(((Radius - radius) * angle) / radius); // y-koordinaatin määrittäminen
  angle = angle + 0.1; // kulma kasvaa на 0.1
  context.fillRect(400 + x, 300 + y, 5, 5); // spirographin koordinaatit
  context.fillStyle = '#FF362B'; // sprirographin väri
  timer = setTimeout(drawSpiro, 50); // (3) функция setTimeout вызывает drawSpiro с задержкой 50 милисекунд
}

// start-näppäimen toimivuus принимает в качестве аргументов значения радиусов и диаметра, запускает функцию drawSpiro()
function startDraw(a, b, c) {
  // проверяем таймер false или true, чтобы исключить повторное нажатие на кнопку и соответственно повторный запуск функции drawSpiro();
  if (timer) {
    return;
  }
  console.log('start', a); // console.log('сообщение', имя переменной) - используется для отладки кода (информативность)
  Radius = a; // присваиваем большому радиусу значение, переданное из формы input id="n1" через параметр /аргумент функции startDraw
  radius = b; // аналогично R
  diametr = c; // аналогично R и r
  drawSpiro(); // запускаем функцию рисования drawSpiro()
}

// stop-näppäimen funktio
function stopDraw() {
  console.log('stop');
  clearTimeout(timer); // отменяем ранее установленный вызов функции drawSpiro() через сброс timera
  timer = false; // сбрасываем флаг timera на false, чтобы иметь возможность снова наживать на кнопку start и тем самым запускать функцию drawSpiro()
}

// функция, которая очищает канвас (1) и удаляет данные с инпутов (2)
function clearCanvas() {
  console.log('clearCanvas');
  context.clearRect(0, 0, canvas.width, canvas.height); // (1)
  document.getElementById('form').reset(); // (2)
}
