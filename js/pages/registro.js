import CLIENT from "";
import STORAGE from "../utils/storage.js";

export default Vue.component("Registro", {

  data: function () {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/"); 
    },
    DoSingnUp: async function () {
      let vm = this;
      try {
        const response = await CLIENT.post(
          "",
          {
            email: this.email,
            username: this.username,
            password: this.password,
          }
        );
        STORAGE.push("token", response.token);
        vm.$router.push("/");
      } catch (e) {
        console.warn(e);
        alert("No se ha podido registrar su cuenta");
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

                        <div class="col-12 d-flex justify-content-center mt-4 mb-5">
                          <button class="btn btn-primary rounded-pill" type="submit" @click.prevent="DoSingUp"style="width: 300px;height: 150;">Registrarse</button>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
    `,
});
