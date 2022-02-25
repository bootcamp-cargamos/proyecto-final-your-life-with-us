import LoginPage from "./pages/login.js";
import RegisterPage from "./pages/registro.js";
import inicio from "./pages/inicio.js";
import Navbar from "./components/navbar.js";
var routes = [
  { path: "/", component: inicio},
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
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