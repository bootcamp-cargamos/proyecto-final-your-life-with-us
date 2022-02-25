import CLIENT from "../api/client.js";
import STORAGE from "../storage.js";

export default Vue.component("register-page", {
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
                  <label for="username" class="form-label mt-3">Email</label>
                   <input type="text" class="form-control" id="username" v-model="email" placeholder="example@mail.com"
                       aria-describedby="emailHelp" style="width: 500px;" required>
                   <label for="password" class="form-label mt-3">Contraseña</label>
                   <input type="password" class="form-control mb-3" id="password" v-model="password" placeholder="*****" required>

                   <div class="col-12 d-flex justify-content-center mt-4 mb-5">
                          <button class="btn btn-primary rounded-pill" type="submit" @click.prevent="DoSingnUp"style="width: 300px;height: 150;">Registrarse</button>
                        </div>
                   <br>
                   <br>
               </form>
           </div>
       </div>
       </div>
   </div>
    `,
});

