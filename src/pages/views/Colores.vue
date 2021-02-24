<template>
  <q-page class="">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <div class="items-start q-gutter-md">
      <!-- <vue-flashcard 
          front="Primeras palabras" 
          back="first words"
          headerFront="Español"
          footerFront="traduccion"
          :colorFront="back"
          colorBack="back"
          headerBack="Aymara"
          footerBack="traduccion"
         
          imgFront="data:image/jpeg;base64,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"
          >
        </vue-flashcard> -->

      <div>
        <div class="row justify-between">
          <h2 class="q-ma-none q-mb-md">Saminaka / Colores</h2>
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

        <div class="row q-gutter-lg justify-center">
          <q-card
            class="my-card back inset-shadow-1 text-white col-md-2 col-sm-5 col-xs-11"
            v-for="color in ColorFiltrado"
            :key="color.id"
          >
            <q-card-section>
              <div class="text-h6 text-center">{{ color.name }}</div>
            </q-card-section>
            <q-card-section>
              <!-- `statics/images/shapes/${item}.png` -->
              <q-img :src="'statics/img-colores/' + color.id + '.jpg'" />
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-center text-black text-weight-bold">
                {{ color.nombre }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import vueFlashcard from "vue-flashcard";
export default {
  name: "PageIndex",
  components: { vueFlashcard },
  data() {
    return {
      tam: 5,
      TextoBuscado: "",
      colores: [
        { id: 3, name: "Janq’u", nombre: "blanco" },
        { id: 4, name: "Ch’umpi", nombre: "café" },
        { id: 5, name: "Ch’ixi", nombre: "gris" },
        { id: 6, name: "Wila", nombre: "rojo" },
        { id: 7, name: "Ch’uxña", nombre: "verde" },
        { id: 8, name: "Arumi", nombre: "anaranjado" },
        { id: 9, name: "Janq’u larama", nombre: "celeste" },
        { id: 10, name: "Janq’u wila", nombre: "rosado" },
        { id: 11, name: "Ch’ara, ch’iyara", nombre: "negro" },
        { id: 12, name: "Uqi", nombre: "plomo" },
        { id: 13, name: "Paqu", nombre: "dorado, rubio" },
        { id: 14, name: "Larama", nombre: "azul" },
        { id: 15, name: "Q’illu", nombre: "amarillo" },
        { id: 16, name: "Sajuma, juli", nombre: "violeta" },
        { id: 17, name: "Janq’u ch’uxña", nombre: "verde claro" },
        { id: 18, name: "Ch’ara ch’uxña", nombre: "verde oscuro " }
      ]
    };
  },
  computed: {
    ColorFiltrado() {
      // var castellano= color.nombre.toUpperCase()
      // var aymara= color.name.toUpperCase()
      var buscado = this.TextoBuscado.toUpperCase();
      return this.colores.filter(color => {
        return (
          color.nombre.toUpperCase().includes(buscado) ||
          color.name.toUpperCase().includes(buscado)
        );
      });
    }
  }
};
</script>
<style>
.back {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    120deg,
    rgba(2, 0, 36, 1) 15%,
    rgba(52, 167, 121, 1) 55%,
    rgba(0, 246, 255, 1) 100%
  );
}
</style>
