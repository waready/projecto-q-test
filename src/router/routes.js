
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path:'login', component: () => import('pages/views/Login.vue')},
      { path:'juegos', component: () => import('pages/juegos/App.vue')},
      { path:'juegos2', component: () => import('pages/juego_dad/App.vue')},
      { path:'juegos3', component: () => import('pages/juego_dad/Aorcado.vue')},
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
