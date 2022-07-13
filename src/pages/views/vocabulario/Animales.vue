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
            <q-tab name="domesticos" label="Animales domésticos" />
            <q-tab name="silvestres" label="Animales Silvestres" />
            <q-tab name="insectos" label="Insectos" />
            <q-tab name="pez-aves" label="Peces y Aves" />
            <q-tab name="palabras" label="Palabras de animales" />
          </q-tabs>
  
          <q-separator />
  
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="domesticos">
              <div class="text-h6">Animales domesticos</div>
              <cards :ObjetoFiltrado="domesticos.Domesticos"></cards>
            </q-tab-panel>
  
            <q-tab-panel name="silvestres">
              <div class="text-h6">Animales Silvestres</div>
              <cards :ObjetoFiltrado="domesticos.silvestres"></cards>
            </q-tab-panel>
  
            <q-tab-panel name="insectos">
              <div class="text-h6">Insectos</div>
              <cards :ObjetoFiltrado="domesticos.insectos"></cards>
            </q-tab-panel>

            <q-tab-panel name="pez-aves">
              <div class="text-h6">Peces</div>
              <cards :ObjetoFiltrado="domesticos.Peces"></cards>
              <q-separator color="deep-orange" inset class="q-ma-md"/>

              <div class="text-h6">Aves</div>
              <cards :ObjetoFiltrado="domesticos.Aves"></cards>
            </q-tab-panel>
            
            <q-tab-panel name="palabras">
              <div class="text-h6">Palabras acerca de animales</div>
              <!-- <cards :ObjetoFiltrado="palabrasAnimal"></cards> -->
              <lista :ObjetoFiltrado="domesticos.animales"></lista>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>

  </div>
  
</template>

<script>
// import vueFlashcard from "vue-flashcard";
import cards from "components/cards.vue";
import lista from "components/lista_sound.vue";
import domesticos from "../../../vocabulario/animal_domestico.json";



export default {
  name: "PageIndex",
  components: { cards, lista },
  data() {
    return {
      tab: 'domesticos',
      TextoBuscado: "",
      domesticos,
    
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
