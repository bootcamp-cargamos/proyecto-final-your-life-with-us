import CLIENT from "../api/client.js";
import STORAGE from "../storage.js";

export default Vue.component("register-page", {
  data:/* {
    messaje: "Crear cuenta"
  }, */
    function () {
      return {
        email: '',
        username: '',
        password: '',
      };
    },
  methods: {
    goLogin() {
      this.$router.push("/"); //retorna al login en caso de no registrarse
    },
    DoSingnUp: async function () {
      let vm = this;
      try {
        //Enviamos la petición Via POST
        const response = await CLIENT.post('http://silabuz-api-project.herokuapp.com/authentication/sign-up/', {
          email: this.email,
          username: this.username,
          password: this.password,

        });
        // Almacenamos el token
        STORAGE.push("token", response.token);
        // Redirigimos al usuario al home
        vm.$router.push("/");
      } catch (e) {
        //En caso haya un error en el inicio de sesión
        // Notificamos por consola el incidente
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
<<<<<<< Updated upstream
        <section class="py-2 me-3">
            <div class="container">
              <div class="card mb-3">
                <div class="text-center mb-5">
                    <p class="h3 fw-bold text-center mt-5 m">Registrate</p>
                    <p>Forma parte de YourLifeWithUs. Al registrarte podrás hacer compras de los mejores productos a los mejores precios.</p>
                </div>
                <div class="row g-0 d-flex h-100 flex-column align-items-center justify-content-center">
                  <div class="col-md-4">
                    <form class="row g-3">
                        <div class="col-md-4" style="width: 1000px;">
                          <label for="name" class="form-label">Nombres</label>
                          <input type="text" class="form-control" id="name" v-model="username" value="Peter B." required>
                        <div class="col-md-4 mt-2" style="width: 430px;">
                            <label for="username">Email</label>
                            <input type="email" class="form-control" id="username" v-model="email" placeholder="name@example.com" required>
                        </div>
                        <div class="col-md-6 mt-2" style="width: 430px;">
                          <label for="password">Contraseña</label>
                          <input type="password" class="form-control" id="password" v-model="password" placeholder="Contraseña" required>
                        </div>
=======
    <div class="row" >
      <div class="container border my-5 py-5 w-50 pb-5">
          <div>
           <div class="text-center row col-12 mt-5">
              <h1 class="mb-3"><strong>¡Registrate!</strong></h1>
              <p>Forma parte de YourLifeWithUs. Al registrarte podrás hacer compras de los mejores productos a los mejores precios.</p>
           </div>
          </div>
          <div class="container mt-5">
           <div class="d-flex flex-row justify-content-center">
               <form>
                  <label for="name" class="form-label">Nombres</label>
                   <input type="text" class="form-control" id="name" v-model="username" placeholder="Peter Bronson"
                       aria-describedby="emailHelp" style="width: 500px;" required>
                  <label for="username" class="form-label">Email</label>
                   <input type="text" class="form-control" id="username" v-model="email" placeholder="example@mail.com"
                       aria-describedby="emailHelp" style="width: 500px;" required>
                   <label for="password">Contraseña</label>
                   <input type="password" class="form-control mb-3" id="password" v-model="password" required>
>>>>>>> Stashed changes

                   <div class="col-12 d-flex justify-content-center mt-4 mb-5">
                          <button class="btn btn-primary rounded-pill" type="submit" @click.prevent="DoSingnUp"style="width: 300px;height: 150;">Registrarse</button>
                        </div>
<<<<<<< Updated upstream
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="px-5 mx-5">
          </div>
=======
                   <br>
                   <br>
               </form>
           </div>
       </div>
       </div>
   </div>
>>>>>>> Stashed changes
    `,
});
