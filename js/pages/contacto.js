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
  <main>
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
        <div class="container mt-2  d-flex flex-column flex-md-row justify-content-center my-5 py-5">
            <div class="col-12 col-lg-6" id="caja">
                <h3>CONTACTANOS</h3>
                <div class="d-flex mt-5">
                    <img src="../images/whatsapp.png" alt="..." width="60" height="60">
                    <h3 class="align-self-center mx-5">+502 55350144</h3>
                </div>

                <div class="d-flex mt-5">
                    <img src="../images/gmail-logo.png" alt="..." width="60" height="50">
                    <h3 class="align-self-center mx-5">educaylwu@gmail.com</h3>
                </div>

                <div class="d-flex mt-5">
                    <a href="https://www.facebook.com/" class="link-dark text-decoration-none"><img src="../images/Facebook-Logo-Square-768x768.png" alt="..." width="60" height="60"></a>
                    <a href="https://www.facebook.com/" class="link-dark text-decoration-none"><h3 class="align-self-center mx-5">YourLifeWithUs</h3></a>
                </div>

                <div class="d-flex mt-5 mb-3">
                    <a href="https://twitter.com/" class="link-dark text-decoration-none"><img src="../images/twitter.png" alt="..." width="60" height="60"></a>
                    <a href="https://twitter.com/" class="link-dark text-decoration-none"><h3 class="align-self-center mx-5">@yourlifewithus_educa</h3></a>
                </div>

                <div class="d-flex mt-5 mb-3">
                  <a href="https://instagram.com/" class="link-dark text-decoration-none"><img src="../images/instagram.png" alt="..." width="60" height="60"></a>
                  <a href="https://instagram.com/" class="link-dark text-decoration-none"><h3 class="align-self-center mx-5">@yourlifewithus__edu</h3></a>
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
            </div>
    </section>
    <div>
    <h3 class="text-center">¡Encuentranos!</h3>
    <div class="container card my-5 h-100">
      <p class="px-3 pt-4">Nuestra tienda fisica se encuentra en el Centro comercial Eskala Roosevelt, local 2111.</p>
      <p class="px-3">¡Te esperamos! Nos encontramos en el segundo nivel.</p>
      <div class="d-flex justify-content-evenly align-items-center pb-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3384660649117!2d-90.5845770851724!3d14.636718480114569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a03fe38529ad%3A0x81d09e77a597d82!2sEskala%20Roosevelt!5e0!3m2!1ses-419!2sgt!4v1645828448008!5m2!1ses-419!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      <img src="/images/direccion.png" alt="comercial" width="600px" height="450px">
      </div>
    </div>
    </div>
    </main>
      `,
});