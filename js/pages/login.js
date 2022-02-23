import CLIENT from "";
import STORAGE from "../storage.js";

export default Vue.component("InicioSesion", {

  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    DoLogin: async function () {
      let vm = this;
      try {
        const response = await CLIENT.post("", {
          username: vm.username,
          password: vm.password,
        });
        STORAGE.set("token", response.token);
        vm.$router.push("inicio");
      } catch (e) {
        console.warn(e);
        alert("Error al iniciar sesión, intenta de nuevo");
      }
    },
    goRegister() {
      this.$router.push("registro");
    },
  },
  created: function () {
    const is_logged = !(STORAGE.get("token") == null);
    if (is_logged) {
      this.$router.push("inicio");
    }
  },
  template: `
    <div class="row" >

 <div class="container border my-5 py-5 w-50 pb-5">
        <div>
            <div class="text-center row col-12 mt-5">
                <h1 class="mb-3"><strong>¡Bienvenido(a)!</strong></h1>
                <p> Gracias por elegirnos</p>
            </div>
        </div>
        <div class="container mt-5">
            <div class="d-flex flex-row justify-content-center">
                <form>
                    <input type="email" class="form-control mb-3" id="username" v-model="username" placeholder="@mail.com"
                        aria-describedby="emailHelp" style="width: 500px;" required>
                    <input type="password" class="form-control mb-3" id="password" v-model="password" placeholder="Contraseña" required>
                    <a href="#">                    
                        <p class="form-text">¿Olvidaste tu contraseña?</p>
                    </a>
                    <button
                        type="submit"
                        class="my-4 py-3 btn btn-primary fw-bold col-12"
                        @click.prevent="DoLogin"
                    >
                        INICIAR SESION
                    </button>
                    <hr>
                    <div class="form-text">Al registrame acepto los terminos y condiciones del servicio.</div>
                    <br>
                    <br>
                    <br>
                    <div class="col-12 text-center">
                        ¿Aun no tienes una cuenta?
                        </br>
                        <a href="#" @click.prevent="goRegister" class="ms-2 text-dark fw-bold">REGÍSTRATE AHORA</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `,
});
