<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['hey, how are you?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['doing fine, how r you?']"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
    </div>
    
    <template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        Cronograma de actividades
        <br>
        ({{$q.screen.lt.sm ? 'Dense' : ($q.screen.lt.md ? 'Comfortable' : 'Loose')}} layout)
      </q-timeline-entry>

      <q-timeline-entry
        title="Aprendiendo nuestras primeras palabras en aimara"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <q-btn outline color="white" text-color="black" label="Ver contenido" class="full-width" size="md" icon-right="send"/>
      </q-timeline-entry>

      <q-timeline-entry
        title="Preguntas e interrogaciones frecuentes"
        subtitle="February 21, 1986"
        side="right"
        icon="delete"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <q-btn outline color="white" text-color="black" label="Ver contenido" class="full-width" size="md" icon-right="send"/>
      </q-timeline-entry>

      <!-- <q-timeline-entry heading>November, 2017</q-timeline-entry> -->

      <q-timeline-entry
        title="Los números naturales y partes del cuerpo humano"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <q-btn outline color="white" text-color="black" label="Ver contenido" class="full-width" size="md" icon-right="send"/>
      </q-timeline-entry>

      <q-timeline-entry
        title="Sistema de escritura, cuadro consonantico y vocalico"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <q-btn outline color="white" text-color="black" label="Ver contenido" class="full-width" size="md" icon-right="send"/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Sistema silábico, la familia, alimentos, vestido y hogar"
        subtitle="February 22, 1986"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <q-btn outline color="white" text-color="black" label="Ver contenido" class="full-width" size="md" icon-right="send"/>
      </q-timeline-entry>

      <q-timeline-entry
        title="Los adjetivos, descripción de cosas y animales"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <q-btn outline color="white" text-color="black" label="Ver contenido" class="full-width" size="md" icon-right="send"/>
      </q-timeline-entry>

      <q-timeline-entry
        title="Los adverbios, los verbos, descripcion de acciones y sucesos"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <q-btn outline color="white" text-color="black" label="Ver contenido" class="full-width" size="md" icon-right="send"/>
      </q-timeline-entry>
    </q-timeline>
  </div>
  <!-- <div class="tarjeta">
    <section class="tarjeta-texto-a">
      <div class="tarjeta-icon" @click="hola">
        <q-icon name="volume_up" />
      </div>
      <p>sd</p>
    </section>
    <section class="tarjeta-texto-e">
      <p>sd</p>
    </section>
  </div> -->
</template>
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
  /* .tarjeta{
    width:100%;
    border: 4px white solid;
    border-radius: 5px;
    box-shadow: 2px 2px 10px black;
    box-sizing: border-box;
    position: relative;
    text-align: center;
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
  } */
</style>

