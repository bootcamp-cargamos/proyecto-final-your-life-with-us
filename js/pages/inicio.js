import CLIENT from "../api/client.js";
import STORAGE from "../storage.js";

export default Vue.component("LoginPage", {
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
  },
  template: `
    <section>
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

    <br><br><br>

    <!--CONTENIDO-->
    <main>
    <section class="card container pb-4 mb-5">
        <div>
          <article>
            <h4 class="py-5 text-center">¿Que es "YourLifeWithUs"?</h4>
            <br />
            <p class="px-5 fs-5 text">
              "YourLifeWithUs es una empresa totalmente innovadora, que busca
              ofrecerle los mejores precios al publico en el campo medicinal.
              El objetivo de YourLifeWithUs es revolucionar el mercado de la
              salud, y estamos seguros que lo logrará. "
            </p>
            <p class="fs-6 text fw-bold text-end px-3">
              Angel Mazariegos, CEO.
            </p>
            <div class="d-flex flex-row justify-content-center">
              <img
                src="/images/medtec.jpg"
                alt="..."
                width="300"
                height="200"
              />
              <img
                src="/images/logo.png"
                alt="..."
                width="200"
                height="200"
              />
              <img
                src="/images/tecmed.jpg"
                alt="..."
                width="300"
                height="200"
              />
            </div>
            <br />
            <br />
            <p class="px-3 pt-3">
              Durante los últimos años, la tecnología ha avanzado a pasos
              agigantados y ha permitido el crecimiento de cientos de
              industrias y negocios. La tecnología ha permitido que la
              sociedad evolucione y que encuentre facilidad de movimiento para
              encontrar la solucion a cada problema que encuentre. Las
              facilidades que brinda el Internet y el marketing han logrado
              encontrar la manera de poder comprar lo que queramos, cuando
              queramos. A pesar de ello, existe una industria/necesidad que no
              ha sido abordada adecuadamente: La medicina/salud.
            </p>
            <p class="px-3">
              YourLifeWithUs nació para cubrir esta necesidad social. La
              misión de YourLifeWithUs es ofrecer al consumidor los mejores
              productos del campo medicinal a los mejores precios, para llegar
              a ser la empresa #1 de venta de medicamentos a nivel
              guatemalteco.
            </p>
            <p class="px-3">
              Ademas de eso, YourLifeWithUs, le proporciona al usuario recetas de medicina natural o como
              se le conoce coloquialmente... "remedios", para que puedan tener alternativas en cuanto a costos para poder tratar diferentes padecimientos.
            </p>

          </article>
        </div>
    </section>
    <section class="container mt-5">
            <h2 class="ms-4">Medicinas </h2>
            <div class="row gx-3 row-cols-2 row-cols-3 row-cols-lg-5 justify-content-center scroll_horizontal border h-100">
                    <div class="col">
                      <div class="card">
                        <img
                          class="card-img-top" src="/images/tabcin.jpg" alt="...">
                            <div class="card-body">
                                <h4 id="name" class="fw-folder text-center">
                                  Tabcin Extra Fuerte
                                </h4>
                                <span id="price">$5.00</span>
                              </div>

                            <div class="card-footer border-top-0 bg-transparent">
                                <div class="text-center">
                                    <a @click="goProducto">
                                      <button class="btn btn-outline-dark">Más detalles</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card-footer border-top-0 bg-transparent">
                              <div class="text-center">
                                <a href="#">
                                  <button class="btn btn-outline-dark">Agregar al carrito</button>
                                </a>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>


            <h2 class="ms-4 mt-4">Medicina Natural y Tradicional</h2>
            <div class="row gx-3 row-cols-2 row-cols-3 row-cols-lg-5 justify-content-center scroll_horizontal border h-100">
                    <div class="col">
                      <div class="card">
                        <img
                          class="card-img-top" src="/images/tabcin.jpg" alt="...">
                            <div class="card-body">
                                <h4 id="name" class="fw-folder text-center">
                                  Tabcin Extra Fuerte
                                </h4>
                                <span id="price">$5.00</span>
                              </div>

                            <div class="card-footer border-top-0 bg-transparent">
                                <div class="text-center">
                                    <a @click="goProducto">
                                      <button class="btn btn-outline-dark">Más detalles</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card-footer border-top-0 bg-transparent">
                              <div class="text-center">
                                <a href="#">
                                  <button class="btn btn-outline-dark">Agregar al carrito</button>
                                </a>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
    </section>
    <section class="mt-5 mb-5">
      <div class="container">
        <div class="card">
            <p class="text-center fw-bold h3 my-5">¿Porque comprar con YourLifeWithUs?</p>
              <div class="d-flex flex-row justify-content-around">
                <div class="py-5 fs-3"><i class="bi bi-cash-coin"> </i> Mejores precios</div>
                <div class="py-5 fs-3"><i class="bi bi-clock"></i>Mejores tiempos</div>
                <div class="py-5 fs-3"><i class="bi bi-gem"></i>Mejores tratos</div>
              </div>
              <p class="px-5 mx-4 mb-5">YourLifeWithUs esta hecho por y para cubrir una necesidad social. Nuestro
                servicio se orienta a facilitar a las familias promedio los mejores Medicamentos
                a los mejores precios. El compromiso de cada empleado de YourLifeWithUs es total, y
                queda demostrado en el trato y servicio que se brinda.
              </p>
        </div>
      </div>
    </section>
    <section class="card container">
    <div class="container mt-5 mb-5">
      <article>
        <h4 class="mt-4 text-center">
          ¿Cúal es nuestro metodo de envío?
        </h4>
        <p class="px-3 pt-1">
          El metodo de envío es una de las cosas que hacen a
          YourLifeWithUs distinto. A pesar de ser una empresa sin tienda
          fisica, contamos con colaboradores alrededor de los países en
          los que estamos disponibles.
        </p>
        <p class="px-3">
          -El tiempo de entrega dependerá del país y de la ciudad en la
          que resides. El tiempo aproximado de entrega en las Capitales de
          los países en los que estamos es de 45 minutos, dependiendo de
          la hora y lugar.
        </p>
        <p class="px-3">
          -Ahora bien, no tenemos restricciones al momento de hacer
          entregas fuera de las capitales. El tiempo de entrega varía
          entre 1 a 3 horas, dependiendo del lugar y horario en el que se
          haga la orden.
        </p>
        <p class="px-3">
          -El monto por compra es de $2 en las capitales y ciudades
          aledañas, y el monto por entrega al resto de ciudades es de $4.
        </p>
        <div class="d-flex flex-row justify-content-center mb-3">
          <img src="/images/repartidor.png" alt="..." width="500" height="350" />
        </div>
      </article>
    </div>
  </section>
    <section class="mt-5 mb-5">
      <div class="container">
        <div class="card">
              <div class="d-flex flex-row justify-content-between align-items-center py-5">
                <img src="/images/Vacuna_Covid.jpg" alt="" width="30%" height="10%" class="mx-5">
                <p class="mx-5 fs-3"> <b>¿Quieres vacunarte?</b> Recuerda que la vacunación es una responsabilidad social...
                  YourLifeWithUs te aconseja dirigirte con las autoridades sanitarias de tu región para que puedas
                  hacerte de la vacuna contra el Covid-19. Para <a href="https://yomevacuno.gob.gt">Guatemala</a>, <a href="https://coronavirus.gob.mx">México</a>, 
                  <a href="https://www.salud.gob.sv">El Salvador</a> y <a href="https://www.ccss.sa.cr/web/coronavirus/vacunacion">Costa Rica</a>.
                </p>
              </div>
        </div>
      </div>
    </section>
    </main>
</section>
    `,
});