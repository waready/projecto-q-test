(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"000f":function(t,n,r){},"0a9d":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"bg-color-blue"},[r("div",{staticClass:"row"},[r("div",{staticClass:"center"},[r("q-btn",{attrs:{label:"Jugar de Nuevo",size:"md",color:"purple"},on:{click:t.reset}})],1)])]),r("ScoreBoard",{attrs:{score:t.score},on:{reset:t.reset}}),r("section",{staticClass:"grid"},t._l(t.theCards,(function(n){return r("Card",{key:n.id,attrs:{card:n,cardTransform:t.cardTransform},on:{tapped:t.cardTapped}})})),1)],1)},i=[],a=(r("456d"),r("8a81"),r("9986"),r("8e6e"),r("9523")),s=r.n(a),c=(r("d25f"),r("7514"),r("6d67"),r("2fdb"),r("6762"),r("f751"),function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{class:t.cardClasses,style:t.cardTransform,on:{click:t.tap}},[r("div",{staticClass:"card__inner"},[r("div",{staticClass:"card__front"}),r("div",{staticClass:"card__back",attrs:{"data-matchkey":t.card.matchKey}},[r("img",{staticClass:"card__img",attrs:{src:""+t.card.imgUrl}})])])])}),o=[],u={name:"Card",props:{card:{type:Object,default:function(){}},cardTransform:{type:String,default:function(){return""}}},data:function(){return{orientation:{alpha:4,beta:0,gamma:0}}},computed:{cardClasses:function(){return{card:!0,"card--flipped":this.card.flipped,"card--matched":this.card.matched}}},created:function(){window.addEventListener("deviceorientation",this.onDeviceTilt,!1)},methods:{onDeviceTilt:function(t){this.orientation.alpha=t.alpha,this.orientation.beta=t.beta,this.orientation.gamma=t.gamma},tap:function(){this.$emit("tapped",this.card.id)},randomFromRange:function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}}},d=u,f=(r("fa59"),r("2877")),l=Object(f["a"])(d,c,o,!1,null,"0db87f1c",null),h=l.exports,p=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{},[r("div",{},[r("span",{staticClass:"text"},[t._v("Intentos: "+t._s(t.turnCount))]),r("div",t._l(t.score,(function(t){return r("span",{key:t.id,class:"turn turn--"+t})})),0)])])},m=[],v={name:"ScoreBoard",props:{score:{type:Array,default:function(){return null}}},computed:{matchCount:function(){return this.score.filter((function(t){return"match"===t})).length},turnCount:function(){return this.score.length}}},b=v,g=(r("4b4f"),Object(f["a"])(b,p,m,!1,null,"20061d56",null)),C=g.exports;function T(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function y(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?T(Object(r),!0).forEach((function(n){s()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var O=["triangle","star","rhombus","square","pentagon","hexagon","oval","circle"],w=[];function _(t){for(var n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),e=[t[r],t[n]];t[n]=e[0],t[r]=e[1]}return t}function j(){return _(w),{totalFlips:0,theCards:w,flipsThisTurn:0,turnCount:0,firstFlipID:null,firstFlipMatchKey:null,score:[],cardTransform:null}}O.forEach((function(t){var n={matchKey:t,flipped:!1,id:"".concat(t,"-a"),imgUrl:"statics/images/shapes/".concat(t,".png"),matched:!1},r=n;w.push(r);var e=y({},n);e.id="".concat(t,"-b"),w.push(e)}));var k={name:"App",components:{Card:h,ScoreBoard:C},data:function(){return j()},computed:{matchCount:function(){return this.theCards.filter((function(t){return!0===t.matched})).length/2}},mounted:function(){},created:function(){window.addEventListener("deviceorientation",this.handleOrientation)},methods:{askMotionPermission:function(){var t=this;window.DeviceMotionEvent.requestPermission().then((function(n){"granted"===n?window.addEventListener("deviceorientation",t.handleOrientation):alert("OK, but you’re missing out...")}))},handleOrientation:function(t){this.cardTransform="transform: rotateZ(".concat(t.alpha,"deg) rotateY(").concat(t.beta,"deg) rotateX(").concat(t.gamma,"deg)")},incrementFlipsThisTurn:function(){this.flipsThisTurn++},cardTapped:function(t){var n=this.theCards.find((function(n){return n.id===t}));n.flipped||(this.incrementFlipsThisTurn(),1===this.flipsThisTurn&&this.runTurn1(n),2===this.flipsThisTurn&&this.runTurn2(n))},runTurn1:function(t){this.flipCard(t.id),this.firstFlipID=t.id,this.firstFlipMatchKey=t.matchKey},runTurn2:function(t){this.flipCard(t.id),this.checkMatch(t)},checkMatch:function(t){var n=this;setTimeout((function(){if(t.matchKey===n.firstFlipMatchKey){n.flipsThisTurn=0;var r=n.theCards.map((function(r){return[t.id,n.firstFlipID].includes(r.id)?y(y({},r),{},{matched:!0}):r}));n.theCards=r,n.score.push("match")}else n.flipCard(t.id),n.flipCard(n.firstFlipID),n.flipsThisTurn=0,n.score.push("miss");n.turnCount++}),1e3)},flipCard:function(t){var n=this.theCards.map((function(n){return n.id===t?y(y({},n),{},{flipped:!n.flipped}):n}));this.theCards=n},reset:function(){Object.assign(this.$data,j())}}},D=k,F=(r("db54"),r("9c40")),M=r("eebe"),E=r.n(M),P=Object(f["a"])(D,e,i,!1,null,null,null);n["default"]=P.exports;E()(P,"components",{QBtn:F["a"]})},"4b4f":function(t,n,r){"use strict";var e=r("f1f9"),i=r.n(e);i.a},8464:function(t,n,r){},db54:function(t,n,r){"use strict";var e=r("8464"),i=r.n(e);i.a},f1f9:function(t,n,r){},fa59:function(t,n,r){"use strict";var e=r("000f"),i=r.n(e);i.a}}]);