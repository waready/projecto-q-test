<template>
    <div class="items-start q-gutter-md">
      <div>
        <q-input
                outlined
                v-model="TextoBuscado"
                label="Buscar palabra"
                class="q-mb-md col-md-3 col-sm-12 col-xs-12"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
        </q-input>
        <div class="row q-gutter-lg justify-center">
          <q-card
            class="my-card back inset-shadow-1 text-white col-md-2 col-sm-5 col-xs-11"
            v-for="objeto in datoFiltrado"
            :key="objeto.id"
          >
            <q-card-section class="text-center">
              <div class="text-h6">{{ objeto.name }}
              </div>
              <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom',objeto)" />
              
            </q-card-section>
            <q-card-section >
              <q-img
                :src="
                  'statics/' + objeto.name_folder + '/' + objeto.id + '.jpg'
                "
              />
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-center text-black text-weight-bold">
                {{ objeto.nombre }}
              </div>
            </q-card-section>
          </q-card>
        <!-- ---------------------banner de objeto no encontrado----------- -->
        <div class="row justify-center">
          <div v-if="!datoFiltrado.length" class="bg-red "  style="max-width:1440px">
              <q-banner inline-actions class="text-white bg-red">
                No se han encontrado resultados para tu búsqueda
                <template v-slot:action>
                  
                  <q-btn flat color="white" icon="close" @click="close_mensaje"/>
                </template>
              </q-banner>
          </div>
        </div>
          <!--reproductor></reproductor-->
        <q-dialog v-model="dialog" :position="position">
            <q-card style="width: 350px" >
              <q-linear-progress :value="valor" max="1" color="primary" id="segundo" class="q-pb-sm"/>
            <!--span id="seekObjContainer">
              <progress id="seekObj" value="0" ></progress>
            </span-->
              <q-card-section class="row items-center no-wrap">
                <div class="q-mr-md">
                  <div class="text-weight-bold">{{modal.nombre}}</div>
                  <div class="text-grey">{{modal.name}}</div>
                  
                </div>
                <audio controls autoplay id="audio1" @timeupdate="play()">
                  <source src="statics/audio/y2meta.mp3" type="audio/ogg">
                  <source src="statics/audio/y2meta.mp3" type="audio/mpeg">
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
      </div>
    </div>
  
</template>
<script>
import reproductor from "components/reproductor";
export default {
  name: "PageIndex",
  components:{
        reproductor
  },
  props:{
    ObjetoFiltrado:{
      type: Array,
    },
  },
  data() {
    return {
      tam: 5,
      TextoBuscado: "",
      datos: this.ObjetoFiltrado,
      dialog: false,
      position: 'top',
      valor:0,
      modal:{
        nombre:'',
        name:'',
      }
    };
  },

  computed: {
    datoFiltrado() {
      // var castellano= objeto.nombre.toUpperCase()
      // var aymara= objeto.name.toUpperCase()
      var buscado = this.TextoBuscado.toUpperCase();

      return this.datos.filter(objeto => {
        return (
          objeto.nombre.toUpperCase().includes(buscado) ||
          objeto.name.toUpperCase().includes(buscado)
        );
      });
    }
  },
   methods: {
    close_mensaje(){
      this.TextoBuscado=""
    },
    open (position,index) {
      this.position = position
      this.dialog = true
      this.modal.nombre = index.nombre
      this.modal.name = index.name
      //console.log(index)
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
    }
  }
    };
  

</script>
<style>
.back {
  /* background: rgb(2, 0, 36);
  background: linear-gradient(
    120deg,
    rgba(2, 0, 36, 1) 15%,
    rgba(52, 167, 121, 1) 55%,
    rgba(0, 246, 255, 1) 100%
  ); */
  background: linear-gradient(to bottom, #ff5131, white);
}
@media (min-width: 360px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 220px;
  }
}
@media (min-width: 420px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 370px;
  }
}
@media (min-width: 600px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 200px;
  }
}
@media (min-width: 768px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 258px;
  }
}
@media (min-width: 880px){
  .q-img{
    object-fit: none;
    object-position: 0%;
    height: 305px;
  }
}
@media (min-width: 1024px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 127px;
  }
}
@media (min-width: 1174px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 150px;
  }
}
@media (min-width: 1300px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 175px;
  }
}
@media (min-width: 1500px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 206px;
  }
}
@media (min-width: 1700px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 240px;
  }
}
@media (min-width: 1920px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 276px;
  }
}
@media (min-width: 2200px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 322px;
  }
}
/* -------------------tarjetas ---------------*/
.tarjeta{
    width:100%;
    border: 4px white solid;
    border-radius: 5px;
    box-shadow: 2px 2px 10px black;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    /* overflow: hidden;  */
  }
  .tarjeta-texto-a{
    background: #dc3546;
    color: white;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tarjeta-icon{
    text-align: center;
    content: "";
    background: #dc3546;
    border: 4px white solid;
    border-radius: 5px;
    position: absolute;
    top:-18px;
    width: 50px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .tarjeta-icon:hover{
    background: #ff1d34;
  }
  .tarjeta-texto-a p{
    margin: 0;
  }
  .tarjeta-texto-e{
    background: gray;
    color: white;
    text-align: center;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tarjeta-texto-e p{
    margin: 0;
  }
</style>
