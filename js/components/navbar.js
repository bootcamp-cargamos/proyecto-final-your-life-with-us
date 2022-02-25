import STORAGE from "../storage.js";
export default Vue.component("navbar", {
  props: [],
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    goInicio() {
      this.$router.push("/");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goRegister() {
      this.$router.push("register");
    },
    goContactanos() {
      this.$router.push("/contacto");
    },
    goCarrito() {
      this.$router.push("/carrito");
    },
    goMedicinas() {
      this.$router.push("/medicinas");
    },
    goRemedios() {
      this.$router.push("/remedios");
    },
    goProducto() {
      this.$router.push("/producto");
    },
    logout() {
      STORAGE.remove("token");
      this.$router.push("/");
    },
  },
  mounted() {},
  created: function () {
    setInterval(() => {
      this.isLogged = !(STORAGE.get("token") == null);
    }, 1000);
  },
  template: `
    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div class="container px-5">
        <!--LOGO-->
        <a @click="goInicio" class="navbar-brand">
          <h5 class="">YourLifeWithUs</h5>
        </a>
        <a @click="goInicio"class="navbar-brand">
        <abbr title="Deja tu VIDA con nosotros, la cuidaremos">
          <img src="/images/logo.png" alt="..." width="100" />
        </abbr>
        </a>
        <!--TOGGLER (BARRITAS MOBILE)-->
        <button
          class="navbar-toggler"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar_menu"
          aria-controls="navbar_menu"
          aria-expanded="false"
          aria-label="Toggle"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>

        <!--MENU DE NAVEGACION-->
        <div class="navbar-collapse collapse" id="navbar_menu">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a @click="goInicio" class="nav-link active">Inicio</a>
            </li>
            <li class="nav-item">
              <a @click="goMedicinas" class="nav-link">Medicinas</a>
            </li>
            <li class="nav-item">
              <a @click="goRemedios" class="nav-link">Medicina Natural y Tradicional</a>
            </li>
            <li class="nav-item">
              <a @click="goContactanos" class="nav-link">Contactanos</a>
            </li>
          </ul>
        </div>
        <!--LISTA DE ITEMS-->
        <div class="d-flex">
        <abbr title="Ven y observa tu carrito de Compras ¡Pulsa Aqui!">
          <a @click="goCarrito">
            <button id="btn_cart" class="btn btn-outline-secondary mx-4">
              <i class="bi bi-cart-fill"></i>
            </button>
          </a>
          </abbr>
        </div>
  
        <div class="d-flex">
        <abbr title="Aún no te has unido a nuestra Página que esperas ¡Pulsa Aqui!">
                <a @click="goLogin">
                <button class="btn btn-outline-secondary">
                  <i class="bi bi-person-fill"></i>
                </button>
              </a>
              </abbr>
            </div>

          </div>
        </div>
      </nav>
    `,
});
