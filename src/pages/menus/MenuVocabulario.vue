<template>
  <q-page class="container q-ma-lg">
    <h5 class="text-center" border>Vocabulario</h5>
    <div class="row q-gutter-lg justify-center">
      <div
        class="col-md-2 col-sm-5 col-xs-12"
        v-for="item in menu"
        :key="item.id"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <q-card class="my-card">
          <img spinner-color="orange" :src="item.img" />

          <q-card-section>
            <div class="text-h6 text-center">{{ item.name }}</div>
            <div class="text-subtitle2 text-center">{{ item.desc }}</div>
          </q-card-section>

          <q-card-section class="text-center">
            <q-btn
              color="secondary"
              rounded
              class="sull-width"
              label="Ver mas"
              :to="item.url"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      scrollInfo: {},
      prop: "juegos",
      menu: [
        {
          id: 1,
          name: "Pronombres y Familia",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Pronombres y familia en aymara...",
          url: "/juego_memoria"
        },
        {
          id: 2,
          name: "Comida",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Nombres alimentos y verbos en aymara...",
          url: "/juego_orden_numero"
        },
        {
          id: 3,
          name: "Cuerpo Humano",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Nombres de partes de nuestro cuerpo humano en aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Animales",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Lista de animales aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Naturaleza y Lugares",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Nombres de la naturaleza en aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Arbustos y plantas",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Arbustos, plantas o arboles...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Chacra",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Abecedario en aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Familia",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Abecedario en aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Minerales",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Abecedario en aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Ropa",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Abecedario en aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Vegetales",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Abecedario en aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Abecedario",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Abecedario en aymara...",
          url: "/juego_ahorcado"
        },
        {
          id: 3,
          name: "Abecedario",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Abecedario en aymara...",
          url: "/juego_ahorcado"
        }
      ]
    };
  },
  created() {
    AOS.init();
  },
  methods: {
    onScroll(info) {
      this.scrollInfo = info;
    }
  }
};
</script>
