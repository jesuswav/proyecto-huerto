// Menu and Porfile
const porfile = document.getElementById("porfile-info");
const porfileIcon = document.getElementById("porfile-icon");

const menu = document.getElementById("menu-container");
const menuIcon = document.getElementById("menu-icon");

var menuClosed = menu.classList.contains("hidden");
var porfileClosed = porfile.classList.contains("hidden");

// Navigation bar
const dataContainer = document.getElementById("data-container-main-id");
const galleryContainer = document.getElementById("gallery-main-id");
const registerContainer = document.getElementById("register-main-id");

const inicio = document.getElementById("init-nav");
const inicioMobile = document.getElementById("init-nav-mobile");
const register = document.getElementById("register-nav");
const registerMobile = document.getElementById("register-nav-mobile");
const gallery = document.getElementById("gallery-nav");
const galleryMobile = document.getElementById("gallery-nav-mobile");


// Menu and Porfile functions
const viewMenu = () => {
  if (!menuClosed) {
    menu.classList.add("visible");
  }
  console.log("Hola");

  menu.classList.toggle("hidden");
};

const viewPorfile = () => {
  if (!porfileClosed) {
    porfile.classList.add("visible");
  }
  console.log("Hola porfile");

  porfile.classList.toggle("hidden");
};

function outMenuClick(event) {
  var objetivo = event.target;
  if (objetivo != menuIcon) {
    menu.classList.add("hidden");
    menu.classList.remove("visible");
    console.log(objetivo);
  }
}
function outPorfileClick(event) {
  var objetivo = event.target;
  if (objetivo != porfileIcon) {
    porfile.classList.add("hidden");
    porfile.classList.remove("visible");
    console.log(objetivo);
  }
}

//Navigation Bar functions
const viewInit = () => {
  dataContainer.classList.add("visible-nav");
  dataContainer.classList.remove("hidden-nav");

  galleryContainer.classList.add("hidden-nav");
  galleryContainer.classList.remove("visible-nav");

  registerContainer.classList.add("hidden-nav");
  registerContainer.classList.remove("visible-nav");

  // Cambiar los colores del boton
  inicioMobile.classList.add("pushed");
  registerMobile.classList.remove("pushed");
  galleryMobile.classList.remove("pushed");

  console.log("-------------")
};
const viewGallery = () => {
  dataContainer.classList.add("hidden-nav");
  dataContainer.classList.remove("visible-nav");

  galleryContainer.classList.add("visible-nav");
  galleryContainer.classList.remove("hidden-nav");

  registerContainer.classList.add("visible-nav");
  registerContainer.classList.remove("hidden-nav");

  // Cambiar los colores del boton
  inicioMobile.classList.remove("pushed");
  registerMobile.classList.remove("pushed");
  galleryMobile.classList.add("pushed");

  console.log("-------------")
};
const viewRegister = () => {
  dataContainer.classList.add("hidden-nav");
  dataContainer.classList.remove("visible-nav");

  galleryContainer.classList.add("hidden-nav");
  galleryContainer.classList.remove("visible-nav");

  registerContainer.classList.add("hidden-nav");
  registerContainer.classList.remove("visible-nav");

  // Cambiar los colores del boton
  inicioMobile.classList.remove("pushed");
  registerMobile.classList.add("pushed");
  galleryMobile.classList.remove("pushed");

  console.log("-------------")
};


// Event listeners Menu and Porfile
window.addEventListener("click", outMenuClick, false);
window.addEventListener("click", outPorfileClick, false);

menuIcon.addEventListener("click", viewMenu, false);
porfileIcon.addEventListener("click", viewPorfile, false);

//Event listeners Navigation Bar
inicio.addEventListener("click", viewInit, false);
gallery.addEventListener("click", viewGallery, false);
register.addEventListener("click", viewRegister, false);

inicioMobile.addEventListener("click", viewInit, false);
galleryMobile.addEventListener("click", viewGallery, false);
registerMobile.addEventListener("click", viewRegister, false);
