<template>
  <div class="q-pa-md row justify-center">
    <div style="" class="grid-t">
      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['¿Kunjamasa utamaxa?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Utajax janq’u larama ukat jach’akiwa	']"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['Ukat, ¿kuna samisa uka punkuxa?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Punkux ch’umpi ukat machaqäxiwa']"
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
        :text="[`Mama, ¿kunas ukax?	`]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[`ukax mä wakawa`]"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[`¿Ukat ukax?`]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[`ukax mä qawra`]"
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
        :text="['¿Jumajj nayan asnujjar uñjtati?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['¿Ukanakat kawchapsa?']"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[`Ch’iyara asnujaxa`]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Nayax juparux waña yapu uñjta ']"
        stamp="4 minutes ago"
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

