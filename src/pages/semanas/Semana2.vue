<template>
  <div>
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

          <q-tab name="grammar" label="Gramatica y Vocabulario" />
          <q-tab name="pronunciacion" label="Pronunciacion" />
          <q-tab name="ejercicios" label="Ejercicios" />

        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="grammar">
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">PREGUNTAS DE INTERROGACION FRECUENTES</div>
              </q-card-section>
              <q-card-section>
                <li v-for="(item,index) in saludos" :key="index" style="list-style:none">{{item}}</li>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <div class="text-h6">Sistema de sufijos</div>
              </q-card-section>
              <q-card-section>
                <div class="text-h7">Se agrega el sufijo "-SA" al final de los Pronombres interrogativos</div>
                <li v-for="(item,index) in despedidas" :key="index" style="list-style:none">{{item}}</li>
              </q-card-section>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="pronunciacion">
            <chat></chat>
          </q-tab-panel>

          <q-tab-panel name="ejercicios">
            <ejercicio></ejercicio>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
// import vueFlashcard from "vue-flashcard";
// import cards from "components/cards.vue";
// import lista from "components/lista_sound.vue";
import ejercicio from "pages/juegos/EjercicioSemana2.vue";
import chat from "components/questionchat.vue";

export default {
    components: { chat,ejercicio },
  name: "PageIndex",
  //components: { cards, lista },
  data() {
    return {
       tab: "grammar",
      // TextoBuscado: "",
      // domesticos
      saludos:[
       "¿Cuál es tu nombre?: ¿Kuna sutinïtasa?",
       "¿Cuál es tu nombre?: ¿Kunas sutimaxa?",
      //  "¿Que es tu nombre?: ¿Kunasa sutinïtasa?",
       "¿Qué es eso? : ¿Akaxa kunasa?",
       "¿Tú quién eres?: ¿jumaxa khiïtasa?",
       "¿Qué es esto? : ¿ukaxa kunasa?",
       "¿Qué es aquello?: ¿Khayaxa kunasa?",
       "¿Tú dónde vives? :¿Jumaxa kawkhansa utjta?",
       "¿De dónde eres? : ¿kawkinkirïtasa?",

      ],
      despedidas:[
       "kuna : Qué (sa)",
       "kawki: Dónde (sa)",
       "Khithi: Quién (sa)",
       "Kunjama: Cómo (sa)",
       "Qawqha: Cuánto (sa)",
       "Kunapacha: Cuándo (sa)",
      ],
    };
  }
};
</script>
<style>
.contenedor {
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
.contenedor > div {
  /* display: block; */
  /* background: chartreuse; */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  /* grid-area: card; */
}
.contenedor .titulo {
  /* grid-column: 2/4; */
  /* grid-row: 1/2; */
  grid-area: titulo;
  font-size: 5em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  .contenedor .titulo {
    font-size: 4.5em;
  }
  .contenedor {
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(5, auto); */
    grid-template-areas: " card card card ";
  }
  .contenedor > div:last-child {
    grid-column: 2/3;
  }
}
@media screen and (max-width: 768px) {
  .contenedor .titulo {
    font-size: 4em;
  }
  .contenedor {
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(6, auto); */
    grid-template-areas: " card card ";
  }
}
@media screen and (max-width: 624px) {
  .container .card .content {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 480px) {
  .container .card .content {
    font-size: 1em;
  }
  .contenedor .titulo {
    font-size: 3.7em;
  }
  .contenedor {
    grid-template-columns: 1fr;
    /* grid-template-rows: repeat(11, auto); */
    grid-template-areas: "card";
  }
  .contenedor > div:last-child {
    grid-column: 1/2;
  }
}
</style>
