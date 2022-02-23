export default Vue.component("buscador", {
    props: ["onKeyup"],
    template: `
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="buscador"
              @keyup="onKeyup"
            />
          </form>
      `,
  });
  