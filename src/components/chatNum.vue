<template>
  <div class="q-pa-md row justify-center">
    <div style="" class="grid-t">
      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Aski alwakipana wiraxucha']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Aski alwakipana mama']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Nayax patak sulisa apsuñ munta']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Tarjetan llavep uchañamaxa, akaru','¿Paqallq tunka sulisa juk’ampi apsuñax wakisispati?']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Walikiwa, ukampixa patak paqallq tunk sulisa apsuwayxtaja']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom',objeto)" />
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
        :text="[`Aski jayp'ukipanaya tata`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`Mä sulis chikatani t’ant’a aljtawita`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Akaway, ¿kunamcha?`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`Tunka payani k'anwampi aljtawita`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Akaway.`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />

      <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom',objeto)" />
      </div>

      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Jumax qawqha maranitasa? ']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Nayax pä tunka maranitwa']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`¿Kunas ustamja?`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Usutuwa p'iqixa, puraka ukamaraki q'unqurixa`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`¿kunurutsa usutajtaxa? `]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`walürutwa`]"
        stamp=""
        text-color="white"
        bg-color="primary"
      />

      <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom',objeto)" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hola(){
      console.log("hola")
    }
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

