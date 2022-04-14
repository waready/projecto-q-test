<template>

    <div class="q-pa-md">
        <!-- <h4>Los numeros del 0 - 100</h4>
        <q-table
        title="Los Numeros en Aymara"
        :data="data"
        :columns="columns"
        row-key="id"

        color="amber"
      /> -->
      <div class="contenedor">
        <div class="q-px-md titulo text-h1 text-bold text-grey-9 text-center content-center">
          Los números
          <ul class="text-subtitle2 text-left">
            <li>
              Jakhu				: número
            </li>
            <li>
              Naka				: sufijo pluralizador
            </li>
            <li>
              Jakhuña			: contar (número)
            </li>
            <li>
              Jakhuñani			: contemos
            </li>
          </ul>
          <p class="text-subtitle2 q-ma-none">
            Para escribir cifras mayores es necesario descomponer las cifras, y así poder escribir grandes cantidades.
          </p>
          <p class="text-subtitle2 text-left q-ma-none">
            <ul>
              <li>100	 Pataka,
              101	 Pataka mayani,
              102	 Pataka payani</li>
              <li>124	 Pataka pä tunka pusini = <span class="text-bold">100: pataka
                                            ->20: pätunka
                                              ->4: pusini</span></li>
              <li>200	 Pä pataka,
              300	 Kimsa pataka,
              400	 Pusi pataka,
              500	 Phisqa pataka</li>
              <li>1000	 Waranqa – waranka [waranga]</li>
              <li>1001	 Waranqa mayani [waranga mayani]</li>
              <li>1111	 Waranqa pataka tunka mayani</li>
              <li>1432	 Waranqa pusi pataka kimsa tunka payani	= <span class="text-bold">1000: waranqa
                                                                  ->400: pusi pataka
                                                                    ->30: kimsa tunka
                                                                      ->2: payani</span></li>
            </ul>
          </p>
        </div>
        <div class="container" v-for="(item,key,index) in objetos" :key="index">
          <div class="card">
            <div class="circle bg-indigo text-white text-h2 text-bold text-center">
              {{key}}
            </div>
            <div class="content">
              <div v-for="(numeros,index) in 10" :key="index">
                <span class="text-bold">{{item[index].id}}</span> {{item[index].name}}
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- componente -->
      <!-- <div class="container">
        <div class="card">
          <div class="circle text-white text-h2 text-bold text-center">
            hola
          </div>
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab illum praesentium, commodi, in esse deserunt tempora tenetur, nulla magni tempore nihil ad aut nam mollitia repellendus quam voluptas quod quibusdam?</p>
          </div>
        </div>
      </div> -->

    </div>
  </template>
<script>
  import objetos from "../vocabulario/numeros.json"
export default {
    data(){
        return{
            objetos
        }
    },
    methods: {
          hola(){
            console.log(this.objetos)
          }
    }
}
</script>
<style scoped>
  .container{
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }
  .container .card{
    width: 100%;
    height: 460px;
  }
  .container .circle{
    position: relative;
    width: 100%;
    height: 100%;
    /* background:blue; */
    clip-path: circle(50% at center 0);
    padding: 20% 0;
  }
  .container .card .content{
    position:absolute;
    top:45%;
    padding: 0 5px 0 10px;
  }
  /* ------contenedor padre-------- */
  .contenedor{
    display: grid;
    /* border: solid black 10px; */
    margin: auto;
    /* font-size: 50px; */
    /* line-height: 50px; */
    /* text-align: center; */
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(3, auto); */
    grid-gap: 20px;
    /* grid-auto-flow: dense; */
    grid-template-areas: ". titulo titulo .";
  }
  .contenedor>div{
    display: block;
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
      grid-template-areas: " titulo titulo titulo ";

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
      grid-template-areas: " titulo titulo ";
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
      grid-template-areas: "titulo";
    }
    .contenedor>div:last-child{
      grid-column: 1/2;
    }
  }
</style>
