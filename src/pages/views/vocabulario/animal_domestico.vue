<template>
    <div>
      <div>
        <div class="row justify-between">
          <h2 class="q-ma-none q-mb-md">Animales Domesticos</h2>
          <!-- <button @click="buscar()">buscar</button> -->
          <q-input
            outlined
            v-model="TextoBuscado"
            label="Buscar palabra"
            class="q-mb-md col-md-3 col-sm-12 col-xs-12"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
      <cards :ObjetoFiltrado="TextoFiltrado"></cards>
    </div>
  </template>
  
  <script>
  // import vueFlashcard from "vue-flashcard";
  import cards from "components/cards.vue";
  import objetos from "../../../vocabulario/animal_domestico.json";
  export default {
    name: "AnimalDomestico",
    components: { cards },
    data() {
      return {
        TextoBuscado: "",
        objetos
      };
    },
    computed: {
      TextoFiltrado() {
        // var castellano= objeto.nombre.toUpperCase()
        // var aymara= objeto.name.toUpperCase()
        var buscado = this.TextoBuscado.toUpperCase();
        return this.objetos.Domesticos.filter(objetos => {
          return (
            objetos.nombre.toUpperCase().includes(buscado) ||
            objetos.name.toUpperCase().includes(buscado)
          );
        });
      }
    }
  };
  </script>
  <style></style>
  