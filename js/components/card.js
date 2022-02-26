import STORAGE from "../storage.js";
export default Vue.component("card", {
  props: ["product"],
  data: function () {
    return {
      productData: this.product,
    };
  },
  methods: {
    goProducto() {
      this.$router.push("/producto");
    },
  },
  mounted() {},
  created: function () {
  },
  template: `
<div class="col">
                      <div class="card" style="height:450px;">
                        <img
                          class="card-img-top" v-bind:src="this.product.product_pict" alt="producto" style="max-height:180px;">
                            <div class="card-body">
                                <h4 id="name" class="fw-folder text-center">
                                {{ this.product.name }}
                                </h4>
                                <span id="identificador">Código: {{ this.product.id }}</span>
                                <br>
                                <span id="price">$ {{ this.product.price }}</span>
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
    `,
});
