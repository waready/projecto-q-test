<template>
<div>

  <div id="hangman">
      <div class="q-pa-md q-gutter-sm">
      <q-btn label="PISTA" color="primary" @click="bar2 = true" />
      <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
        <q-card class="bg-deep-orange-6 text-white">
          <q-bar>
            <!-- <q-icon name="network_wifi" />
            <q-icon name="network_cell" />
            <q-icon name="battery_full" />
            <div>9:34</div> -->

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-h6">Pista</div>
          </q-card-section>

          <q-card-section>
            {{Enunciado}}
          </q-card-section>
        </q-card>
      </q-dialog>

    </div>

    <div align-h="center">
      <q-btn class="q-mx-sm"  color="purple" @click="simulateColores(1)" label="colores" />

      <q-btn
        color="purple"
        @click="playAgain"
        label="nuevo juego"
      />

      <q-btn class="q-mx-sm" color="purple" @click="simulateFamilia(2)" label="familia" />
      <q-btn class="q-mx-sm" color="purple" to="/juego_ahorcado_1" label="Juego crucigrama" />

    </div>


    <!-- canvas where hangman is drawn -->
    <div id="board">
      <canvas id="board-canvas"></canvas>
    </div>

    <!-- row of blank letters for the selected word -->
    <div id="word">
      <div
        class="word-blankletter"
        v-for="(letter, key) in wordDivs"
        :key="key"
        v-cloak>
          {{ letter }}
        </div>
    </div>

    <!-- keyboard -->
    <div id="keyboard">
      <div
        v-for="(row, key) in letters"
        :key="key"
        class="keyboard-row"
      >
        <letter-button
          v-for="letter in row"
          :letter="letter"
          :game-over="gameOver"
          :two-players="twoPlayers"
          :key="letter"
          @check="check(letter)"
          v-cloak />
      </div>

    </div>

  </div>
  <div class="q-mt-md row">

    <div class="col">
      <q-btn class="glossy" rounded color="deep-orange" @click="onePlayer">1 Jugador</q-btn>
    </div>
    <div class="justify-end">
      <div class="col">
        <q-btn class="glossy" rounded color="deep-orange"  @click="twoPlayer">2 Jugadores</q-btn>
      </div>
    </div>
  </div>

</div>
</template>

<script>
  var familia = [
    "Jach'atata",
    "Jach'amama",
    "Awki",
    "Tayka",
    "Yuqalla",
    "Imilla",
  ];
  var colores = [
    "Wila",
    "Q'illu",
    "Larama",
  ];

  import LetterButton from 'components/LetterButton.vue'
  export default {
    components: {
      LetterButton
    },
    props: {
      semana2:true,
      words: {
        type: Array,
        default: () => [
          "Maya",
          "Paya",
          "Kimsa",
          "Pusi",
          "Phisqa",
          "Suxta",
          "Paqallqu",
          "Kimsaqallqu",
          "Llätunka",
          ]
       // default:numeros
      },
      showPlayAgain: {
        type: Boolean,
        default: true
      },
      lang: {
        type: String,
        default: 'AY',
        validator: function (value) {
          // The value must match one of these strings
          return ['EN','AY','ES'].indexOf(value) !== -1
        }
      }
    },
    computed: {
      wordsUpperCased: function () {
        return this.words.map(word => word.toUpperCase())
      },
      mayusculas(){
        if (this.newArray == 1)
          return colores.map(word => word.toUpperCase())
        else if (this.newArray == 2)
          return familia.map(word => word.toUpperCase())
        else if (this.newArray == 3)
          return familia.map(word => word.toUpperCase())
        else
          return this.words.map(word => word.toUpperCase())
      },
      winMessage: function () {
        let winMessage
        switch (this.lang) {
          case 'ES':
            winMessage = 'Ganaste!'
            break
          case 'AY':
            winMessage = 'Atipaña!'
            break
          default:
            winMessage = 'You win!'
            break
        }
        return winMessage
      },
      loseMessage: function () {
        let loseMessage
        switch (this.lang) {
          case 'ES':
            loseMessage = 'Perdiste!'
            break
          case 'AY':
            loseMessage = 'Chhaqhaña!'
            break
          default:
            loseMessage = 'You lost!'
            break
        }
        return loseMessage
      }
    },
    filters: {
      capitalize: function (value) {
        return value.toUpperCase()
      }
    },
    data () {
      return {
        bar2: true,
        Enunciado:"La palabra pueden ser numeros del 1 al 10.",
        newArray:null,
        // keyboard letters
        letters: [
          ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
          ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
          ["Z", "X", "C", "V", "B", "N", "M", "Ñ","'", "Ä"]
        ],
        // currentWord will be set to a random word from above list
        currentWord: "",
        // each element in this array is a letter in the word
        wordDivs: [],
        // to count the number of wrong guesses
        guesses: 0,
        gameOver: false,
        lose: false,
        twoPlayers: false,
        // will be set to the canvas element in mounted()
        canvas: "",
        // will be set to the canvas 2d context
        ctx: ""
      }
    },
    methods: {
      randomInteger: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      // draws the gallows
      drawGallows: function(ctx) {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.fillStyle = "#FF9800"
        ctx.strokeStyle = "#FF9800"
        ctx.beginPath()
        // left side
        ctx.moveTo(this.canvas.width / 10, this.canvas.height / 10)
        ctx.lineTo(this.canvas.width / 10, this.canvas.height * 0.95)
        // bottom side
        ctx.lineTo(this.canvas.width * 0.8, this.canvas.height * 0.95)
        // top side
        ctx.moveTo(this.canvas.width / 10, this.canvas.height / 10)
        ctx.lineTo(this.canvas.width * 0.4, this.canvas.height / 10)
        // hanging notch
        ctx.lineTo(this.canvas.width * 0.4, this.canvas.height / 5)
        ctx.stroke()
        ctx.closePath()
      },
      // fill this.wordDivs with empty strings to create the orange blanks
      makeBlanks: function() {
        for (var i = 0; i < this.currentWord.length; i++) {
          this.wordDivs.push("")
        }
      },
      // draws the appropriate part of the hanging man and/or 'game over'
      updateCanvas: function(ctx) {
        // this.drawGallows(ctx);
        // draw the head
        if (this.guesses === 0) {
          ctx.beginPath()
          ctx.arc(this.canvas.width * 0.4, (this.canvas.height / 5) + 20, 20, 0, 2 * Math.PI)
          ctx.stroke()
          ctx.closePath()
        }
        // draw the torso
        else if (this.guesses === 1) {
          ctx.beginPath()
          ctx.moveTo(this.canvas.width * 0.4, (this.canvas.height / 5) + 40)
          ctx.lineTo(this.canvas.width * 0.4, this.canvas.height / 2)
          ctx.stroke()
          ctx.closePath()
        }
        // draw the right leg
        else if (this.guesses === 2) {
          ctx.beginPath()
          ctx.moveTo(this.canvas.width * 0.4, this.canvas.height / 2)
          ctx.lineTo((this.canvas.width * 0.4) + 30, this.canvas.height * 0.7)
          ctx.stroke()
          ctx.closePath()
        }
        // draw the left leg
        else if (this.guesses === 3) {
          ctx.beginPath()
          ctx.moveTo(this.canvas.width * 0.4, this.canvas.height / 2)
          ctx.lineTo((this.canvas.width * 0.4) - 30, this.canvas.height * 0.7)
          ctx.stroke()
          ctx.closePath()
        }
        // draw the right arm
        else if (this.guesses === 4) {
          ctx.beginPath()
          ctx.moveTo(this.canvas.width * 0.4, (this.canvas.height / 5) + 55)
          ctx.lineTo((this.canvas.width * 0.4) + 35, (this.canvas.height / 2) + 10)
          ctx.stroke()
          ctx.closePath()
        }
        // draw the left arm and handle game over
        else if (this.guesses === 5) {
          ctx.beginPath()
          ctx.moveTo(this.canvas.width * 0.4, (this.canvas.height / 5) + 55)
          ctx.lineTo((this.canvas.width * 0.4) - 35, (this.canvas.height / 2) + 10)
          ctx.stroke()
          ctx.closePath()
          // game over
          ctx.font = "24px Roboto, sans-serif"
          ctx.fillText(this.loseMessage, this.canvas.width * 0.4 - 30, this.canvas.height * 0.9)
          this.gameOver = true
          this.lose = true
          this.$emit('gameFinished', this.currentWord, this.lose)
          // fill in the word with the correct answer
          for (var i = 0; i < this.currentWord.length; i++) {
            this.$set(this.wordDivs, i, this.currentWord[i]);
          }
        }
        this.guesses++
      },
      // check the chosen letter when a letter component emits 'check'
      check: function(letter) {
        if (!this.gameOver) {
          var guessCorrect = false
          // check if the letter is in the word, if so, fill it in
          for (var i = 0; i < this.currentWord.length; i++) {
            if (letter == this.currentWord[i]) {
              this.$set(this.wordDivs, i, letter)
              guessCorrect = true
            }
          }
          // if there are no more blanks in the word, you win
          if (!this.wordDivs.some(function(value) {return value == ""})) {
            this.gameOver = true
            this.ctx.font = "24px Roboto, sans-serif"
            this.ctx.fillText(this.winMessage, this.canvas.width * 0.4 - 30, this.canvas.height * 0.9)
            this.$emit('gameFinished', this.currentWord, this.lose)
          }
          // if they guess wrong, draw the man
          if (!guessCorrect) {
            this.updateCanvas(this.ctx)
          }
        }
      },
      // re-initializes the game
      restart: function() {
        this.gameOver = false
        this.lose = false
        this.guesses = 0
        this.wordDivs.splice(0)
        this.drawGallows(this.ctx)
        this.makeBlanks()
      },
      // resets the game to one-player mode and chooses a new word
      onePlayer: function() {
        if (this.twoPlayers) {
          this.twoPlayers = false;
          this.currentWord = this.getRandomWord()
          this.restart();
        }
      },

      // starts two-player mode and prompts the user to enter a word
      twoPlayer: function() {
        this.playAgain()
        if (!this.twoPlayers) {
          this.gameOver = true;
          this.twoPlayers = true;
          this.wordDivs.splice(0);
          try {
            this.currentWord = prompt("Ingresa tu Palabra!").toUpperCase();
          }
          catch(e) {
            this.onePlayer();
            return;
          }
          var letters = /^[A-Za-z]+$/;
          while (!letters.test(this.currentWord)) {
            try {
              this.currentWord = prompt("Solamente acepta palabras del teclado virtual:").toUpperCase();
            }
            catch(e) {
              this.onePlayer();
              return;
            }
          }
          this.restart();
        }
      },

      // chooses a new word and resets the game when 'play again' is clicked
      playAgain: function() {
        this.Enunciado = "La palabra pueden ser numeros del 1 al 10."
        this.currentWord = this.getRandomWord()
        this.restart()
        this.twoPlayers = false
      },
      getPalabra(){
        return this.mayusculas[this.randomInteger(0, this.mayusculas.length -1 )]
      },
      getRandomWord: function () {
        return this.wordsUpperCased[this.randomInteger(0, this.wordsUpperCased.length - 1)]
      },
      simulateColores(){
        this.bar2 = true,
        this.Enunciado = "Es un color primario"
        this.newArray = 1
        this.currentWord = this.getPalabra()
        this.restart()
        this.twoPlayers = false
      },
      simulateFamilia(){
        this.bar2 = true,
        this.Enunciado = "Es un familiar de primer grado"
        this.newArray = 2
        this.currentWord = this.getPalabra()
        this.restart()
        this.twoPlayers = false
      },
       simulateSemana(){
        this.bar2 = true,
        this.Enunciado = "Es un familiar de primer grado"
        this.newArray = 2
        this.currentWord = this.getPalabra()
        this.restart()
        this.twoPlayers = false
      }


    },
    // identify the canvas element and initialize it, draw the gallows, choose a word, and draw the blanks.
    mounted: function() {
      this.canvas = document.getElementById("board-canvas")
      this.canvas.width = document.getElementById("board").offsetWidth
      this.canvas.height = document.getElementById("board").offsetHeight
      this.ctx = this.canvas.getContext("2d")
      this.ctx.lineWidth = 2
      this.drawGallows(this.ctx)
      this.currentWord = this.getRandomWord()
      this.makeBlanks()
    }

  }
</script>

<style scoped>

html, body {
  align-items: center;
  background-color: #F5F5F6;
  color: #333;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  width: 100%;
}
/* II. helper classes applied by js */
.hidden {
  display: none;
}
.orange {
  background-color: #ff9800;
}
/* III. the app and its contents */
#hangman {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  width: 100%;
}
/* B. canvas container */
#board {
  background-color: white;
  box-shadow: 0 2px 5px #D0D0D0;
  flex: 2 1 auto;
  margin: 10px 0 0 0;
  max-width: 500px;
  width: 95%;
  min-width: 320px;
  min-height: 400px;
}
/* C. blank letters */
#word {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0 18px 0;
}
.word-blankletter {
  align-items: flex-end;
  background-color: #ff9800;
  box-shadow: 0 2px 5px #D0D0D0;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0 2px 2px 2px;
  width: 20px;
}
/* D. keyboard */
#keyboard {
  align-items: center;
  display: flex;
  flex: 2 1 auto;
  flex-direction: column;
}
.keyboard-row {
  display: flex;
}
.keyboard-row-letter {
  height: 40px;
  width: 28px;
}
/* E. game-option buttons */
#buttons {
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px 0;
  max-width: 700px;
  width: 95%;
}
.buttons-button {
  height: 25px;
  font-size: 1em;
  margin: auto;
}
</style>
