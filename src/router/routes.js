
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'vocabulario', component: () => import('pages/views/seccion1/Vocabulario.vue') },
      { path: 'palabras', component: () => import('pages/views/seccion1/PrimWords.vue') },
      { path: 'frases', component: () => import('pages/views/seccion1/Frases.vue') },
      
      { path:'login', component: () => import('pages/views/Login.vue')},
      { path:'colores', component: () => import('pages/views/Colores.vue')},
      { path:'numeros', component: () => import('pages/views/Numeros.vue')},
      { path:'tiempo', component: () => import('pages/views/Tiempo.vue')},

      { path:'juego_memoria', component: () => import('pages/juegos/juegoMemoria/JuegoMemoria.vue')},
      { path:'juego_orden_numero', component: () => import('pages/juegos/OrdenNumero.vue')},
      { path:'juego_ahorcado', component: () => import('pages/juegos/Ahorcado.vue')},
      { path:'menu', component: () => import('pages/menus/Mjuegos/MenuJuego.vue')}
      
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
