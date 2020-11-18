
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },

      { path:'vocabularios', component: () => import('pages/menus/MenuVocabulario.vue') },
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
