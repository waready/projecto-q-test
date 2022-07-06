<template>
<q-page class="">
  <div>
    <div class="container ">
      <h5>Temario</h5>
      <div class="timeline">
        <div v-for="(item,index) in temas" :key="index" :class="'timeline-container '+ item.color">
          <div class="timeline-icon">
            <i :class="item.icon"></i>
          </div>
          <div class="timeline-body" @click="enviar(item.url)">
            <h4 class="timeline-title"><span class="badge">{{ item.color }}</span></h4>
            <p>
              {{ item.title }}
            </p>
            <p class="timeline-subtitle text-right">{{item.semana}}</p>
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
      {color:"semana 1",title:"Aprendiendo nuestras primeras palabras en aimara.",semana:"1° Semana",icon:"fa-solid fa-1",url:"/semana1"},
      {color:"semana 2", title:"Preguntas de interrogación  frecuente.",semana:"2° Semana",icon:"fa-solid fa-2",url:"/semana2"},
      {color:"semana 3",title:"Los números naturales y partes del cuerpo humano.",semana:"3° Semana",icon:"fa-solid fa-3",url:"/semana3"},
      {color:"semana 4",title:"Sistema de escritura, cuadro consonántico y vocálico.",semana:"4° Semana",icon:"fa-solid fa-4",url:"/semana4"},
      {color:"semana 5",title:"Sistema silábico, la familia, alimentos, vestido, y hogar.",semana:"5° Semana",icon:"fa-solid fa-5",url:"/semana5"},
      {color:"semana 6",title:"Los adjetivos, descripción de cosas y animales.",semana:"6° Semana",icon:"fa-solid fa-6",url:"/semana6"},
      {color:"semana 7",title:"Los adverbios, los verbos, descripción de acciones y sucesos.",semana:"7° Semana",icon:"fa-solid fa-7",url:"/semana7"}
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
