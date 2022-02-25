import LoginPage from "./pages/login.js";
import RegisterPage from "./pages/registro.js";
// import ProductsPage from "./pages/products_page.js";
// import EditProductPage from "./pages/edit_product_page.js";
// import CategoriesPage from "./pages/categories_page.js";
import Navbar from "./components/navbar.js";
// import AddProduct from "./pages/add_product_page.js";
var routes = [
  { path: "/", component: LoginPage },
  { path: "/register", component: RegisterPage },
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
  components: {Navbar},
  router: router,
});