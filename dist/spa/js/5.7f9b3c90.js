(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"58f7":function(t,s,a){},a150:function(t,s,a){"use strict";var e=a("58f7"),i=a.n(e);i.a},dd85:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{attrs:{id:"hangman"}},[a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-btn",{attrs:{label:"PISTA",color:"primary"},on:{click:function(s){t.bar2=!0}}}),a("q-dialog",{attrs:{persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},model:{value:t.bar2,callback:function(s){t.bar2=s},expression:"bar2"}},[a("q-card",{staticClass:"bg-deep-orange-6 text-white"},[a("q-bar",[a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Pista")])]),a("q-card-section",[t._v("\r\n            "+t._s(t.Enunciado)+"\r\n          ")])],1)],1)],1),a("div",{attrs:{"align-h":"center"}},[a("q-btn",{staticClass:"q-mx-sm",attrs:{color:"secondary",label:"colores"},on:{click:function(s){return t.simulateColores(1)}}}),a("q-btn",{attrs:{color:"purple",label:"nuevo juego"},on:{click:t.playAgain}}),a("q-btn",{staticClass:"q-mx-sm",attrs:{color:"secondary",label:"familia"},on:{click:function(s){return t.simulateFamilia(2)}}})],1),t._m(0),a("div",{attrs:{id:"word"}},t._l(t.wordDivs,(function(s,e){return a("div",{key:e,staticClass:"word-blankletter"},[t._v("\r\n          "+t._s(s)+"\r\n        ")])})),0),a("div",{attrs:{id:"keyboard"}},t._l(t.letters,(function(s,e){return a("div",{key:e,staticClass:"keyboard-row"},t._l(s,(function(s){return a("letter-button",{key:s,attrs:{letter:s,"game-over":t.gameOver,"two-players":t.twoPlayers},on:{check:function(a){return t.check(s)}}})})),1)})),0)]),a("div",{staticClass:"q-mt-md row"},[a("div",{staticClass:"col"},[a("q-btn",{staticClass:"glossy",attrs:{rounded:"",color:"deep-orange"},on:{click:t.onePlayer}},[t._v("1 Jugador")])],1),a("div",{staticClass:"justify-end"},[a("div",{staticClass:"col"},[a("q-btn",{staticClass:"glossy",attrs:{rounded:"",color:"deep-orange"},on:{click:t.twoPlayer}},[t._v("2 Jugadores")])],1)])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"board"}},[a("canvas",{attrs:{id:"board-canvas"}})])}],r=(a("6d67"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"keyboard-row-letter",attrs:{id:t.letter,disabled:t.disabled},on:{click:function(s){return t.clicked()}}},[t._v("\n  "+t._s(t.letter)+"\n  \n")])}),n=[],o={props:["letter","gameOver","twoPlayers"],data:function(){return{disabled:!1}},methods:{clicked:function(){this.disabled=!0,this.$emit("check")}},watch:{gameOver:function(t){this.disabled=t},twoPlayers:function(t){this.disabled=!1}}},h=o,c=(a("a150"),a("2877")),l=Object(c["a"])(h,r,n,!1,null,"44fe18d5",null),d=l.exports,u=["Jach'atata","Jach'amama","Awki","Tayka","Yuqalla","Imilla"],v=["Wila","Q'illu","Larama"],g={components:{LetterButton:d},props:{words:{type:Array,default:function(){return["Maya","Paya","Kimsa","Pusi","Phisqa","Suxta","Paqallqu","Kimsaqallqu","Llätunka"]}},showPlayAgain:{type:Boolean,default:!0},lang:{type:String,default:"AY",validator:function(t){return-1!==["EN","AY","ES"].indexOf(t)}}},computed:{wordsUpperCased:function(){return this.words.map((function(t){return t.toUpperCase()}))},mayusculas:function(){return 1==this.newArray?v.map((function(t){return t.toUpperCase()})):2==this.newArray?u.map((function(t){return t.toUpperCase()})):this.words.map((function(t){return t.toUpperCase()}))},winMessage:function(){var t;switch(this.lang){case"ES":t="Ganaste!";break;case"AY":t="Atipaña!";break;default:t="You win!";break}return t},loseMessage:function(){var t;switch(this.lang){case"ES":t="Perdiste!";break;case"AY":t="Chhaqhaña!";break;default:t="You lost!";break}return t}},filters:{capitalize:function(t){return t.toUpperCase()}},data:function(){return{bar2:!0,Enunciado:"La palabra pueden ser numeros del 1 al 10.",newArray:null,letters:[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M","Ñ","'","Ä"]],currentWord:"",wordDivs:[],guesses:0,gameOver:!1,lose:!1,twoPlayers:!1,canvas:"",ctx:""}},methods:{randomInteger:function(t,s){return Math.floor(Math.random()*(s-t+1))+t},drawGallows:function(t){t.clearRect(0,0,this.canvas.width,this.canvas.height),t.fillStyle="#FF9800",t.strokeStyle="#FF9800",t.beginPath(),t.moveTo(this.canvas.width/10,this.canvas.height/10),t.lineTo(this.canvas.width/10,.95*this.canvas.height),t.lineTo(.8*this.canvas.width,.95*this.canvas.height),t.moveTo(this.canvas.width/10,this.canvas.height/10),t.lineTo(.4*this.canvas.width,this.canvas.height/10),t.lineTo(.4*this.canvas.width,this.canvas.height/5),t.stroke(),t.closePath()},makeBlanks:function(){for(var t=0;t<this.currentWord.length;t++)this.wordDivs.push("")},updateCanvas:function(t){if(0===this.guesses)t.beginPath(),t.arc(.4*this.canvas.width,this.canvas.height/5+20,20,0,2*Math.PI),t.stroke(),t.closePath();else if(1===this.guesses)t.beginPath(),t.moveTo(.4*this.canvas.width,this.canvas.height/5+40),t.lineTo(.4*this.canvas.width,this.canvas.height/2),t.stroke(),t.closePath();else if(2===this.guesses)t.beginPath(),t.moveTo(.4*this.canvas.width,this.canvas.height/2),t.lineTo(.4*this.canvas.width+30,.7*this.canvas.height),t.stroke(),t.closePath();else if(3===this.guesses)t.beginPath(),t.moveTo(.4*this.canvas.width,this.canvas.height/2),t.lineTo(.4*this.canvas.width-30,.7*this.canvas.height),t.stroke(),t.closePath();else if(4===this.guesses)t.beginPath(),t.moveTo(.4*this.canvas.width,this.canvas.height/5+55),t.lineTo(.4*this.canvas.width+35,this.canvas.height/2+10),t.stroke(),t.closePath();else if(5===this.guesses){t.beginPath(),t.moveTo(.4*this.canvas.width,this.canvas.height/5+55),t.lineTo(.4*this.canvas.width-35,this.canvas.height/2+10),t.stroke(),t.closePath(),t.font="24px Roboto, sans-serif",t.fillText(this.loseMessage,.4*this.canvas.width-30,.9*this.canvas.height),this.gameOver=!0,this.lose=!0,this.$emit("gameFinished",this.currentWord,this.lose);for(var s=0;s<this.currentWord.length;s++)this.$set(this.wordDivs,s,this.currentWord[s])}this.guesses++},check:function(t){if(!this.gameOver){for(var s=!1,a=0;a<this.currentWord.length;a++)t==this.currentWord[a]&&(this.$set(this.wordDivs,a,t),s=!0);this.wordDivs.some((function(t){return""==t}))||(this.gameOver=!0,this.ctx.font="24px Roboto, sans-serif",this.ctx.fillText(this.winMessage,.4*this.canvas.width-30,.9*this.canvas.height),this.$emit("gameFinished",this.currentWord,this.lose)),s||this.updateCanvas(this.ctx)}},restart:function(){this.gameOver=!1,this.lose=!1,this.guesses=0,this.wordDivs.splice(0),this.drawGallows(this.ctx),this.makeBlanks()},onePlayer:function(){this.twoPlayers&&(this.twoPlayers=!1,this.currentWord=this.getRandomWord(),this.restart())},twoPlayer:function(){if(this.playAgain(),!this.twoPlayers){this.gameOver=!0,this.twoPlayers=!0,this.wordDivs.splice(0);try{this.currentWord=prompt("Ingresa tu Palabra!").toUpperCase()}catch(s){return void this.onePlayer()}var t=/^[A-Za-z]+$/;while(!t.test(this.currentWord))try{this.currentWord=prompt("Solamente acepta palabras del teclado virtual:").toUpperCase()}catch(s){return void this.onePlayer()}this.restart()}},playAgain:function(){this.Enunciado="La palabra pueden ser numeros del 1 al 10.",this.currentWord=this.getRandomWord(),this.restart(),this.twoPlayers=!1},getPalabra:function(){return this.mayusculas[this.randomInteger(0,this.mayusculas.length-1)]},getRandomWord:function(){return this.wordsUpperCased[this.randomInteger(0,this.wordsUpperCased.length-1)]},simulateColores:function(){this.bar2=!0,this.Enunciado="Es un color primario",this.newArray=1,this.currentWord=this.getPalabra(),this.restart(),this.twoPlayers=!1},simulateFamilia:function(){this.bar2=!0,this.Enunciado="Es un familiar de primer grado",this.newArray=2,this.currentWord=this.getPalabra(),this.restart(),this.twoPlayers=!1}},mounted:function(){this.canvas=document.getElementById("board-canvas"),this.canvas.width=document.getElementById("board").offsetWidth,this.canvas.height=document.getElementById("board").offsetHeight,this.ctx=this.canvas.getContext("2d"),this.ctx.lineWidth=2,this.drawGallows(this.ctx),this.currentWord=this.getRandomWord(),this.makeBlanks()}},f=g,m=(a("df23"),a("9c40")),p=a("24e8"),w=a("f09f"),b=a("d847"),y=a("0016"),k=a("2c91"),P=a("05c0"),C=a("a370"),q=a("7f67"),W=a("eebe"),x=a.n(W),T=Object(c["a"])(f,e,i,!1,null,"1280abb3",null);s["default"]=T.exports;x()(T,"components",{QBtn:m["a"],QDialog:p["a"],QCard:w["a"],QBar:b["a"],QIcon:y["a"],QSpace:k["a"],QTooltip:P["a"],QCardSection:C["a"]}),x()(T,"directives",{ClosePopup:q["a"]})},df23:function(t,s,a){"use strict";var e=a("ebee"),i=a.n(e);i.a},ebee:function(t,s,a){}}]);