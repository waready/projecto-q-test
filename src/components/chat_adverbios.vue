<template>
  <div class="q-pa-md row justify-center">
    <div style="" class="grid-t">
      <div style="text-align:center" >
        <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Aski urukipana,¿Kamisaraki?']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Walikïsktwa, ¿kunsa jichhürojj lurataxa?']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="['Inas nayax yapu tuqir sarchï']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Inas jichhuruxa thayächini']"
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
          :text="[`¿Kawkïr frutas jumatakix jukʼamp munasmaxa?`]"
          stamp=""
          sent
          bg-color="amber-7"
        />
        <q-chat-message
          name=""
          avatar="../statics/images/avatars/1.jpg"
          :text="[`Nayax manzanarux walpun muntxa`]"
          stamp=""
          text-color="white"
          bg-color="primary"
        />
        <q-chat-message
          name=""
          avatar="../statics/images/avatars/2.jpg"
          :text="[`¿Uka alañatakix alañäniti?`]"
          stamp=""
          sent
          bg-color="amber-7"
        />
        <q-chat-message
          name=""
          avatar="../statics/images/avatars/1.jpg"
          :text="[`Jïsa, walja manzananaka alasiñäni`]"
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
        :text="['¿Inas jumax llavinakaxa uñjsta?']"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Ukax misa patxankänwa']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`¿Jachʼa misantï?`]"
        stamp=""
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/1.jpg"
        :text="['Janiwa, uka jiskʼa misa patxankänwa']"
        stamp=""
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name=""
        avatar="../statics/images/avatars/2.jpg"
        :text="[`Nayax jank’akiw jikxatañaja`]"
        stamp=""
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

