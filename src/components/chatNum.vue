<template>
  <div class="q-pa-md row justify-center">
    <div style="" class="grid-t">
      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Aski alwakipana awki']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Aski alwakipana tayka']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Nayaxa pataka sulisa apsuña muntxa']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Tarjetana llawipa uchañamaxa, akaru','¿Paqallqu tunka sulisa jukhampi apsuñaxa wakisispati?']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Walikiwa, ukampixa pataka paqallqu tunka sulisa apsuwaytaxa']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom','semana3-1')" />
      </div>

      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`Aski jayp'ukipana mama aljiri`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Aski jayp'ukipana tata`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`Mä sulisa chikatani t’ant’a alxtawita`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Akaway, ¿kunampcha?`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`Tunka payani k'awnampi alxt'awita`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Akaway..`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />

      <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom','semana3-2')" />
      </div>

      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Jumaxa qhawqha maranïtasa?']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Nayaxa pä tunka maranïtwa']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`¿Kunasa ustamxa?`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Usutuwa p'iqixa, puraka ukhamaraki qunqurixa`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`¿kunurutsa ustamxa? `]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Walürutwa`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />

      <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom','semana3-3')" />
      </div>

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
            <source :src="'statics/audio/'+modal.audio+'.mp3'" type="audio/ogg" />
            <source :src="'statics/audio/'+modal.audio+'.mp3'" type="audio/mpeg" />
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
export default {
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
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>
<style scoped>
  .grid-t{
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-areas: "area area area";
    grid-gap: 5em;
  }
  @media screen and (max-width:768px){
    .grid-t{
      display: grid;
      /* grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: repeat(3, 1fr); */
      grid-template-areas:  "area"
                            "area"
                            "area";
      grid-gap: 5em;
    }
  }
</style>

