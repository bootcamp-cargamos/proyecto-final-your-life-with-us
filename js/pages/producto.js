import CLIENT from "../api/client.js";
import STORAGE from "../storage.js";

export default Vue.component("producto", {
  data:
    function () {
      return {
        product:{},
      };
    },
  methods: {
    goLogin() {
      this.$router.push("/");
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
    const ID = this.$route.params.id;
    fetch(`https://yourlifewithus.herokuapp.com/api/products/${ID}`)
    .then(response => response.json())
    .then(data => {
        this.product=data.data
    });
   console.log(ID)
  },
  template: `
                <section class="py-2 me-3">
            <div class="container">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="/images/tabcin.jpg" class="img-fluid rounded-start " alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title fw-bolder">Tabcin Extra Fuerte </h5>
                      <br>
                      <p class="card-text"><b>Código del producto: </b> #77777</p>
                      <h5 class="card-text"> $5.00 </h5>
                      <div class="d-flex text-warning small">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span class="px-2 text-dark">5 - Producto de buena calidad</span>
                    </div>
                    <p class="card-text"><b>Cantidad:</b> Caja (12 capsulas)</p>
                    <br>
                    <p class="card-text fw-bold">Descripción:</p>
                    <p class="card-text">
                        Producto de la compañia <b>Bayer</b>, que combate gripe y tos.
                    </p>
                    <p class="card-text">
                        Contiene acetaminofen, que actua contra los sintomas:
                    </p>
                    <ul class="card-text">
                        <li class="card-text">Dolor de cabeza y cuerpo</li>
                        <li class="card-text">Fiebre</li>
                        <li class="card-text">Tos</li>
                        <li class="card-text">Congestion nasal</li>
                        <li class="card-text">Dolor de cabeza</li>
                    </ul>

                      <p class="card-text"><b>Disponibilidad en stock:   </b>100</p>
                      <br>
                      <p class="card-text"><b>De:</b> Bayer </p>

                      <div class="card-text fw-light">
                                                <!-- <p>Bayer</p> -->
                      <div></div>
                      <p>Cantidad :
                      <button type="button" class="btn btn-dark px-3"> + </button>
                      <span class="badge rounded-pill bg-secondary ms-1 mx-2"> 0 </span>
                      <button type="button" class="btn btn-dark px-3"> - </button> 
                      </p>
                      <div class="d-grid gap-2">
                        <button class="btn btn-outline-success" type="button">Agregar al carrito</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    `,
});