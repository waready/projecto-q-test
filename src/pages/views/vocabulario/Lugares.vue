<template>
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
            <q-tab name="naturaleza" label="Lugares naturales" />
            <q-tab name="creados" label="Lugares creados por el hombre" />
          </q-tabs>
  
          <q-separator />
  
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="naturaleza">
              <div class="text-h6">Lugares de la naturaleza</div>
              <cards :ObjetoFiltrado="lugares.Lugares_naturaleza"></cards>
            </q-tab-panel>
  
            <q-tab-panel name="creados">
              <div class="text-h6">Lugares creados por el hombre</div>
              <cards :ObjetoFiltrado="lugares.Lugares_creados"></cards>
            </q-tab-panel>

          </q-tab-panels>
        </q-card>
      </div>
<!-- ============================================================== -->
    </div>
  </div>
  
</template>

<script>

import cards from "components/cards.vue";
import lista from "components/lista_sound.vue";
import lugares from "../../../vocabulario/lugares.json";


export default {
  name: "",
  components: { cards, lista },
  data() {
    return {
      tab: 'naturaleza',
      TextoBuscado: "",
      lugares
    };
  },
  
};
</script>
<style>
  .contenedor{
    display: grid;
    /* border: solid black 10px; */
    margin: auto;
    /* font-size: 50px; */
    /* line-height: 50px; */
    /* text-align: center; */
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-rows: repeat(3, auto); */
    grid-gap: 20px;
    /* grid-auto-flow: dense; */
    grid-template-areas: "card card card card card";
  }
  .contenedor>div{
    /* display: block; */
    /* background: chartreuse; */
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    /* grid-area: card; */
  }
  .contenedor .titulo{
    /* grid-column: 2/4; */
    /* grid-row: 1/2; */
    grid-area: titulo;
    font-size: 5em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width:1024px){
    .contenedor .titulo{
      font-size: 4.5em;
    }
    .contenedor {
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-rows: repeat(5, auto); */
      grid-template-areas: " card card card ";
      
    }
    .contenedor>div:last-child{
      grid-column: 2/3;
    }
  }
  @media screen and (max-width:768px){
    .contenedor .titulo{
      font-size: 4em;
    }
    .contenedor{
      grid-template-columns: repeat(2, 1fr);
      /* grid-template-rows: repeat(6, auto); */
      grid-template-areas: " card card ";
    }
  }
  @media screen and (max-width:624px){
    .container .card .content{
    font-size: 0.8em;
  }
  }
  @media screen and (max-width:480px){
    .container .card .content{
    font-size: 1em;
  }
    .contenedor .titulo{
      font-size: 3.7em;
    }
    .contenedor{
      grid-template-columns: 1fr;
      /* grid-template-rows: repeat(11, auto); */
      grid-template-areas: "card";
    }
    .contenedor>div:last-child{
      grid-column: 1/2;
    }
  }
</style>
