    <template>
    <q-page class="container q-ma-lg">
      <h5 class="text-center" border>Gramática</h5>   
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
        {id:1,name:"Palabras y Sufijos", img:"https://cdn.quasar.dev/img/mountains.jpg", desc:"Introducciona a las palabras y sufijos", url:"/palabras" },
        {id:2,name:"Sistemas de Sufijos", img:"https://cdn.quasar.dev/img/mountains.jpg",desc:"Sistema de uso de sufijos", url:"/sufijos" },
        
        {id:3,name:"Adjetivos", img:"https://cdn.quasar.dev/img/mountains.jpg",desc:"El uso del adjetivo aymara", url:"/adjetivos" },
        {id:4,name:"El Adverbio", img:"https://cdn.quasar.dev/img/mountains.jpg",desc:"El advervio aymara", url:"/adverbio" },
      ]
    }
  },
  created(){
    AOS.init();
  },
  methods: {
  onScroll (info) {
    this.scrollInfo = info
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