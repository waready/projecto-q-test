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
          name: "Animales domesticos",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Animales domesticos en aymara...",
          url: "/animales_domesticos"
        },
        {
          id: 2,
          name: "Animales silvestres",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Animales silvestres en aymara...",
          url: "/animales_silvestres"
        },
        {
          id: 3,
          name: "Insectos",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Palabras de insectos en aymara...",
          url: "/insectos"
        },
        {
          id: 3,
          name: "Palabras sobre animales",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Nombres de partes de animales en aymara...",
          url: "/acerca_de_animales"
        },
        {
          id: 3,
          name: "Arbustos",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Palabras de arbustos y plantas en aymara...",
          url: "/arbustos_arboles"
        },
        {
          id: 3,
          name: "Cuerpo humano",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Palabras de nuestro cuerpo humano en aymara...",
          url: "/cuerpo_humano"
        },
        {
          id: 3,
          name: "Familia",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Palabras de familia en aymara...",
          url: "/familia"
        },
        {
          id: 3,
          name: "Minerales",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Palabras de minerales en aymara...",
          url: "/minerales"
        },
        {
          id: 3,
          name: "Ropa",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Palabras sobre ropa en aymara...",
          url: "/ropa"
        },
        {
          id: 3,
          name: "Vegetales",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Vegetales en aymara...",
          url: "/vegetales"
        },
        {
          id: 3,
          name: "Palabras comunes",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Algunas palabras en aymara...",
          url: "/palabras_comunes"
        },
        {
          id: 3,
          name: "Verbo infinitivo",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          desc: "Verbos mas usados en aymara...",
          url: "/verbos_infinitivos"
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
