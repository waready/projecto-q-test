<template>
    <div>
      <div>
        <div class="row justify-center ">
          <q-card >
            <q-tabs
              v-model="tab"
              dense 
              inline-label
              outside-arrows
              mobile-arrows
              class="text-grey "
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="vegetales" label="Vegetales" />
            </q-tabs>
          </q-card >
        </div>
      </div>
      <cards class="q-mt-md" :ObjetoFiltrado="TextoFiltrado"></cards>
    </div>
  </template>
  
  <script>
  // import vueFlashcard from "vue-flashcard";
  import cards from "components/cards.vue";
  import objetos from "../../../vocabulario/vegetales.json";
  export default {
    name: "",
    components: { cards },
    data() {
      return {
        TextoBuscado: "",
        tab:"vegetales",
        objetos
      };
    },
    computed: {
      TextoFiltrado() {
        // var castellano= objeto.nombre.toUpperCase()
        // var aymara= objeto.name.toUpperCase()
        var buscado = this.TextoBuscado.toUpperCase();
        return this.objetos.filter(objeto => {
          return (
            objeto.nombre.toUpperCase().includes(buscado) ||
            objeto.name.toUpperCase().includes(buscado)
          );
        });
      }
    }
  };
  </script>
  <style></style>
  