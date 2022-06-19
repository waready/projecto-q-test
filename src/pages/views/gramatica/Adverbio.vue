<template>
     <div>
      <div>
        <div>
         <steeper :info="data" @obtener="recivir"></steeper>
        </div>


      </div>
    <template v-if="condition">
        <div class="">
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
              <q-tab name="tiempo" label="Tiempo" />
              <q-tab name="lugar" label="Lugar" />
              <q-tab name="cantidad" label="Cantidad" />
              <q-tab name="duda" label="Duda" />
              <q-tab name="afirmacion" label="AfirmaciÓn" />
              <q-tab name="negacion" label="NegaciÓn" />
              <q-tab name="modo" label="Modo" />

            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="tiempo">
              <div class="text-h6">Adverbios de tiempo</div>
              <lista :ObjetoFiltrado="objetos.Tiempo"></lista>
            </q-tab-panel>

            <q-tab-panel name="lugar">
              <div class="text-h6">Adverbios de lugar</div>
              <lista :ObjetoFiltrado="objetos.Lugar"></lista>
            </q-tab-panel>

            <q-tab-panel name="cantidad">
              <div class="text-h6">Adverbios de cantidad</div>
              <lista :ObjetoFiltrado="objetos.Cantidad"></lista>
            </q-tab-panel>

            <q-tab-panel name="duda">
              <div class="text-h6">Adverbios de duda</div>
              <lista :ObjetoFiltrado="objetos.Duda"></lista>
            </q-tab-panel>

            <q-tab-panel name="afirmacion">
              <div class="text-h6">Adverbios de afirmación</div>
              <lista :ObjetoFiltrado="objetos.Afirmación"></lista>
            </q-tab-panel>

            <q-tab-panel name="negacion">
              <div class="text-h6">Adverbios de negación</div>
              <lista :ObjetoFiltrado="objetos.Negación"></lista>
            </q-tab-panel>

            <q-tab-panel name="modo">
              <div class="text-h6">Adverbios de modo</div>
              <lista :ObjetoFiltrado="objetos.Modo"></lista>
            </q-tab-panel>

          </q-tab-panels>
          </q-card >
        </div>

      <!-- <lista class="q-mt-md" :ObjetoFiltrado="objetos.Tiempo"></lista> -->
    </template>
    </div>
  </template>

  <script>

  import lista from "components/lista_sound.vue";
  import steeper from "components/steeper_adverbios.vue";
  import objetos from "../../../vocabulario/adverbios.json";
  export default {
    name: "",
    components: { lista,steeper },
    data() {
      return {
        condition:false,
        TextoBuscado: "",
        tab:"tiempo",
        objetos,
        data:{
            titles:['EL ADVERBIO',
            'EJEMPLO','TIPOS DE ADVERBIOS'
            ],
            descripcion:"Los adverbios complementan a los verbos, a los adjetivos o incluso otros adverbios. Se utilizan para expresar lugar, cantidad, tiempo, modo, duda, afirmación, etc.",
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
