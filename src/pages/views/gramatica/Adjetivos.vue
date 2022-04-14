<template>
     <div>
      <div>
        <div>
         <steeper :info="data" @obtener="recivir"></steeper>
        </div>


      </div>
    <template v-if="condition">
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
              <q-tab name="Adjetivos" label="Adjetivos" />
            </q-tabs>
          </q-card >
        </div>
      <lista class="q-mt-md" :ObjetoFiltrado="objetos"></lista>
    </template>
    </div>
  </template>

  <script>

  import lista from "components/lista_sound.vue";
  import steeper from "components/steeper.vue";
  import objetos from "../../../vocabulario/adjetivos.json";
  export default {
    name: "",
    components: { lista,steeper },
    data() {
      return {
        condition:false,
        TextoBuscado: "",
        tab:"Adjetivos",
        objetos,
        data:{
            titles:['EL ADJETIVO',
            'EJEMPLO','TIPOS DE ADJETIVOS'
            ],
            descripcion:"•	Los adjetivos y participios en aymara se deben anteponer al sustantivo y los adverbios al verbo. ",
            escritura: [
                'JANQ`U UTA',
                'JISK`A IMILLA',
                'JAYRA YUQALLA',

            ],
            traduccion:[
                'BLANCA CASA',
                'CHICA NIÑA',
                'FLOJO NIÑO',
            ],
            castellano:[
                'CASA BLANCA',
                'NIÑA CHICA',
                'NIÑO FLOJO',
            ]
        }
      };
    },
    methods:{
        recivir(data){
            this.condition = !this.condition;
        }
    }

  };
  </script>
  <style></style>
