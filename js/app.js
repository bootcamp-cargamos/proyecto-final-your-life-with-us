import LoginPage from "./pages/login.js";
import RegisterPage from "./pages/registro.js";
import inicio from "./pages/inicio.js";
import Contacto from "./pages/contacto.js";
import Navbar from "./components/navbar.js";
import carrito from "./pages/carrito.js";
import medicinas from "./pages/medicinas.js";
import remedios from "./pages/remedios.js";
import producto from "./pages/producto.js";
import Custom_footer from "./components/Custom_footer.js";
import card from "./components/card.js";


var routes = [
  { path: "/", component: inicio},
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/contacto", component: Contacto },
  { path: "/carrito", component: carrito },
  { path: "/medicinas", component: medicinas },
  { path: "/remedios", component: remedios },
  { path: "/producto", component: producto },





];
var router = new VueRouter({
  routes: routes,
  mode: "hash", 
  base: "/",
});
var app = new Vue({
  el: "#app",
  components: {Navbar,Custom_footer,card},
  router: router,
});