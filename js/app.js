import LoginPage from "./pages/login.js";
import RegisterPage from "./pages/registro.js";
import inicio from "./pages/inicio.js";
import Contacto from "./pages/contacto.js";
import Navbar from "./components/navbar.js";
import carrito from "./pages/carrito.js";
import medicinas from "./pages/medicinas.js";
import medicinas from "./pages/remedios.js";
var routes = [
  { path: "/", component: inicio},
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/contacto", component: Contacto },
  { path: "/carrito", component: carrito },
  { path: "/medicinas", component: medicinas },
  { path: "/remedios", component: remedios },


  

];
var router = new VueRouter({
  routes: routes,
  mode: "hash", 
  base: "/",
});
var app = new Vue({
  el: "#app",
  components: {Navbar},
  router: router,
});