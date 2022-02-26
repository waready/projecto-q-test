<template>
    <div>
      <div>
        <div class="row justify-between">
          <h2 class="q-ma-none q-mb-md">Tiempo</h2>
          <!-- <button @click="buscar()">buscar</button> -->
        </div>
      </div>
      <lista :ObjetoFiltrado="TextoFiltrado"></lista>
    </div>
  </template>

  <script>
  // import vueFlashcard from "vue-flashcard";
  import lista from "components/lista_sound.vue";
  import objetos from "../../vocabulario/tiempo.json";
  export default {
    name: "",
    components: { lista },
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
