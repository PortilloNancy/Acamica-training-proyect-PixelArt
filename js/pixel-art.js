var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

// funcion para cargar los colores en la paleta...
function arrayColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoDiv = document.createElement("div");
    nuevoDiv.className = "color-paleta";
    nuevoDiv.style.backgroundColor = nombreColores[i];
    var padrePaleta = document.getElementById("paleta");
    padrePaleta.appendChild(nuevoDiv);
    //console.log(nuevoDiv);
  }
}

//funcion para armar la grilla de pixeles...
function grilla() {
  for (var i = 0; i < 53; i++) {
    for (var j = 0; j < 33; j++) {
      grillaDiv = document.createElement("div");
      grillaPixeles.appendChild(grillaDiv);
    }
  }
}

// evento para cambiar el color del indicador...
var seleccionColor = document.getElementById("paleta");
var indicadorColor = document.getElementById("indicador-de-color");

function modificarIndicadorColor(evento) {

  indicadorColor.style.backgroundColor = evento.target.style.backgroundColor;
}
seleccionColor.addEventListener("click", modificarIndicadorColor);

//evento para pintar la grilla
function pintarGrilla(e) {
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}
grillaPixeles.addEventListener("click", pintarGrilla);

//evento para cambiar el indicador de color personalozado
colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    indicadorColor.style.backgroundColor = colorActual;
  })
);

// verificar si el mouse esta presionado
var mousePresionado = false;

grillaPixeles.addEventListener("mousedown", function () {
  mousePresionado = true;
  //console.log(mousePresionado);
});
grillaPixeles.addEventListener("mouseup", function () {
  mousePresionado = false;
  //console.log(mousePresionado);
});

//funcion para pintar en movimiento
grillaPixeles.addEventListener("mouseover", function (e) {
  if (mousePresionado) {
    pintarGrilla(e);
    //console.log("hola");
  }
});
// funcion para borrar todo
var borrarTodo = document.getElementById("borrar");

borrarTodo.addEventListener("click", borrarGrilla);
function borrarGrilla() {
  $(document).ready(function () {
    var $elementos = $("#grilla-pixeles div");
    $elementos.animate({ "backgroundColor": "white" }, 1000);
  });
}
// funcion para seleccionar a batman
$(".imgs img").click(function () {
  var imagenSuperHeroe = $(this);
  var imagenSuperHeroeId = imagenSuperHeroe.attr("id");
  cargarSuperheroe(eval(imagenSuperHeroeId));
});

// funcion para guardar los dibujos
var guardaTodo = document.getElementById("guardar");

guardaTodo.addEventListener("click",guardarPixelArt);





grilla();
arrayColores();