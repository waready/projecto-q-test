<template>
  
    <div class="items-start q-gutter-md">
      <div>

        <div class="row q-gutter-lg justify-center">
          <q-card
            class="my-card back inset-shadow-1 text-white col-md-2 col-sm-5 col-xs-11"
            v-for="objeto in ObjetoFiltrado"
            :key="objeto.id"
          >
            <q-card-section>
              <div class="text-h6 text-center">{{ objeto.name }}</div>
            </q-card-section>
            <q-card-section>
              <q-img
                :src="
                  'statics/' + objeto.name_folder + '/' + objeto.id + '.jpg'
                "
              />
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-center text-black text-weight-bold">
                {{ objeto.nombre }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  
</template>
<script>
export default {
  name: "PageIndex",
  props: ["ObjetoFiltrado"],
  data() {
    return {
      tam: 5,
      TextoBuscado: ""
    };
  },
  // computed: {
  //   ObjetoFiltrado() {
  //     // var castellano= objeto.nombre.toUpperCase()
  //     // var aymara= objeto.name.toUpperCase()
  //     var buscado = this.TextoBuscado.toUpperCase();

  //     var hola = hola && this.objetos.filter(objeto => {
  //       return (
  //         objeto.nombre.toUpperCase().includes(buscado) ||
  //         objeto.name.toUpperCase().includes(buscado)
  //       );
  //     });
  //     this.$emit('buscar', hola);
  //     return hola;
  //   }
  // },
};
</script>
<style>
.back {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    120deg,
    rgba(2, 0, 36, 1) 15%,
    rgba(52, 167, 121, 1) 55%,
    rgba(0, 246, 255, 1) 100%
  );
}
@media (min-width: 360px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 220px;
  }
}
@media (min-width: 420px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 370px;
  }
}
@media (min-width: 600px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 200px;
  }
}
@media (min-width: 768px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 258px;
  }
}
@media (min-width: 880px){
  .q-img{
    object-fit: none;
    object-position: 0%;
    height: 305px;
  }
}
@media (min-width: 1024px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 127px;
  }
}
@media (min-width: 1174px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 150px;
  }
}
@media (min-width: 1300px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 175px;
  }
}
@media (min-width: 1500px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 206px;
  }
}
@media (min-width: 1700px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 240px;
  }
}
@media (min-width: 1920px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 276px;
  }
}
@media (min-width: 2200px){
  .q-img{
    object-fit: cover;
    object-position: 50%;
    height: 322px;
  }
}
</style>
