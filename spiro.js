// Muuttujien määrittäminen
const canvas = document.getElementById('canvas'); // canvas-muuttujan määrittäminen
const context = canvas.getContext('2d'); // canvasin sisältö-muuttujan määrittäminen
let Radius; // Isompi Ympärä Radius- muuttuja
let radius; // pienempi ympyrä radius- muuttuja
let diametr; // etäisyys diameter- muuttuja
let angle = 0; // kulman angle-muuttuja
let timer; // timer-muuttuja, jota kutsutaan setTimeout-funktiolla (3)

// spiro-funktion määrittäminen
// Spirograph-kaavion avulla määritellään x- ja y-koordinaatit
// ja funktio kutsuu itsensä (setTimeout)
function drawSpiro() {
  const x = (Radius - radius) * Math.cos(angle) + diametr * Math.cos(((Radius - radius) * angle) / radius); // x-koordinaatin määrittäminen
  const y = (Radius - radius) * Math.sin(angle) - diametr * Math.sin(((Radius - radius) * angle) / radius); // y-koordinaatin määrittäminen
  angle = angle + 0.1; // kulma kasvaa 0.1
  context.fillRect(400 + x, 300 + y, 5, 5); // spirographin alkamiskoordinaatit ja viivan paksuus
  context.fillStyle = '#FF362B'; // spirographin väri
  timer = setTimeout(drawSpiro, 50); // (3) funktio setTimeout kutsuu drawSpiro()-funktion aikavälillä 50 millisekuntia
}
  
// start-näppäimen funktio
// argumenttina (a,b,c) käyttää kahden radiuksien ja diameterin arvot
// ja kutsuu funktion drawSpiro()
function startDraw(a, b, c) {
  // tarkastellaan onko timer false tai true, jotta välttää näppäimen toista näppäilyä 
  // ja näin myös funktion drawSpiro() uudelleen käynnistystä
  if (timer) { 
    return;    
  }
  console.log('start', a); 
  Radius = a; // Isompi Radius saa arvon kohdasta input id="n1", startDraw-funktion argumentit (a) avulla
  radius = b; // sama tässä (input id="2", (b))
  diametr = c; //  sama tässä (input id="3", (c))
  drawSpiro(); // funktion drawSpiro() käynnistys
}

// stop-näppäimen funktio
function stopDraw() {
  console.log('stop');
  clearTimeout(timer); // perutetaan drawSpiro()-funktio timer avulla 
  timer = false; // timer saa arvon false -> pystyy painaa Start uudestaan ja näin kutsua funktio drawSpiro()
}

// funktio tyhjentää canvas-(1) ja input- alueet (2)
function clearCanvas() {
  console.log('clearCanvas');
  context.clearRect(0, 0, canvas.width, canvas.height); // (1)
  document.getElementById('form').reset(); // (2)
}
