
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path:'login', component: () => import('pages/views/Login.vue')},
      { path:'juego_memoria', component: () => import('pages/juegos/JuegoMemoria.vue')},
      { path:'juego_orden_numero', component: () => import('pages/juego_dad/OrdenNumero.vue')},
      { path:'juego_ahorcado', component: () => import('pages/juego_dad/Ahorcado.vue')},
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
