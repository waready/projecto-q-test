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


          <q-tab-panel name="ejercicios">
              <div class="row q-gutter-md justify-center">
                <div class="col-xs-12 col-sm-5 "><q-card class="my-card">
                <q-card-section>
                 <li class="col text-center q-mt-md" v-for="(item,index) in primer" :key="index">{{item}}
                  <div class="col">
                    <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom',index+1)" />
                  </div>
                  <q-separator></q-separator>
                 </li>

                </q-card-section>
                </q-card></div>
                <div class="col-xs-12 col-sm-5 ">
                  <q-card class="my-card">
                    <q-card-section>
                    <li class="col text-center q-mt-md" v-for="(item,index) in segundo" :key="index">{{item}}
                      <div class="col">
                       <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom',index+9)" />
                      </div>
                      <q-separator></q-separator>
                    </li>

                    </q-card-section>
                  </q-card>
                </div>
              </div>


          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">
        <q-linear-progress
          :value="valor"
          max="1"
          color="primary"
          id="segundo"
          class="q-pb-sm"
        />
        <!--span id="seekObjContainer">
              <progress id="seekObj" value="0" ></progress>
            </span-->
        <q-card-section class="row items-center no-wrap">
          <div class="q-mr-md">
            <div class="text-weight-bold">{{ modal.nombre }}</div>
            <div class="text-grey">{{ modal.name }}</div>
          </div>
          <audio controls controlsList="nodownload" autoplay id="audio1" @timeupdate="play()">
            <source :src="'statics/audio/semana4/'+modal.audio+'.mp3'" type="audio/ogg" />
            <source :src="'statics/audio/semana4/'+modal.audio+'.mp3'" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <q-space />
          <q-btn flat round icon="replay_circle_filled" @click="replay()" />
          <!--q-btn flat round icon="fast_rewind" />
                // <q-btn flat round icon="pause" /-->
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// import vueFlashcard from "vue-flashcard";
// import cards from "components/cards.vue";
// import lista from "components/lista_sound.vue";
export default {

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

      tam: 5,
      TextoBuscado: "",
      datos: this.ObjetoFiltrado,
      dialog: false,
      position: 'top',
      valor:0,
      modal:{
        nombre:'',
        name:'',
        audio:null
      }
    };
  },
   methods: {
    play(){

      if(this.dialog){
        function calculateTotalValue(length) {
            var minutes = Math.floor(length / 60),
              seconds_int = length - minutes * 60,
              seconds_str = seconds_int.toString(),
              seconds = seconds_str.substr(0, 2),
              time = minutes + ':' + seconds

            return time;
          }

        function calculateCurrentValue(currentTime) {
          var current_hour = parseInt(currentTime / 3600) % 24,
            current_minute = parseInt(currentTime / 60) % 60,
            current_seconds_long = currentTime % 60,
            current_seconds = current_seconds_long.toFixed(),
            current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

          return current_time;
        }


        var player = document.getElementById('audio1');
        var length = player.duration
        var current_time = player.currentTime;

        // calculate total length of value
        var totalLength = calculateTotalValue(length)
        //jQuery(".end-time").html(totalLength);

        // calculate current value time
        var currentTime = calculateCurrentValue(current_time);
        //jQuery(".start-time").html(currentTime);

        // var progressbar = document.getElementById('seekObj');
        // progressbar.value = (player.currentTime / player.duration);
        // progressbar.addEventListener("click", seek);

        var progressbar1 = document.getElementById('segundo');
        this.valor = (player.currentTime / player.duration);
        progressbar1.addEventListener("click", seek);

        if (player.currentTime == player.duration) {
          //$('#play-btn').removeClass('pause');
        }

        function seek(evt) {
          var percent = evt.offsetX / this.offsetWidth;
          player.currentTime = percent * player.duration;
          progressbar1.value = percent / 100;
        }

      }
    },
    open(position, index) {
      this.position = position;
      this.dialog = true;
      //this.modal.nombre = index.nombre;
      //this.modal.name = index.name;
      //console.log(index)
      this.modal.audio = index;
    },
    replay(){
      var audio = document.getElementById('audio1');
      //console.log(audio)
      if (audio.paused) {
          audio.play();
      }else{
          audio.currentTime = 0
      }
    },
  },
};
</script>
<style>
</style>
