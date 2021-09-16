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
              <q-tab name="palabras" label="Palabras Comunes" />
            </q-tabs>
          </q-card >
        </div>
      </div>
      <lista class="q-mt-md" :ObjetoFiltrado="objetos"></lista>
    </div>
  </template>
  
  <script>

  import lista from "components/lista_sound.vue";
  import objetos from "../../../vocabulario/palabras_comunes.json";
  export default {
    name: "",
    components: { lista },
    data() {
      return {
        TextoBuscado: "",
        tab:"palabras",
        objetos
      };
    },
  
  };
  </script>
  <style></style>
  