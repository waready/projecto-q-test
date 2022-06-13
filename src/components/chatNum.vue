<template>
  <div class="q-pa-md row justify-center">
    <div style="" class="grid-t">
      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['Aski alwakipana wiraxucha']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Aski alwakipana mama']"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['Nayax patak sulisa apsuñ munta']"
        stamp="4 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Tarjetan llavep uchañamaxa, akaru','¿Paqallq tunka sulisa juk’ampi apsuñax wakisispati?']"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['Walikiwa, ukampixa patak paqallq tunk sulisa apsuwayxtaja']"
        stamp="4 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom',objeto)" />
      </div>

      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[`Aski jayp'ukipana mama aljiri`]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[`Aski jayp'ukipanaya tata`]"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[`Mä sulis chikatani t’ant’a aljtawita`]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[`Akaway, ¿kunamcha?`]"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[`Tunka payani k'anwampi aljtawita`]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[`Akaway.`]"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />

      <q-btn round class="q-mt-md" color="primary" icon="volume_up" @click="open('bottom',objeto)" />
      </div>

      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['Jumax qawqha maranitasa? ']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Nayax pä tunka maranitwa, jumasti?']"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[`Nayax tunka kimsaqallqun maranitwa.`]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Janit pä tunka mayan maranikta?']"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[`Janiwa`]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
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

