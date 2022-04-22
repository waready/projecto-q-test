<template>
  <div id="app" class="">

    <!-- <input type="text" v-model="bar2"> -->
    <div class="bg-color-blue">
      <!-- <button @click="askMotionPermission" class="btn">
        Enable motion
      </button> -->
      
      <pre>
      {{ $data.theCards }}
      </pre>
    <div id="hangman" class="q-py-sm">
      <q-btn  label="PISTA" color="primary" @click="bar2 = true"/>
    </div>

    <q-dialog
      v-model="bar2"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-deep-orange-6 text-white">
        <q-bar>


          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Pista</div>
        </q-card-section>

        <q-card-section>
          Une los pares correspondientes
        </q-card-section>
      </q-card>
    </q-dialog>


     <div class="row">
       <div class="center">
          <q-btn label="Jugar de Nuevo"   size="md" color="purple" @click="reset"  />
       </div>

       
     </div>
    </div>

    <ScoreBoard
      :score="score"
      @reset="reset"
    />
    <section
      class="grid"
    >
      <Card
        v-for="card in theCards"
        :key="card.id"
        :card="card"
        :cardTransform="cardTransform"
        @tapped="cardTapped"
      />
    </section>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import ScoreBoard from './components/ScoreBoard.vue';

const shapes = [
  'elephant', 
  'lion', 
  'fox', 
  //'tiger', 
  //'rabbit', 
  //'owl'
];

// const shapes = [
//   'triangle',
//   'star',
//   'rhombus',
//   'square',
//   'pentagon',
//   'hexagon',
//   'oval',
//   'circle'];

const cards = [];

shapes.forEach(item => {
  const card = {
    matchKey: item,
    flipped: false,
    id: `${item}-a`,
    imgUrl: `statics/images/animals/${item}.png`,
    matched: false,
  };
  const card1 = {
    matchKey: item,
    flipped: false,
    id: `${item}-b`,
    imgUrl: `statics/images/shapes/${item}.png`,
    matched: false,
  };
  // first copy
  const cardA = card;
  cards.push(cardA);
  // second copy


  // const cardB = { ...card };
  // cardB.id = `${item}-b`;
  const cardB = card1;
  cards.push(cardB);

});

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


function initState() {

  shuffle(cards);
  return {
    bar2:true,
    totalFlips: 0,
    // theCards: this.shuffle(cards),
    theCards: cards,
    flipsThisTurn: 0,
    turnCount: 0,
    firstFlipID: null,
    firstFlipMatchKey: null,
    score: [],
    cardTransform: null,
  };
}

export default {
  name: 'App',
  components: {
    Card,
    ScoreBoard,
  },

  data() {
    return initState();
    
  },

  computed: {
    matchCount() {
      return this.theCards.filter(card => card.matched === true).length / 2;
    },
  },

  mounted() {
    // if (navigator.serviceWorker && !navigator.serviceWorker.controller) { navigator.serviceWorker.register('/serviceworker.js'); }
  },

  created() {
    // attempt to use acceleromater for iOS less than 13
    window.addEventListener('deviceorientation', this.handleOrientation);
  },

  methods: {
    askMotionPermission() {
      window.DeviceMotionEvent
        .requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', this.handleOrientation);
          } else {
            alert('OK, but you’re missing out...');
          }
        });
    },

    handleOrientation(event) {
      this.cardTransform =  `transform: rotateZ(${event.alpha}deg) rotateY(${event.beta}deg) rotateX(${event.gamma}deg)`;
    },

    incrementFlipsThisTurn() {
      this.flipsThisTurn ++;
    },

    cardTapped(tappedCardID) {
      // store a copy of the card data as tappedCard
      const tappedCard = this.theCards.find(obj => obj.id === tappedCardID);

      if (tappedCard.flipped) {
        return;
      }

      // Increment flip count for this turn
      this.incrementFlipsThisTurn();

      if (this.flipsThisTurn === 1) {
        this.runTurn1(tappedCard);

      }
      if (this.flipsThisTurn === 2) {
        this.runTurn2(tappedCard);
      }
    },

    runTurn1(tappedCard) {
      // flip the card face up
      this.flipCard(tappedCard.id);

      // store ID and Matchkey of first flipped card
      this.firstFlipID = tappedCard.id;
      this.firstFlipMatchKey = tappedCard.matchKey;
    },

    runTurn2(tappedCard) {
      // flip the card face up
      this.flipCard(tappedCard.id);
      this.checkMatch(tappedCard);
    },

    checkMatch(tappedCard) {
      // check match
      setTimeout(() => {
        if (tappedCard.matchKey === this.firstFlipMatchKey) {
          // Match!
          // reset flips counter
          this.flipsThisTurn = 0;
          // update the 2 cards 'matched' prop
          const newCards = this.theCards.map(card => ([tappedCard.id, this.firstFlipID].includes(card.id)) ? { ...card, matched: true } : card );
          this.theCards = newCards;

          // update score
          this.score.push('match');

        } else {
          // Not a match
          // Turn both cards back face down
          this.flipCard(tappedCard.id);
          this.flipCard(this.firstFlipID);
          this.flipsThisTurn = 0;
          // update the score
          this.score.push('miss');
        }
        // increment turn count
        this.turnCount ++;

      }, 1000);
    },


    flipCard(tappedCardID) {
      const newCards = this.theCards.map(card => card.id === tappedCardID ? { ...card, flipped: !card.flipped } : card );
      // update cards
      this.theCards = newCards;
    },
    reset() {
      Object.assign(this.$data, initState());
    },
  },
};

</script>

<style lang="scss" >

#hangman {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  width: 100%;
}
body {
  background: #222222;
 
  padding: 0;
  margin: 0;
  font-family: arial, helvetica, sans-serif;
  font-size: 15px;
}

.toolbar {
  position: fixed;
  right: 12px;
  top: 15px;
  z-index: 3;
}



.btn:active {
  color: black;
  //background-color: white;
}



.app {
  margin: 0;
  padding: 20px;

  @media (min-width: 700px) {
    padding: 50px;
  }
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: calc(100vw -80px);
  height: calc(100vh - 310px);
}

.grid__cell {
  width: 100%;
  height: 100%;
}
.center {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  width: 100%;
}

</style>
