const hexGrid = document.getElementById("hexGrid");
const totalHexes = 400;

// Crear 400 hexágonos
for (let i = 0; i < totalHexes; i++) {
  const hex = document.createElement("div");
  hex.className = "hex";
  hexGrid.appendChild(hex);
}

// Seleccionar 2 morados (#800080) y 5 verdes (#228B22) aleatorios
function colorHexagons() {
  const hexes = Array.from(document.querySelectorAll(".hex"));
  const shuffled = hexes.sort(() => 0.5 - Math.random());

  shuffled.slice(0, 2).forEach(hex => hex.style.backgroundColor = "#800080");
  shuffled.slice(2, 7).forEach(hex => hex.style.backgroundColor = "#228B22");
}

colorHexagons();
