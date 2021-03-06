
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },

      { path:'vocabulario', component: () => import('pages/menus/MenuVocabulario.vue') },
      { path:'juegos', component: () => import('pages/menus/MenuJuego.vue')},
      { path:'frases', component: () => import('pages/menus/MenuFrases')},
      { path:'gramatica', component: () => import('pages/menus/MenuGramaticas.vue')},
        /**gramatica**/
        { path:'palabras', component: () => import('pages/views/gramatica/Palabras.vue')},
        { path:'sufijos', component: () => import('pages/views/gramatica/SistemaSufijos.vue')},
        { path:'verbos', component: () => import('pages/views/gramatica/Verbos.vue')},
        { path:'adjetivos', component: () => import('pages/views/gramatica/Adjetivos.vue')},
        { path:'adverbio', component: () => import('pages/views/gramatica/Adverbio.vue')},
      


      { path:'login', component: () => import('pages/views/Login.vue')},
      { path:'colores', component: () => import('pages/views/Colores.vue')},
      { path:'numeros', component: () => import('pages/views/Numeros.vue')},
      { path:'tiempo', component: () => import('pages/views/Tiempo.vue')},

      { path:'juego_memoria', component: () => import('pages/juegos/juegoMemoria/JuegoMemoria.vue')},
      { path:'juego_orden_numero', component: () => import('pages/juegos/OrdenNumero.vue')},
      { path:'juego_ahorcado', component: () => import('pages/juegos/Ahorcado.vue')},

      
      // vocabulario
      { path:'animales_domesticos', component: () => import('pages/views/vocabulario/animal_domestico.vue')},
      { path:'insectos', component: () => import('pages/views/vocabulario/insectos.vue')},
      { path:'animales_silvestres', component: () => import('pages/views/vocabulario/animal_silvestre.vue')},
      { path:'acerca_de_animales', component: () => import('pages/views/vocabulario/about_animales.vue')},
      { path:'arbustos_arboles', component: () => import('pages/views/vocabulario/arbustos_arboles.vue')},
      // { path:'chacra_campo', component: () => import('pages/views/vocabulario/chacra_campo.vue')},
      { path:'cuerpo_humano', component: () => import('pages/views/vocabulario/cuerpo_humano.vue')},
      { path:'familia', component: () => import('pages/views/vocabulario/familia.vue')},
      // { path:'lugares', component: () => import('pages/views/vocabulario/lugares.vue')},
      { path:'minerales', component: () => import('pages/views/vocabulario/minerales.vue')},
      // { path:'naturaleza', component: () => import('pages/views/vocabulario/naturaleza.vue')},
      { path:'palabras_comunes', component: () => import('pages/views/vocabulario/palabras_comunes.vue')},
      // { path:'peces_pajaros', component: () => import('pages/views/vocabulario/peces_pajaros.vue')},
      // { path:'pronombres', component: () => import('pages/views/vocabulario/pronombres.vue')},
      { path:'ropa', component: () => import('pages/views/vocabulario/ropa.vue')},
      { path:'vegetales', component: () => import('pages/views/vocabulario/vegetales.vue')},
      { path:'verbos_infinitivos', component: () => import('pages/views/vocabulario/verbos_infinitivos.vue')},
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
