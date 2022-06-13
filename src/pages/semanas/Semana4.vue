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
                <div class="text-h6">SISTEMA DE ESCRITURA Y CONSONANTICO DEL IDIOMA AIMARA</div>
              </q-card-section>
              <q-card-section>
                <!-- <li v-for="(item,index) in saludos" :key="index" style="list-style:none">{{item}}</li> -->
              <p>El alfabeto del	idioma aymara cuenta con 30 fonemas de los cuales 26 son consonantes, 3 son vocales y un alargamiento vocálico (¨).</p>
                <div class="q-pa-md">
                  <q-option-group
                    v-model="separator"
                    inline
                    class="q-mb-md"
                    :options="[
                      { label: 'Horizontal', value: 'horizontal' },
                      { label: 'Vertical', value: 'vertical' },
                      { label: 'Cell', value: 'cell' },
                      { label: 'None', value: 'none' }
                    ]"
                  />

                  <q-markup-table :separator="separator" flat bordered class="my-sticky-header-column-table">
                    <thead>
                      <tr>
                        <th class="text-left">MODO DE ARTICULACIÓN</th>
                        <th class="text-right">Bilabial</th>
                        <th class="text-right">Alveolar</th>
                        <th class="text-right">Palatal</th>
                        <th class="text-right">Velar</th>
                        <th class="text-right">Postvelar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left text-bold" colspan="6">OCLUSIVOS</td>
                      </tr>
                      <tr>
                        <td class="text-left">Simples</td>
                        <td class="text-right">p</td>
                        <td class="text-right">t</td>
                        <td class="text-right"></td>
                        <td class="text-right">k</td>
                        <td class="text-right">q</td>
                      </tr>
                      <tr>
                        <td class="text-left">Aspirados</td>
                        <td class="text-right">ph</td>
                        <td class="text-right">th</td>
                        <td class="text-right"></td>
                        <td class="text-right">kh</td>
                        <td class="text-right">qh</td>
                      </tr>
                      <tr>
                        <td class="text-left">Glotalizados</td>
                        <td class="text-right">p’</td>
                        <td class="text-right">t’</td>
                        <td class="text-right"></td>
                        <td class="text-right">k’</td>
                        <td class="text-right">q’</td>
                      </tr>
                      <tr>
                        <td class="text-left text-bold" colspan="6">AFRICADOS</td>
                      </tr>
                      <tr>
                        <td class="text-left">Simple</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                        <td class="text-right">ch</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-left">Aspirado</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                        <td class="text-right">chh</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-left">Glotalizado</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                        <td class="text-right">ch’</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-left text-bold">FRICATIVOS</td>
                        <td class="text-right"></td>
                        <td class="text-right">s</td>
                        <td class="text-right"></td>
                        <td class="text-right">j</td>
                        <td class="text-right">x</td>
                      </tr>
                      <tr>
                        <td class="text-left">Laterales</td>
                        <td class="text-right"></td>
                        <td class="text-right">l</td>
                        <td class="text-right">Ll</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-left">Nasales</td>
                        <td class="text-right">m</td>
                        <td class="text-right">n</td>
                        <td class="text-right">ñ</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-left">Semiconsonante</td>
                        <td class="text-right">w</td>
                        <td class="text-right"></td>
                        <td class="text-right">Y</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-left">Vibrante simple</td>
                        <td class="text-right"></td>
                        <td class="text-right">r</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-center text-bold" colspan="6">VOCALES</td>
                      </tr>
                      <tr>
                        <td class="text-right"></td>
                        <td class="text-right">i</td>
                        <td class="text-right">a</td>
                        <td class="text-right">u</td>
                        <td class="text-right"></td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-center text-bold">Alargamiento vocálico</td>
                        <td class="text-right">(¨)</td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </div>
              </q-card-section>
              <div class="text-center">Imagen de punto de articulacion del idioma aimara </div>

              <div class="row justify-center">
                <q-img
                  src="../../statics/laka.jpg"
                  style="max-width: 300px"
                />
              </div>
              <div class="text-center">Imagen tomada de <a href="https://aymara.org/webarchives/www2004/arusa/qillqa.php">https://aymara.org</a> </div>

              <q-separator inset />

              <q-card-section>
                <div class="text-h6">ORDEN ALFABÉTICO DEL AIMARA </div>
                <q-markup-table :separator="separator" flat bordered>

      <tbody>
        <tr>
          <td class="text-center">A</td>
          <td class="text-center">CH</td>
          <td class="text-center">CHH</td>
          <td class="text-center">CH'</td>
          <td class="text-center">I</td>
        </tr>
        <tr>
          <td class="text-center">J</td>
          <td class="text-center">K</td>
          <td class="text-center">KH</td>
          <td class="text-center">K'</td>
          <td class="text-center">L</td>
        </tr>
        <tr>
          <td class="text-center">LL</td>
          <td class="text-center">M</td>
          <td class="text-center">N</td>
          <td class="text-center">Ñ</td>
          <td class="text-center">P</td>
        </tr>
        <tr>
          <td class="text-center">PH</td>
          <td class="text-center">P'</td>
          <td class="text-center">Q</td>
          <td class="text-center">QH</td>
          <td class="text-center">Q'</td>
        </tr>
        <tr>
          <td class="text-center">R</td>
          <td class="text-center">S</td>
          <td class="text-center">T</td>
          <td class="text-center">TH</td>
          <td class="text-center">T'</td>
        </tr>
        <tr>
          <td class="text-center">U</td>
          <td class="text-center">W</td>
          <td class="text-center">X</td>
          <td class="text-center">Y</td>
          <td class="text-center"></td>
        </tr>
      </tbody>
    </q-markup-table>
              </q-card-section>
              <q-card-section>

              </q-card-section>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="pronunciacion">
            <chat></chat>
          </q-tab-panel>

          <q-tab-panel name="ejercicios">
              Pronuncie las siguientes palabras
              <div class="row">
                <div class="col"><q-card class="my-card">
                <q-card-section>
                 <li v-for="item in primer">{{item}}</li>
                </q-card-section>
                </q-card></div>
                <div class="col">
                  <q-card class="my-card">
                    <q-card-section>
                    <li v-for="item in segundo">{{item}}</li>
                    </q-card-section>
                  </q-card>
                </div>
              </div>


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

import chat from "components/questionchat.vue";
export default {
    components: { chat },
  name: "PageIndex",
  //components: { cards, lista },
  data() {
    return {
      separator: 'cell',
       tab: "grammar",
      // TextoBuscado: "",
      // domesticos
      primer:[
       'ch’amaka: oscuro', 'isi: ropa',
        'ajanu: cara', 'amuki: callado', 'alaya: arriba',
        'jaqi: persona, gente', 'quta: lago',
        'q’uma: limpio'],
      segundo:[
       'junt’u: caliente', 'jayra: flojo', 'kunka: cuello', 'k’ara: salado', 'luk’ana: dedo', 'mara: año, edad', 'phuqha: lleno',
        'quri: oro'
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
