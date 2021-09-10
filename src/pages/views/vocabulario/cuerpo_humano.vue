<template>
    <div>
      <div>
        <div class="row justify-between">
          <h2 class="q-ma-none q-mb-md">Palabras comunes del cuerpo humano</h2>
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
        <div class="row">
          
          <div class="col-4">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 bg-orange-1 text-orange text-center q-pa-sm border-naranja">
                <q-btn round color="orange" icon="volume_up" />
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12 bg-indigo-1 text-center border q-pa-md">lore</div>
              <div class="col-md-6 col-sm-6 col-xs-12 bg-blue-1 border text-center q-pa-md">estas</div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 bg-orange-1 text-orange text-center q-pa-sm border-naranja">
                <q-btn round color="orange" icon="volume_up" />
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12 bg-indigo-1 text-center border q-pa-md">lore</div>
              <div class="col-md-6 col-sm-6 col-xs-12 bg-blue-1 border text-center q-pa-md">estas</div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 bg-orange-1 text-orange text-center q-pa-sm border-naranja">
                <q-btn round color="orange" icon="volume_up" />
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12 bg-indigo-1 text-center border q-pa-md">lore</div>
              <div class="col-md-6 col-sm-6 col-xs-12 bg-blue-1 border text-center q-pa-md">estas</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12 bg-orange-1 text-orange text-center q-pa-sm border-naranja">
            <q-btn round color="orange" icon="volume_up" />
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12 bg-indigo-1 text-center border q-pa-md">lore</div>
          <div class="col-md-6 col-sm-6 col-xs-12 bg-blue-1 border text-center q-pa-md">estas</div>
        </div>
      </div>

      <div class="row position_rel">
        <div class="col-12 bg-indigo-1 text-center border q-pa-md">
          <div class="row justify-end">
            <q-btn class="position_btn" round color="orange" icon="volume_up" />
          </div>
          lore
        </div>
        <div class="col-12 bg-blue-1 border text-center q-pa-md">estas</div>
      </div>

      <div class="row position_rel">
        <div class="col-12 bg-indigo text-center text-white border q-pa-md">
          <div class="row justify-end">
            <q-btn class="position_btn" round color="orange" icon="volume_up" />
          </div>
          lore
        </div>
        <div class="col-12 bg-secondary border text-center text-white q-pa-md">estas</div>
      </div>

      <cards :ObjetoFiltrado="TextoFiltrado"></cards>
    </div>
  </template>
  
  <script>
  // import vueFlashcard from "vue-flashcard";
  import cards from "components/cards.vue";
  import objetos from "../../../vocabulario/cuerpo_humano.json";
  export default {
    name: "",
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
  <style>
    .border{
      border: 1px blue ridge;
      /* position: relative; */
    }
    .border-naranja{
      border-top: 1px orange ridge;
      border-left: 1px orange ridge;
      border-right: 1px orange ridge;
      border-radius: 5px 5px 0px 0px;
    }
    .position_rel{
      position: relative;
    }
    .position_btn{
      position: absolute;
      margin: 0;
      top: 30px;
      /* left: 98%; */
    }
  </style>
  