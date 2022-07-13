import firebase from "../boot/firebase"
import firebaseServer from 'firebase';
const state = {
    userDetails:{}
}
const mutations = {
    setUserDetails(state,payload){
        state.userDetails = payload;
    }
}
const actions = {
    registerUser({},payload){
        firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
        .then((response)=>{
           // console.log(response)
            let UserID = firebase.auth().currentUser.uid;
            firebase.database().ref('users/'+ UserID).set({
                dato: payload.password,
                name: payload.name,
                email:payload.email,
                online:true,
                createdAt: firebaseServer.database.ServerValue.TIMESTAMP,
                pc:new Date().getTime()
            })            
        })
        .catch((error)=>{
           // console.log(error.message)
        })
        // firebaseAuth.createUserWithEmailAndPassword(payload.email,payload.password)
    },
    loginUser({},payload){
        firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
        .then((response)=>{
           // console.log(response)
        })
        .catch((error)=>{
           // console.log(error.message)
        })
    },
    logoutUser({dispatch,commit}){
        let UserID = firebase.auth().currentUser.uid
       // console.log("se fue",UserID)
        dispatch('firebaseUpdateUser',{
            UserID: state.userDetails.UserID,
            updates:{
                online:false,
                update_at: firebaseServer.database.ServerValue.TIMESTAMP
            }     
        });
        commit('setUserDetails',{}) 
        firebase.auth().signOut();
    },
    handleAuthStateChange({commit,dispatch,state}){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                //User is logged in
                let UserID = firebase.auth().currentUser.uid;
                firebase.database().ref('users/'+ UserID).once('value',snapshot =>{
                   // console.log('snapshot:', snapshot)
                    let userDetails= snapshot.val();
                   // console.log('userdetails', userDetails)
                    commit('setUserDetails',{
                        //name: userDetails.name,
                        email: userDetails.email,
                        UserID:UserID
                    })
                })
                dispatch('firebaseUpdateUser',{
                    UserID: UserID,
                    updates:{
                        online:true
                    }     
                });
                this.$router.push('/')
            }
            else{
                //User logged out
               // console.log("se fue",UserID)
                dispatch('firebaseUpdateUser',{
                    UserID: state.userDetails.UserID,
                    updates:{
                        online:false,
                        update_at: firebaseServer.database.ServerValue.TIMESTAMP
                    }     
                });
                commit('setUserDetails',{}) 
                this.$router.push('/login')
            }
        })
    },
    firebaseUpdateUser({},payload){
       // console.log(payload)
        firebase.database().ref('users/'+ payload.UserID).update(payload.updates);
    }

}
const getters = {

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
}