<template>
    <div >
      <div class="contenedor_input row justify-center">
        <q-input
                  outlined
                  v-model="TextoBuscado"
                  label="Buscar palabra"
                  class="q-mb-md col-md-12  col-sm-12 col-xs-12 " style="max-width:1440px "
        >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
        </q-input>
      </div>
      <!-- <div class="contenedor">
          <div class="row" v-for="(objeto,index) in datoFiltrado" :key="index">
            <div class="col-md-12 col-sm-12 col-xs-12 bg-orange-1 text-orange text-center q-pa-sm border-naranja">
              <q-btn round color="orange" icon="volume_up" @click="open('bottom',objeto)" />
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 bg-indigo-1 text-center border q-pa-md">{{objeto.nombre}}</div>
            <div class="col-md-6 col-sm-6 col-xs-12 bg-blue-1 border text-center q-pa-md">{{objeto.name}}</div>
          </div>
      </div> -->
      <!-- ---------------------------tajeta--------------------------------- -->
      <div class="contenedor">
          <div class="tarjeta" v-for="(objeto,index) in datoFiltrado" :key="index">
            <section class="tarjeta-texto-a">
              <div class="tarjeta-icon" @click="open('bottom',objeto)">
                <q-icon name="volume_up" />
              </div>
              <p>{{objeto.nombre}}</p>
            </section>
            <section class="tarjeta-texto-e">
              <p>{{objeto.name}}</p>
            </section>
          </div>
      </div>
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
       <!-- ------------------------------------card color naranja----------------------- -->
      <!-- <div class="tarjeta" v-for="(objeto,index) in datoFiltrado" :key="index">
        <section class="tarjeta-texto-a">
          <div class="tarjeta-icon" @click="hola">
            <q-icon name="volume_up" />
          </div>
          <p>{{objeto.nombre}}</p>
        </section>
        <section class="tarjeta-texto-e">
          <p>{{objeto.name}}</p>
        </section>
      </div> -->
      <!--reproductor></reproductor-->
      <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">
        <q-linear-progress :value="valor" max="1" color="pink" id="segundo" class="q-pb-sm"/>
      <!--span id="seekObjContainer">
			  <progress id="seekObj" value="0" ></progress>
			</span-->
        <q-card-section class="row items-center no-wrap">
          <div class="q-mr-md">
            <div class="text-weight-bold">{{modal.nombre}}</div>
            <div class="text-grey">{{modal.name}}</div>

          </div>
          <audio controls controlsList="nodownload" autoplay id="audio1" @timeupdate="play()">
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
        },

      },
    methods: {
      close_mensaje(){
        this.TextoBuscado="";
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
.border{
    border: 1px blue ridge;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
}
.border-naranja{
    border-top: 1px orange ridge;
    border-left: 1px orange ridge;
    border-right: 1px orange ridge;
    border-radius: 5px 5px 0px 0px;
}
.position_rel{
    position: relative;
}
.position_btn{
    position: absolute;
    margin: 0;
    top: 30px;
    /* left: 98%; */
}
/* ------------------contenedor padre----------------------------------- */
.contenedor{

    display: grid;
    /* border: solid black 10px; */
    max-width: 1440px;
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
