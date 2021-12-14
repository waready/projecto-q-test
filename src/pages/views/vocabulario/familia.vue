<template>
    <div>
      <div class="row justify-center q-mb-md">
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
            <q-tab name="familia" label="Palabras de la familia y personas" />
          </q-tabs>
        </q-card >
      </div>
      <!-- <cards :ObjetoFiltrado="TextoFiltrado"></cards> -->
      <lista :ObjetoFiltrado="objetos"></lista>
    </div>
  </template>
  
  <script>
  // import vueFlashcard from "vue-flashcard";
  import cards from "components/cards.vue";
  import lista from "components/lista_sound.vue";
  import objetos from "../../../vocabulario/familia.json";
  export default {
    name: "",
    components: { cards, lista },
    data() {
      return {
        TextoBuscado: "",
        objetos,
        tab: 'familia'
      };
    },
  };
  </script>
  <style></style>
  