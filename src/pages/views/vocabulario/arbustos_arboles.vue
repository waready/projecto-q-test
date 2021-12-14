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
              <q-tab name="plantas" label="Arboles y arbustos" />
            </q-tabs>
          </q-card >
        </div>
      </div>
      <cards class="q-mt-md" :ObjetoFiltrado="objetos"></cards>
    </div>
  </template>
  
  <script>
  // import vueFlashcard from "vue-flashcard";
  import cards from "components/cards.vue";
  import objetos from "../../../vocabulario/arbustos_arboles.json";
  export default {
    name: "",
    components: { cards },
    data() {
      return {
        TextoBuscado: "",
        tab: 'plantas',
        objetos
      };
    },
  };
  </script>
  <style></style>
  