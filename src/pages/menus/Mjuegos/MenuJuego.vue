<template>
    <q-page class="container q-ma-lg">
            <!-- <pre class="q-ma-none container">{{ scrollInfo.position }}</pre>
            <q-scroll-observer @scroll="onScroll" /> -->
      <h2 class="text-center">Juegos</h2>      
      <div class="row q-gutter-lg justify-center">
        <div class="col-md-3 col-xs-12" v-for="item in 10" data-aos="fade-up" data-aos-duration="1500">
            <q-card class="my-card">
                <img spinner-color="orange" src="https://cdn.quasar.dev/img/mountains.jpg">
          
                <q-card-section>
                  <div class="text-h6 text-center">Our Changing Planet</div>
                  <div class="text-subtitle2 text-center">by John Doe</div>
                </q-card-section>
      
                <q-card-section>
                  <!-- {{ lorem }} -->
                </q-card-section>
              </q-card>
        </div>
      </div>
        <!-- <div class="col">
            <q-card class="my-card">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
          
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
          
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card>
        </div>
      </div> -->
      
      
    </q-page>
</template>
<script>
import AOS from "aos"
import 'aos/dist/aos.css';
export default {

    data(){
      return{
        scrollInfo: {}
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