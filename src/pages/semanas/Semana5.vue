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
                <div class="text-h6">Sistema Silabico</div>
              </q-card-section>
              <q-card-section>
                <li v-for="(item,index) in saludos" :key="index" style="list-style:none">{{item}}</li>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <div class="text-h6">Familia</div>
              </q-card-section>
              <q-card-section>
                <familia/>
              </q-card-section>
              <q-separator inset />

              <q-card-section>
                <div class="text-h6">Alimentos</div>
              </q-card-section>
              <q-card-section>
                <alimentos/>
              </q-card-section>
              <q-separator inset />

              <q-card-section>
                <div class="text-h6">Vestido</div>
              </q-card-section>
              <q-card-section>
                <ropa/>
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
import familia from "../views/vocabulario/familia.vue";
import alimentos from "../views/vocabulario/vegetales.vue";
import ropa from "../views/vocabulario/ropa.vue";

import ejercicio from "pages/juegos/AhorcadoFinal.vue";

import chat from "components/semana5.vue";
export default {
    components: { chat, familia, alimentos,ropa,ejercicio },
  name: "PageIndex",
  //components: { cards, lista },
  data() {
    return {
       tab: "grammar",
      // TextoBuscado: "",
      // domesticos
      saludos:[
      "La sílaba aimara es una unidad sonora constituida por un núcleo con o sin márgenes. El núcleo o cresta silábica, por definición, es siempre una vocal; los márgenes, a su turno, los constituyen las consonantes. Se habla de sílaba libre cuando el núcleo no tiene margen postnuclear; y, en cambio, se habla de una sílaba cerrada o trabada, cuando registra margen postnuclear. Las siguientes configuraciones forman sílabas típicas del aimara (nótese que en los ejemplos, V simboliza al núcleo, C al margen, y el punto a la linde silábica):",
      "V [u.ma] ‘agua’",
      "VC [ir.pa] ‘canal’",
      "CV [qa.λu] ‘cría’",
      "CVC [mar.ka] ‘pueblo’",
      "Teniendo en cuenta los tipos de sílabas registrados, la fórmula general de la estructura silábica de la lengua sería la siguiente (donde los números superescritos señalan el máximo y los infrascritos el mínimo deocurrencias):",
      "C10VC10",
      "------",
      "Ejemplos",
      "[mar] en /mar.ka/ => la primera sílaba de la palabra",
      "[qo.q.ri], o sea /qunquri/ ‘rodilla’ => Como puede apreciarse, la segunda fórmula exige que toda raíz aimara termine en sílaba libre",
      "------",
      "RESTRICCIONES",
      "los márgenes pre o postnucleares contienen una y nada más que una consonante. No existen, pues, sílabas del tipo *CCV ni *VCC.",
      "entre un núcleo silábico y otro debe mediar por lo menos una consonante; o sea que no se toleran secuencias de vocales: queda descartada una estructura del tipo *V.V"
      
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