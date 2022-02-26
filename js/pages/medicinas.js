import CLIENT from "../api/client.js";
import STORAGE from "../storage.js";

export default Vue.component("medicinas", {
  data:
    function () {
      return {
        products:[],
        username: '',
        password: '',
      };
    },
  methods: {
    goLogin() {
      this.$router.push("/");
    },
    goProducto() {
      this.$router.push("/producto");
    },
    DoSingnUp: async function () {
      let vm = this;
      try {
        const response = await CLIENT.post('http://silabuz-api-project.herokuapp.com/authentication/sign-up/', {
          email: this.email,
          username: this.username,
          password: this.password,

        });
        STORAGE.push("token", response.token);
        vm.$router.push("/");
      } catch (e) {
        console.warn(e);
        alert("Error al registrarse");
      }
    },
  },
  created: function () {
    const is_logged = !(STORAGE.get("token") == null);
    if (is_logged) {
      this.$router.push("/");
    }
    fetch("https://yourlifewithus.herokuapp.com/api/get_all_products/10")
    .then(response => response.json())
    .then(data => {
        this.products=data.data
    });
  },
  template: `
        <main>
        <header>
                <img src="/images/banner.jpg" alt="..." class="bg_image" style="width: 100%;opacity: 0.50;">
                <div class="d-flex h-100 flex-column align-items-center justify-content-center banner" style="height: 50vh;">
                <!--Cabecera-->
                  <h1 class="display-3 fw-bolder">YourLifeWithUs</h1>
                  <p class="fw-bold">Cuidando de ti y los tuyos.</p>
                  <p class="fw-bold">¿Buscas algo?...¡Nosotros lo tenemos!</p>
                  <p class="fw-bold">
                    ¿Tienes algun problema?...¡Encontrarás la solución con nosotros!
                  </p>
                </div>
        </header>
            <!--PRODUCTOS-->
            <div class="container card py-2 my-5" style="max-width: 80%">
                <p class="h3 text-center py-4">Todas nuestras Medicinas:</p>

                <!--ARTÍCULOS-->
                <div class="row gx-3 row-cols-2 row-cols-3 row-cols-lg-5 justify-content-center">
                <card :product="product"></card>
                </div>
            </div>
        </main>
    `,
});