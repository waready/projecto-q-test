<template>
    <div>
      <q-input
                outlined
                v-model="TextoBuscado"
                label="Buscar palabra"
                class="q-mb-md col-md-3 col-sm-12 col-xs-12"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
      </q-input>
      <div class="contenedor">
          <div class="row" v-for="(objeto,index) in datoFiltrado" :key="index">
            <div class="col-md-12 col-sm-12 col-xs-12 bg-orange-1 text-orange text-center q-pa-sm border-naranja">
              <q-btn round color="orange" icon="volume_up" />
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 bg-indigo-1 text-center border q-pa-md">{{objeto.nombre}}</div>
            <div class="col-md-6 col-sm-6 col-xs-12 bg-blue-1 border text-center q-pa-md">{{objeto.name}}</div>
          </div>
      </div>
    </div>
</template>
<script>
    export default {
      name: "PageIndex",
      props:{
      ObjetoFiltrado:{
          type: Array,
        },
      },
      data() {
        return {
          tam: 5,
          TextoBuscado: "",
          datos: this.ObjetoFiltrado
        };
      },
      
      computed: {
        datoFiltrado() {
          // var castellano= objeto.nombre.toUpperCase()
          // var aymara= objeto.name.toUpperCase()
          var buscado = this.TextoBuscado.toUpperCase();

          return this.datos.filter(objeto => {
            return (
              objeto.nombre.toUpperCase().includes(buscado) ||
              objeto.name.toUpperCase().includes(buscado)
            );
          });
        }
      },
    };
</script>
<style>
.border{
    border: 1px blue ridge;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
}
.border-naranja{
    border-top: 1px orange ridge;
    border-left: 1px orange ridge;
    border-right: 1px orange ridge;
    border-radius: 5px 5px 0px 0px;
}
.position_rel{
    position: relative;
}
.position_btn{
    position: absolute;
    margin: 0;
    top: 30px;
    /* left: 98%; */
}
/* ------------------contenedor padre----------------------------------- */
.contenedor{
    
    display: grid;
    /* border: solid black 10px; */
    margin: auto;
    /* font-size: 50px; */
    /* line-height: 50px; */
    /* text-align: center; */
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-rows: repeat(3, auto); */
    grid-gap: 20px;
    /* grid-auto-flow: dense; */
    grid-template-areas: "card card card card card";
  }
  .contenedor>div{
    /* display: block; */
    /* background: chartreuse; */
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    /* grid-area: card; */
  }
  .contenedor .titulo{
    /* grid-column: 2/4; */
    /* grid-row: 1/2; */
    grid-area: titulo;
    font-size: 5em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width:1024px){
    .contenedor .titulo{
      font-size: 4.5em;
    }
    .contenedor {
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-rows: repeat(5, auto); */
      grid-template-areas: " card card card ";
      
    }
    .contenedor>div:last-child{
      grid-column: 2/3;
    }
  }
  @media screen and (max-width:768px){
    .contenedor .titulo{
      font-size: 4em;
    }
    .contenedor{
      grid-template-columns: repeat(2, 1fr);
      /* grid-template-rows: repeat(6, auto); */
      grid-template-areas: " card card ";
    }
  }
  @media screen and (max-width:624px){
    .container .card .content{
    font-size: 0.8em;
  }
  }
  @media screen and (max-width:480px){
    .container .card .content{
    font-size: 1em;
  }
    .contenedor .titulo{
      font-size: 3.7em;
    }
    .contenedor{
      grid-template-columns: 1fr;
      /* grid-template-rows: repeat(11, auto); */
      grid-template-areas: "card";
    }
    .contenedor>div:last-child{
      grid-column: 1/2;
    }
  }
</style>