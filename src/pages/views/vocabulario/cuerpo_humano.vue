<template>
    <div>
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
              <q-tab name="cuerpo" label="Palabras comunes del cuerpo humano" />
            </q-tabs>
          </q-card >
        </div>
      </div>
      <lista :ObjetoFiltrado="objetos"></lista>
    </div>
  </template>
  
  <script>
 

  import objetos from "../../../vocabulario/cuerpo_humano.json";
  import lista from "components/lista_sound.vue";
  export default {
    name: "",
    components: { lista },
    data() {
      return {
        TextoBuscado: "",
        objetos,
        tab: 'cuerpo',
      };
    },
   
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
      top: 25%;
      /* left: 98%; */
    }
  </style>
  