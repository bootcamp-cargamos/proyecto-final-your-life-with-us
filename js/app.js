import InicioSesion from "./pages/login.js";
import Registro from "./pages/registro.js";

import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js";
// import AddProduct from "./pages/add_product_page.js";
var routes = [
  { path: "/", component: InicioSesion},
  { path: "/register", component: Registro },
  // { path: "/products", component: ProductsPage },
  // { path: "/products/edit", component: EditProductPage },
  // { path: "/categories", component: CategoriesPage },
  // { path: "/add/product", component: AddProduct },
];

var router = new VueRouter({
  routes: routes,
  mode: "hash",
  base: "/",
});
var app = new Vue({
  el: "#app",
  components: { Navbar, Footer},
  router: router,
});