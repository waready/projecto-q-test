<template >
  <div>
    <div class="">
      <div class="q-gutter-y-md">
        <q-card>
          <q-tabs
            v-model="tab"
            dense 
            inline-label
            outside-arrows
            mobile-arrows
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="domesticos" label="Animales domesticos" />
            <q-tab name="silvestres" label="Animales Silvestres" />
            <q-tab name="insectos" label="Insectos" />
            <q-tab name="pez-aves" label="Peces y Aves" />
            <q-tab name="palabras" label="Palabras de animales" />
          </q-tabs>
  
          <q-separator />
  
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="domesticos">
              <div class="text-h6">Animales domesticos</div>
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
              <cards :ObjetoFiltrado="TextoFiltrado"></cards>
            </q-tab-panel>
  
            <q-tab-panel name="silvestres">
              <div class="text-h6">Animales Silvestres</div>
              <cards :ObjetoFiltrado="silvestres"></cards>
            </q-tab-panel>
  
            <q-tab-panel name="insectos">
              <div class="text-h6">Insectos</div>
              <cards :ObjetoFiltrado="insectos"></cards>
            </q-tab-panel>

            <q-tab-panel name="pez-aves">
              <div class="text-h6">Peces</div>
              <cards :ObjetoFiltrado="pecesAves.Peces"></cards>
              <q-separator color="deep-orange" inset class="q-ma-md"/>

              <div class="text-h6">Aves</div>
              <cards :ObjetoFiltrado="pecesAves.Aves"></cards>
            </q-tab-panel>
            
            <q-tab-panel name="palabras">
              <div class="text-h6">Palabras acerca de animales</div>
              <cards :ObjetoFiltrado="palabrasAnimal"></cards>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
<!-- ============================================================== -->
    </div>
    <div>
      <div class="row justify-between">
        <h2 class="q-ma-none q-mb-md">Saminaka / Colores</h2>
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
    <!-- <cards :ObjetoFiltrado="TextoFiltrado"></cards> -->
    <!-- <cards :ObjetoFiltrado="colores"></cards> -->
    <!-- <cards :ObjetoFiltrado="silvestres"></cards> -->
  </div>
  
</template>

<script>
// import vueFlashcard from "vue-flashcard";
import cards from "components/cards.vue";
import domesticos from "../vocabulario/animal_domestico.json";
// import domesticos from "../vocabulario/arbustos_arboles.json";
import colores from "../vocabulario/colores.json";
import insectos from "../vocabulario/animal_insectos.json";
import silvestres from "../vocabulario/animal_silvestre.json";
import pecesAves from "../vocabulario/peces_pajaros.json";
import palabrasAnimal from "../vocabulario/animales.json";

export default {
  name: "PageIndex",
  components: { cards },
  data() {
    return {
      tab: 'domesticos',
      TextoBuscado: "",
      domesticos,
      silvestres,
      insectos,
<<<<<<< HEAD
      silvestres,
     
=======
      pecesAves,
      palabrasAnimal
>>>>>>> e299aef0790c7d31d79b527e8860dfb9d22f4edb
    };
  },
  computed: {
    TextoFiltrado() {
      // var castellano= objeto.nombre.toUpperCase()
      // var aymara= objeto.name.toUpperCase()
      var buscado = this.TextoBuscado.toUpperCase();
      return this.domesticos.filter(objeto => {
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
