(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("c973"),a=t.n(r),o=t("a34a"),u=t.n(o),i=(t("a481"),t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("2b0e")),l=t("b05d");i["a"].use(l["a"],{config:{}});var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},c=[],p=(t("456d"),t("8a81"),t("d25f"),t("9986"),t("8e6e"),t("9523")),h=t.n(p),f=t("2f62");function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){h()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={name:"App",methods:d({},Object(f["b"])("store",["handleAuthStateChange"])),mounted:function(){this.handleAuthStateChange()}},P=b,g=t("2877"),v=Object(g["a"])(P,s,c,!1,null,null,null),w=v.exports,y=t("643a"),x=t.n(y),j=t("2591"),O={apiKey:"AIzaSyBIwQ21Qahygfkz7xsuwCDrOYTEIWt5CBU",authDomain:"tesisusers.firebaseapp.com",projectId:"tesisusers",storageBucket:"tesisusers.appspot.com",messagingSenderId:"514906113182",appId:"1:514906113182:web:c680da49b13709aeac278f"},U=j["a"].initializeApp(O),k=U,D={userDetails:{}},A={setUserDetails:function(e,n){e.userDetails=n}},I={registerUser:function(e,n){x()(e),k.auth().createUserWithEmailAndPassword(n.email,n.password).then((function(e){console.log(e);var t=k.auth().currentUser.uid;k.database().ref("users/"+t).set({email:n.email,online:!0,createdAt:j["a"].database.ServerValue.TIMESTAMP,pc:(new Date).getTime()})})).catch((function(e){console.log(e.message)}))},loginUser:function(e,n){x()(e),k.auth().signInWithEmailAndPassword(n.email,n.password).then((function(e){console.log(e)})).catch((function(e){console.log(e.message)}))},logoutUser:function(){k.auth().signOut()},handleAuthStateChange:function(e){var n=this,t=e.commit,r=e.dispatch,a=e.state;k.auth().onAuthStateChanged((function(e){if(e){var o=k.auth().currentUser.uid;k.database().ref("users/"+o).once("value",(function(e){console.log("snapshot:",e);var n=e.val();console.log("userdetails",n),t("setUserDetails",{email:n.email,UserID:o})})),r("firebaseUpdateUser",{UserID:o,updates:{online:!0}}),n.$router.push("/")}else r("firebaseUpdateUser",{UserID:a.userDetails.UserID,updates:{online:!1,update_at:j["a"].database.ServerValue.TIMESTAMP}}),t("setUserDetails",{}),n.$router.push("/login")}))},firebaseUpdateUser:function(e,n){x()(e),console.log(n),k.database().ref("users/"+n.UserID).update(n.updates)}},_={},S={namespaced:!0,state:D,mutations:A,actions:I,getters:_};i["a"].use(f["a"]);var E=function(){var e=new f["a"].Store({modules:{store:S},strict:!1});return e},C=t("8c4f"),T=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e(8).then(t.bind(null,"8b24"))}},{path:"vocabulario",component:function(){return Promise.all([t.e(0),t.e(1),t.e(30)]).then(t.bind(null,"872a"))}},{path:"juegos",component:function(){return Promise.all([t.e(0),t.e(1),t.e(18)]).then(t.bind(null,"93ef"))}},{path:"frases",component:function(){return Promise.all([t.e(0),t.e(1),t.e(16)]).then(t.bind(null,"548e"))}},{path:"gramatica",component:function(){return Promise.all([t.e(0),t.e(1),t.e(17)]).then(t.bind(null,"835c"))}},{path:"palabras",component:function(){return t.e(34).then(t.bind(null,"c64a"))}},{path:"sufijos",component:function(){return t.e(35).then(t.bind(null,"0201"))}},{path:"verbos",component:function(){return t.e(36).then(t.bind(null,"fdbe"))}},{path:"adjetivos",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"cb8f"))}},{path:"adverbio",component:function(){return t.e(33).then(t.bind(null,"9b22"))}},{path:"login",component:function(){return Promise.all([t.e(0),t.e(1),t.e(21)]).then(t.bind(null,"0df2"))}},{path:"register",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"d895"))}},{path:"colores",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"dd44"))}},{path:"numeros",component:function(){return Promise.all([t.e(0),t.e(1),t.e(22)]).then(t.bind(null,"7ac5"))}},{path:"tiempo",component:function(){return Promise.all([t.e(0),t.e(1),t.e(25)]).then(t.bind(null,"b9d0"))}},{path:"juego_memoria",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0a9d"))}},{path:"juego_orden_numero",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"b0d3"))}},{path:"juego_ahorcado_1",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"db95"))}},{path:"juego_ahorcado",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"dd85"))}},{path:"gramar",component:function(){return Promise.all([t.e(0),t.e(1),t.e(31)]).then(t.bind(null,"728d"))}},{path:"chat",component:function(){return Promise.all([t.e(0),t.e(1),t.e(32)]).then(t.bind(null,"988a"))}},{path:"animales",component:function(){return Promise.all([t.e(0),t.e(1),t.e(23)]).then(t.bind(null,"d754"))}},{path:"insectos",component:function(){return Promise.all([t.e(0),t.e(1),t.e(37)]).then(t.bind(null,"1af6"))}},{path:"semana1",component:function(){return Promise.all([t.e(0),t.e(1),t.e(19)]).then(t.bind(null,"5a77"))}},{path:"semana2",component:function(){return Promise.all([t.e(0),t.e(1),t.e(4)]).then(t.bind(null,"545c"))}},{path:"semana3",component:function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,"42f7"))}},{path:"semana5",component:function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,"da06"))}},{path:"semana4",component:function(){return Promise.all([t.e(0),t.e(1),t.e(9)]).then(t.bind(null,"b7cf"))}},{path:"semana6",component:function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,"7da0"))}},{path:"semana7",component:function(){return Promise.all([t.e(0),t.e(1),t.e(20)]).then(t.bind(null,"965c"))}},{path:"arbustos_arboles",component:function(){return Promise.all([t.e(0),t.e(1),t.e(26)]).then(t.bind(null,"2690"))}},{path:"chacra_campo",component:function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,"5e16"))}},{path:"cuerpo_humano",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"4d0b"))}},{path:"familia",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8422"))}},{path:"lugares",component:function(){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,"56f0"))}},{path:"minerales",component:function(){return Promise.all([t.e(0),t.e(1),t.e(27)]).then(t.bind(null,"0b2e"))}},{path:"naturaleza",component:function(){return Promise.all([t.e(0),t.e(1),t.e(13)]).then(t.bind(null,"e1f1"))}},{path:"palabras_comunes",component:function(){return Promise.all([t.e(0),t.e(1),t.e(28)]).then(t.bind(null,"b73e"))}},{path:"pronombres",component:function(){return Promise.all([t.e(0),t.e(1),t.e(14)]).then(t.bind(null,"fd75"))}},{path:"ropa",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"076b"))}},{path:"vegetales",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"7b26"))}},{path:"verbos_infinitivos",component:function(){return Promise.all([t.e(0),t.e(1),t.e(29)]).then(t.bind(null,"cea4"))}}]}];T.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"e51e"))}});var V=T;i["a"].use(C["a"]);var $=function(){var e=new C["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:V,mode:"hash",base:""});return e},z=function(){return B.apply(this,arguments)};function B(){return B=a()(u.a.mark((function e(){var n,t,r;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof E){e.next=6;break}return e.next=3,E({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=E;case 7:if(n=e.t0,"function"!==typeof $){e.next=14;break}return e.next=11,$({Vue:i["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=$;case 15:return t=e.t1,n.$router=t,r={router:t,store:n,render:function(e){return e(w)}},r.el="#q-app",e.abrupt("return",{app:r,store:n,router:t});case 20:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}var M=t("a925"),Q={failed:"Action failed",success:"Action was successful"},W={"en-us":Q};i["a"].use(M["a"]);var q=new M["a"]({locale:"en-us",fallbackLocale:"en-us",messages:W}),J=function(e){var n=e.app;n.i18n=q},K=t("bc3a"),L=t.n(K);function Y(){return F.apply(this,arguments)}function F(){return F=a()(u.a.mark((function e(){var n,t,r,a,o,l,s,c,p;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:n=e.sent,t=n.app,r=n.store,a=n.router,o=!0,l=function(e){o=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),c=[J,void 0,k],p=0;case 11:if(!(!0===o&&p<c.length)){e.next=29;break}if("function"===typeof c[p]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[p]({app:t,router:a,store:r,Vue:i["a"],ssrContext:null,redirect:l,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:p++,e.next=11;break;case 29:if(!1!==o){e.next=31;break}return e.abrupt("return");case 31:new i["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),F.apply(this,arguments)}i["a"].prototype.$axios=L.a,Y()},"31cd":function(e,n,t){}},[[0,3,0]]]);