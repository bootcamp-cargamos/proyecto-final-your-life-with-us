/* Se importan todas las Paginas & componentes del proyecto */
import InicioSesion from "./pages/login.js";
import Registro from "./pages/registro.js";
// import ProductsPage from "./pages/products_page.js";
// import EditProductPage from "./pages/edit_product_page.js";
// import CategoriesPage from "./pages/categories_page.js";
import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js";
// import AddProduct from "./pages/add_product_page.js";

// Definimos las rutas del proyecto
var routes = [
  { path: "/", component: InicioSesion},
  { path: "/register", component: Registro },
  // { path: "/products", component: ProductsPage },
  // { path: "/products/edit", component: EditProductPage },
  // { path: "/categories", component: CategoriesPage },
  // { path: "/add/product", component: AddProduct },
];
/* Creamos el router del proyecto y
 cargamos las rutas disponibles */

var router = new VueRouter({
  routes: routes,
  mode: "hash", // añadirá un "#" a la URL para permitir refrescar la pagina
  base: "/",
});

/* Se carga el app dentro <div id="app"> con Vue*/

var app = new Vue({
  el: "#app",
  components: { Navbar, Footer},
  router: router,
});