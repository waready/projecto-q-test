<template>
  <div class="q-pa-md row justify-center">
    <div style="" class="grid-t">
      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['¿Jupaxa mamapati?']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Jisa, mamapawa']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['¿Kitisa awkipaxa?']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Khayawa']"
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
        :text="[`¿Jupaxa mamapati kullakapacha?`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="[`Janiwa, mamapakisa kullakapakisa`]"
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
        :text="[`¿Jupaxa kunapäpachasa?`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Jupaxa warmipawa']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['¿Jupaxa chachapäpachati?']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Janiwa jupaxa chachapakpachati, tatapäpachawa']"
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

