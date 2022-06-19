import firebase from "../boot/firebase"

export default ({router}) => {
  router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged(user => {
      if( !user && to.path !== '/login' ){
        next('/login')
      }else{
        // console.log(loggedIn);
        next()
      }    
    })
  })
}