function calcularCupos(capacidad, inscritos) {
  return capacidad - inscritos;

}

function obtenerEstado(cuposDisponibles) {

  if (cuposDisponibles === 0) {
    return "Completa";

  }

  if (cuposDisponibles <= 5) {

    return "Últimos cupos";

  }

  return "Disponible";

}

const cuposTaller = calcularCupos(30, 18);
const estadoTaller = obtenerEstado(cuposTaller);

console.log(`Cupos disponibles: ${cuposTaller}`);
console.log(`Estado: ${estadoTaller}`);

const actividades = [

  {
    codigo: "MUS001",
    nombre: "Taller de guitarra inicial",
    categoria: "Música",
    descripcion: "Aprende los acordes básicos y toca tus primeras canciones.",
    precio: 15000,
    cupos: 20
  },

  {
    codigo: "ART002",
    nombre: "Acuarela para principiantes",
    categoria: "Artes visuales",
    descripcion: "Técnicas de color y composición con materiales básicos.",
    precio: 12000,
    cupos: 4
  },

  {
    codigo: "TEA003",
    nombre: "Teatro comunitario",
    categoria: "Teatro",
    descripcion: "Improvisación y trabajo escénico grupal.",
    precio: 0,
    cupos: 0
  },

  {
    codigo: "FOT004",
    nombre: "Fotografía urbana",
    categoria: "Fotografía",
    descripcion: "Composición y luz mientras documentas tu barrio.",
    precio: 10000,
    cupos: 15
  },

  {
    codigo: "HUE005",
    nombre: "Huerto comunitario",
    categoria: "Comunidad",
    descripcion: "Cultivo sustentable en espacios compartidos.",
    precio: 0,
    cupos: 20
  },

  {
    codigo: "PRO006",
    nombre: "Programación creativa",
    categoria: "Tecnología",
    descripcion: "Introducción a la creación de proyectos interactivos.",
    precio: 8000,
    cupos: 5

  },

  {
    codigo: "CIN007",
    nombre: "Cine comunitario",
    categoria: "Cine",
    descripcion: "Proyección y conversatorio sobre cine local.",
    precio: 0,
    cupos: 25
  },

  {
    codigo: "DAN008",
    nombre: "Danza folclórica",
    categoria: "Danza",
    descripcion: "Ritmos y coreografías tradicionales para todo nivel.",
    precio: 9000,
    cupos: 10
  }

];



const cartelera = document.querySelector("#cartelera");

function crearTarjeta(actividad) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const nombre = document.createElement("h3");
  nombre.textContent = actividad.nombre;

  const categoria = document.createElement("p");
  categoria.textContent = `Categoría: ${actividad.categoria}`;

  const descripcion = document.createElement("p");
  descripcion.textContent = actividad.descripcion;

  const precio = document.createElement("p");
  precio.textContent = actividad.precio === 0

    ? "Gratis"

    : `Precio: $${actividad.precio}`;

  const cupos = document.createElement("p");
  cupos.textContent = `Cupos: ${actividad.cupos}`;

  if (actividad.cupos > 0 && actividad.cupos <= 5) {

    cupos.textContent = `¡Últimos ${actividad.cupos} cupos!`;
    cupos.classList.add("aviso-cupos");

  }

  if (actividad.cupos === 0) {

    cupos.textContent = "Actividad completa";
    cupos.classList.add("actividad-completa");

  }

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(categoria);
  tarjeta.appendChild(descripcion);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(cupos);
  cartelera.appendChild(tarjeta);
}

function mostrarActividades(lista) {

  cartelera.replaceChildren();

  for (const actividad of lista) {

    crearTarjeta(actividad);

  }

}

mostrarActividades(actividades);

const botonTodas = document.querySelector("#mostrar-todas");
const botonDisponibles = document.querySelector("#mostrar-disponibles");

function mostrarTodas() {

  mostrarActividades(actividades);

}

function mostrarDisponibles() {

  const disponibles = [];

  for (const actividad of actividades) {

    if (actividad.cupos > 0) {

      disponibles.push(actividad);

    }

  }

  mostrarActividades(disponibles);

}

botonTodas.addEventListener("click", mostrarTodas);
botonDisponibles.addEventListener("click", mostrarDisponibles);