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
          name: "Animales",
          img: "statics/menu/menu_animal.jpg",
          desc: "Animales domesticos en aymara...",
          url: "/animales"
        },
        {
          id: 2,
          name: "Arbustos",
          img: "statics/menu/menu_arbustos.jpg",
          desc: "Palabras de arbustos y plantas en aymara...",
          url: "/arbustos_arboles"
        },
        {
          id: 3,
          name: "Chacra y campo",
          img: "statics/menu/menu_chacra.jpg",
          desc: "Palabras de la chacra y el campo en aymara...",
          url: "/chacra_campo"
        },
        {
          id: 4,
          name: "Cuerpo humano",
          img: "statics/menu/menu_cuerpo.jpg",
          desc: "Palabras de nuestro cuerpo humano en aymara...",
          url: "/cuerpo_humano"
        },
        {
          id: 5,
          name: "Familia",
          img: "statics/menu/menu_familia.jpg",
          desc: "Palabras de familia y personas en aymara...",
          url: "/familia"
        },
        {
          id: 6,
          name: "Lugares",
          img: "statics/menu/menu_lugares.jpg",
          desc: "Palabras de lugares o espacios de la naturaleza creados por el hombre en aymara...",
          url: "/lugares"
        },
        {
          id: 7,
          name: "Naturaleza",
          img: "statics/menu/menu_naturaleza.jpg",
          desc: "Palabras que hay en la naturaleaza en aymara...",
          url: "/naturaleza"
        },
        {
          id: 8,
          name: "Minerales",
          img: "statics/menu/menu_minerales.jpg",
          desc: "Palabras de minerales en aymara...",
          url: "/minerales"
        },
        {
          id: 9,
          name: "Ropa",
          img: "statics/menu/menu_ropa.jpg",
          desc: "Palabras sobre ropa en aymara...",
          url: "/ropa"
        },
        {
          id: 10,
          name: "Vegetales",
          img: "statics/menu/menu_vegetal.jpg",
          desc: "Vegetales en aymara...",
          url: "/vegetales"
        },
        {
          id: 11,
          name: "Palabras comunes",
          img: "statics/menu/menu_palabras.jpg",
          desc: "Algunas palabras en aymara...",
          url: "/palabras_comunes"
        },
        {
          id: 12,
          name: "Pronombres",
          img: "statics/menu/menu_pronombres.jpg",
          desc: "Pronombres personales, demostrativos e interrogativos en aymara...",
          url: "/pronombres"
        },
        {
          id: 13,
          name: "Verbo infinitivo",
          img: "statics/menu/menu_verbos.jpg",
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
