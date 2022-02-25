import STORAGE from "../storage.js";
export default Vue.component("Custom_footer", {
    props: [],
    data: function () {
      return {};
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
    template: `
    <footer class="bg-info text-dark py-5">
        <div class="d-flex justify-content-evenly">

          <div class="container">
              <p class="fw-bolder">¿Quieres ver nuestros productos? ¡Aquí están!</p>
              <ul class="text-dark">
                <li><a @click="goMedicinas" class="link-dark text-decoration-none">Nuestras medicinas</a></li>
                <li><a @click="goRemedios" class="link-dark text-decoration-none">Nuestras medicinas naturales</a></li>
              </ul>
          </div>

          <div class="container">
            <p class="text-center m-0">Copyright &copy; 2022</p>
          </div>
          
          <div class="container">
            <p>Nuestras redes sociales:</p>
          </div>
        </div>
    </footer>
    `,
  });
