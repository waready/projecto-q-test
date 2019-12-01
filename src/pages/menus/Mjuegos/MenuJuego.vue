<template>
    <q-page class="container q-ma-lg">
            <!-- <pre class="q-ma-none container">{{ scrollInfo.position }}</pre>
            <q-scroll-observer @scroll="onScroll" /> -->
      <h5 class="text-center" border>Juegos</h5>   
      {{mensajeAlreves}}   {{prop}}
      <div class="row q-gutter-lg justify-center">
        <div class="col-md-3 col-xs-12" v-for="item in menu" :key="item.id" data-aos="fade-up" data-aos-duration="1500">
            <q-card class="my-card">
                <img spinner-color="orange" :src="item.img">
          
                <q-card-section>
                  <div class="text-h6 text-center">{{item.name}}</div>
                  <div class="text-subtitle2 text-center">{{item.desc}}</div>
                </q-card-section>
      
                <q-card-section class="text-center">
                  <q-btn color="secondary" rounded class="full-width" label="Iniciar"  :to="item.url"/>
                </q-card-section>
              </q-card>
        </div>
      </div>
    </q-page>
</template>
<script>
import AOS from "aos"
import 'aos/dist/aos.css';
export default {
  data(){
    return{
      scrollInfo: {},
      prop:"juegos",
      menu:[
        {id:1,name:"cards", img:"https://cdn.quasar.dev/img/mountains.jpg", desc:"juego de comparacion de tarjetas", url:"/juegos1" },
        {id:2,name:"number", img:"https://cdn.quasar.dev/img/mountains.jpg",desc:"juego para ordenar (numeros)", url:"/juegos1" },
        {id:3,name:"aorcado", img:"https://cdn.quasar.dev/img/mountains.jpg",desc:"juego para adivinar la palabra correcta", url:"/juegos1" },
      ]
    }
  },
  created(){
    AOS.init();
  },
  methods: {
  onScroll (info) {
    this.scrollInfo = info
  },
    computed:{
      mensajeAlreves:function() {
        return this.prop.split('').reverse().join('')
      },
    }
}
}
</script>
<style>
  
/* .container{
  animation: transitionIn 2s;
}
@keyframes transitionIn{
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }

}   */

</style>