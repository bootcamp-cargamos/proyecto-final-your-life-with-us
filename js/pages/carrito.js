import CLIENT from "../api/client.js";
import STORAGE from "../storage.js";

export default Vue.component("Carrito", {
  data:
    function () {
      return {
        email: '',
        username: '',
        password: '',
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
  },
  template: `
    <section class="d-flex justify-content-between border m-3 shadow-lg p-5">
      <div class="card me-5" style="width: 30%; height: 50%;">
          <form action="">
              <div class="d-flex justify-content-center h3 mt-3">
                  <h4 class="mt-3">MÉTODO DE PAGO</h4>
              </div>
              
              <div class="d-flex flex-column align-items-start mt-3 p-3">
                  <label for="">Correo Electrónico</label>
                  <input  class="form-control form-label readonly " type="text" placeholder="Correo Electrónico o número de teléfono"required/>
                  <label for="" class="mt-2">Dirección</label>
                  <input  class="form-control form-label readonly " type="text" placeholder="Dirección"required/>
                  <label for="" class="mt-2">Teléfono</label>
                  <input  class="form-control form-label readonly " type="number" placeholder="Teléfono"required/>
                  <form method="post" class="col">
                  <div class="form-check">
                    <p class="fs-5 mt-5">Elige el método de pago</p>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Pago con tarjeta (en la entrega)
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault4">
                      Pago en efectivo (en la entrega)
                    </label>
                  </div>
                  </form>
                  <form method="post" class="col">
                  <div class="form-check">
                    <p class="fs-5 mt-5">Elige el método de entrega</p>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                    />
                    <label class="form-check-label" for="flexRadioDefault5">
                      Envio a domicilio (Costo extra de Q20)
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault6"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault6">
                      Recoger en sucursal
                    </label>
                  </div>
                </form>
              </div>
              
  
              <div class="col-md-12 d-flex justify-content-center">
                  <button class="btn btn-outline-dark fw-bolder mb-3" style="width: 90%; height: 6vh;">
                      <a href="#" class="text-dark text-decoration-none">Realizar Compra</a> 
                  </button>
              </div>
          </form>
      </div>
    
  
      <div class="d-flex flex-column" style="width: 70%;">
          <div class="d-flex justify-content-start align-items-center " style="height: 60px; margin-right: 5px;">
              <button class="btn btn-outline-dark fw-bolder" type="submit">
                  <a href="tienda.html" class="text-decoration-none text-dark">Regresar a la tienda</a>
              </button>
          </div>
          <hr>
  
          <div class="d-flex justify-content-start ">
              <strong>Carrito de compras</strong>
          </div>
  
          <div class="d-flex justify-content-start ">
              <p>Tus productos son:</p>
          </div>
  
              
          <div class="border d-flex flex-row justify-content-between"
          style="width: 100%; margin-top: 15px;">
              <div class="d-flex justify-content-start align-items-center">
                <div>
                  <img src="/images/tabcin.jpg"
                      width="150px" alt="">
                </div>
                <div class="d-flex flex-column align-items-start" style="margin:20px;">
                  <strong>Nombre del Producto</strong>
                  <p>Tabcin</p>
                </div>
              </div>
              <div class="d-flex  align-items-center">
                <div class=" d-flex justify-content-around "style=" width: 200px;">
                  <div>
                    <p class="fw-bolder">3</p>
                  </div>
                  <div>
                    <span>Codigo:</span>
                    <span id="codigo">777</span>
                  </div>
                  <div>
                    <span id="precio">Q.20.00</span>
                  </div>
                  <div class="text-danger fs-5">
                  </div>
                </div>
              </div>
            </div>
      </div>
      </div>
    </section>
      `,
});