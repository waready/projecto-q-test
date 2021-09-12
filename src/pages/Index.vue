<template >
  <div>
    <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
  </div>
</template>

<script>
// import vueFlashcard from "vue-flashcard";
import cards from "components/cards.vue";
import objetos from "../vocabulario/animal_domestico.json";
// import objetos from "../vocabulario/arbustos_arboles.json";
// import colores from "../vocabulario/colores.json";
import insectos from "../vocabulario/animal_insectos.json";
import silvestres from "../vocabulario/animal_silvestre.json";
export default {
  name: "PageIndex",
  components: { cards },
  data() {
    return {
      TextoBuscado: "",
      objetos,
      insectos,
      silvestres,
     
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
