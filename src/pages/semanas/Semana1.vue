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
                <div class="text-h6">LOS SALUDOS: ARUNTASIÑA</div>
              </q-card-section>
              <q-card-section>
                <li v-for="(item,index) in saludos" :key="index" style="list-style:none">{{item}}</li>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <div class="text-h6">DESPEDIDAS: Sarxañ Arunaka</div>
              </q-card-section>
              <q-card-section>
                <li v-for="(item,index) in despedidas" :key="index" style="list-style:none">{{item}}</li>
              </q-card-section>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="pronunciacion">
            <chat></chat>
          </q-tab-panel>

          <q-tab-panel name="ejercicios">
            <div class="text-h6">Peces</div>

            <q-separator color="deep-orange" inset class="q-ma-md" />

            <div class="text-h6">Aves</div>
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

import chat from "components/chat.vue";
export default {
    components: { chat },
  name: "PageIndex",
  //components: { cards, lista },
  data() {
    return {
       tab: "domesticos",
      // TextoBuscado: "",
      // domesticos
      saludos:[
            "Kamisaki: Hola",
            "Aski: Bien - Bueno",
            "Uru:  dia",
            "Jayp'u: Tarde",
            "Aruma:  Noche",
            "Chiqa Aruma: Medianoche",
            "Alwa: Temprano",
            "Willjta: Alva",
            "Qhantati: Madrugada",
            "Jilata: Hermano",
            "Jilaku: Vocativo de tratamiento cortés a los varones",
            ,"------",
            "Aski urupan,...",
            "Aski urukipan,...",
            "Aski urukipanay,...",
            "Son las frases que interpretando se traduce como BUENOS DÍAS en los libros de aymara, literalmente vienen a ser:",
            "Aski urupan,... = QUE SEA BUEN DÍA,...",
            "Aski urukipan,... = QUE SEA BUEN DÍA NO MÁS,...",
            "Aski urukipanay,... = QUE SEA BUEN DÍA NO MÁS PUES,...",
            "------",
            "La respuesta para estos saludos es la misma frase que le dicen a uno.",
            "------",
            "Ejemplos:",
            "Traducimos",
            "Aski arumakipan jilata:",
            "Buenas noches Hermano",
            "Aski arumakipanay jilaku:",
            "Buenas noches hermanito",
"------",
            "Aski jayp'ukipan Jilata Juan:",
            "Buenas tardes hermano Juan",
            "Aski jayp'ukipanay Kullaka Rosa:",
            "Buenas tardes hermana Rosa",
"------",
            "Aski urukipan Jilata Juan:",
            "Buenas dias hermano Juan",
            "Aski urukipanay Rosa:",
            "Buenas dias Rosita",


      ],
      despedidas:[
            "DESPEDIDAS: Sarxañ Arunaka",
            "Jichhuru: Hoy",
            "Qharuru: Mañana",
            "Wasuru: Ayer",
            "Jurpuru: Pasado Mañana",
            "Jikisiña: Encontrarse",
            "Jayp'u: Tarde",
"------",
            "A Continuacion algunos ejemplos",
            "Qharurkama wawanaka:  Hasta mañana niños",
            "Qharuru: mañana",
            "Kama: Hasta",
            "Wawa: niño",
            "Naka: pluralizador",
"------",
            "Jayp'ukama Jila:  Hasta la tarde hermano",
            "Jayp'u: tarde",
            "Kama: Hasta",
            "Jila: Hermano",
"------",
            "Jurpurkama awicha: Hasta pasado mañana abuela",
            "Jurpuru: Pasado Mañana",
            "Kama: Hasta",
            "Awicha: Abuela, anciana",
"------",
            "-Jikisiñkama Pedro:  Hasta pronto Pedro",
            "-Jikisiñkamay: Hasta pronto",
            "Jikisiña: Encuentro no especificado",
            "Kama: Hasta",
"------",
            "Marakama: Hasta el año",
            "Mara: año",
            "Kama: hasta",
"------",
            "Sarxä: Me voy",
            "Sarxañani: Vámonos",
            "Sarxapxam: Váyanse",
      ]
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
