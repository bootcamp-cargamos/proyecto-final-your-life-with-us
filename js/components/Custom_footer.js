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
    <footer class="bg-dark bg-gradient text-white py-5 ">
        <div class="container d-flex justify-content-evenly">
          <div class="container">
              <p class="fw-bolder">¿Quieres ver nuestros productos? ¡Aquí están!</p>
              <br>
              <br>
              <ul class="text-white">
                <li><a @click="goMedicinas" class="text-white text-decoration-none">Nuestras medicinas</a></li>
                <br>
                <li><a @click="goRemedios" class="text-white text-decoration-none">Nuestras medicinas naturales</a></li>
              </ul>
          </div>

          <div class="container">
            <p class="text-center m-0">Copyright &copy; 2022</p>
          </div>

          <div class="container">
            <p>Nuestras redes sociales:</p>
            <div class="d-flex">
                    <img src="../images/whatsapp.png" alt="..." width="30" height="30">
                    <p class="align-self-center mx-5">+502 55350144</p>
            </div>
            <div class="d-flex">
                    <img src="../images/gmail-logo.png" alt="..." width="30" height="30">
                    <p class="align-self-center mx-5">educaylwu@gmail.com</p>
            </div>

            <div class="d-flex">
                    <a href="https://www.facebook.com/" class="text-white text-decoration-none"><img src="../images/Facebook-Logo-Square-768x768.png" alt="..." width="30" height="30"></a>
                    <a href="https://www.facebook.com/" class="text-white text-decoration-none"><p class="align-self-center mx-5">YourLifeWithUs</p></a>
            </div>

            <div class="d-flex">
                    <a href="https://twitter.com/" class="text-white text-decoration-none"><img src="../images/twitter.png" alt="..." width="30" height="30"></a>
                    <a href="https://twitter.com/" class="text-white text-decoration-none"><p class="align-self-center mx-5">@yourlifewithus_educa</p></a>
            </div>

            <div class="d-flex">
                  <a href="https://instagram.com/" class="text-white text-decoration-none"><img src="../images/instagram.png" alt="..." width="30" height="30"></a>
                  <a href="https://instagram.com/" class="text-white text-decoration-none"><p class="align-self-center mx-5">@yourlifewithus__edu</p></a>
            </div>
          </div>
        </div>
    </footer>
    `,
  });
