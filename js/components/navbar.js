import STORAGE from "../storage.js";

export default Vue.component("navbar", {
  props: [],
  data: function () {
    return {
      username: "",
      password: "",
      isLogged: false,
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/");
    },
    goRegister() {
      this.$router.push("register");
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
          <a href="/index.html" class="navbar-brand">
            <h5 class="">YourLifeWithUs</h5>
          </a>
          <a href="/index.html" class="navbar-brand">
            <img src="/img/Logo.png" alt="YLWU" width="100" />
          </a>
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
  
          <div class="navbar-collapse collapse" id="navbar_menu">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a href="/index.html" class="nav-link active">Inicio</a>
              </li>
              <li class="nav-item">
                <a href="/pages/nosotros.html" class="nav-link">Nosotros</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  href="/pages/tienda.html"
                  class="nav-link dropdown-toggle"
                  id="drop_products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Tienda</a
                >
                <ul class="dropdown-menu" aria-labelledby="drop_products">
                  <li>
                    <a href="/pages/tienda.html" class="dropdown-item">Todos</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a href="/pages/tienda.html" class="dropdown-item">Medicamentos</a>
                  </li>
                  <li>
                    <a href="/pages/tienda.html" class="dropdown-item">Remedios</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="/pages/contact.html" class="nav-link">Contactanos</a>
              </li>
            </ul>
          </div>
  
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar..."
            />
            <button class="btn btn-outline-secondary me-4" type="submit">
              Ir
            </button>
          </form>
  
          <div class="d-flex">
            <a href="/pages/compra.html">
              <button id="btn_cart" class="btn btn-outline-secondary mx-4">
                <i class="bi bi-cart-fill"></i>
                <span class="badge rounded-pill bg-secondary ms-1">0</span>
              </button>
            </a>
          </div>
  
          <div class="d-flex">
              <a href="pages/login.html">
                <button class="btn btn-outline-secondary">              
                <i class="bi bi-person-fill"></i>
              </button>
          </a>

          </div>
        </div>
      </nav>
    `,
});
