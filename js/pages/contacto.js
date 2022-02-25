import CLIENT from "../api/client.js";
import STORAGE from "../storage.js";

export default Vue.component("Contacto", {
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
    <br>
        <div class="container mt-2  d-flex flex-column flex-md-row justify-content-center">
            <div class="col-12 col-lg-6" id="caja">
                <h3>CONTACTANOS</h3>
                <div class="d-flex mt-3">
                    <img src="../images/telefono.png" alt="..." width="80" height="80">
                    <h3 class="align-self-center mx-4">+502 12345678</h3>
                </div>

                <div class="d-flex mt-5">
                    <img src="../images/whatsapp.png" alt="..." width="60" height="60">
                    <h3 class="align-self-center mx-5">+502 12345678</h3>
                </div>

                <div class="d-flex mt-5">
                    <img src="../images/gmail-logo.png" alt="..." width="60" height="50">
                    <h3 class="align-self-center mx-5">example@email.com</h3>
                </div>

                <div class="d-flex mt-5">
                    <img src="../images/Facebook-Logo-Square-768x768.png" alt="..." width="60" height="60">
                    <h3 class="align-self-center mx-5">example@facebook.com</h3>
                </div>

                <div class="d-flex mt-5 mb-3">
                    <img src="../images/twitter.png" alt="..." width="60" height="60">
                    <h3 class="align-self-center mx-5">@example.com</h3>
                </div>

            </div>


            <!-- RESEÑAS Y COMENTARIOS -->
            <div class="col-12 col-lg-6 ">
                <h3>DANOS TU OPINION</h3>

                <div class="d-flex bg-light text-dark">

                    <form>

                        <fieldset>
                            <legend class="mx-2">Comentarios</legend>
                            <div class="d-flex flex-md-row flex-sm-col mb-2 mx-2">
                                <img src="/images/men/9.jpg" class="img-fluid rounded-circle" alt="..." width="50"
                                    height="50">
                                <p class="mb-2 mx-2">Dejanos tus comentarios acerca del servicio y experiencia con nosotros. ¡Eso nos ayuda a mejorar!
                                </p>
                            </div>


                            <div class="form-floating mx-2">
                                <textarea class="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Comentario</label>
                            </div>
                            <select name="" id="user_coment" class="mt-3 mx-2">
                                <option>Permitir comentar a los visitantes</option>
                                <option>Permitir comentar a los usuarios</option>
                            </select>

                            <button class="btn btn-outline-success mx-5" type="submit">Enviar</button>
                        </fieldset>
                    </form>
                </div>
                <br>
                <div class="d-flex">
                    <div class="d-flex mt-2 flex-column justify-content-center">
                        <h3>RESEÑAS</h3>
                        <img src="../images/grafica.png" alt="..." width="400" height="400">
                    </div>

                    <div class="d-flex flex-column justify-content-center mx-5">
                        <button class="btn btn-danger mt-5 mx-3 " type="submit"><i
                                class="bi bi-emoji-neutral fs-1"></i></button>
                        <button class="btn btn-warning mt-2 mx-3 bg-orange" type="submit"><i
                                class="bi bi-emoji-smile fs-1"></i></button>
                        <button class="btn btn-info mt-2 mx-3 bg-purple" type="submit"><i
                                class="bi bi-emoji-sunglasses fs-1"></i></i></button>
                        <button class="btn btn-secondary mt-2 mx-3 bg-green" type="submit"><i
                                class="bi bi-emoji-heart-eyes fs-1"></i></button>

                    </div>
                </div>

            </div>
    </section>
      `,
});