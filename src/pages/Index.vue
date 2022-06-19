<template>
<q-page>
  <div>
    <div class="container">
      Temario
      <div class="timeline">
        <div v-for="(item,index) in temas" :key="index" :class="'timeline-container '+ item.color">
          <div class="timeline-icon">
            <i class="far fa-grin-wink"></i>
          </div>
          <div class="timeline-body" @click="enviar(item.url)">
            <h4 class="timeline-title"><span class="badge">{{ item.color }}</span></h4>
            <p>
              {{ item.title }}
            </p>
            <p class="timeline-subtitle">{{item.semana}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</q-page>

</template>

<script>
export default {
  name:"temas",
  data: () => ({
    temas:[
      {color:"primary",title:"Aprendiendo Nuestras Primeras Palabras en Aimara.",semana:"1° Semana",url:"/semana1"},
      {color:"danger", title:"Preguntas de Interrogacion Frecuente.",semana:"2° Semana",url:"/semana2"},
      {color:"success",title:"Los números naturales y partes del cuerpo humano.",semana:"3° Semana",url:"/semana3"},
      {color:"warning",title:"Sistema de escritura, cuadro Consonantico y Vocalico.",semana:"4° Semana",url:"/semana4"},
      {color:"secondary",title:"Sistema Silábico, la familia, alimentos, vestido, y hogar.",semana:"5° Semana",url:"/semana5"},
      {color:"info",title:"Los adjetivo, descripcion de cosas y Animales.",semana:"6° Semana",url:"/semana6"},
      {color:"info",title:"Los Adverbios, los vervos, descripcion de acciones y sucesos.",semana:"7° Semana",url:"/semana7"}
    ]
  }),
  methods:{
    enviar(valor){
      this.$router.push(valor);
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "src/css/timeline.scss";
</style>
