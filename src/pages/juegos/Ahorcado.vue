<template>
<div>
  <template>
  <div class="q-pa-md q-gutter-sm">

    <q-btn label="PISTA" color="primary" @click="bar2 = true" />




    <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-icon name="network_wifi" />
          <q-icon name="network_cell" />
          <q-icon name="battery_full" />
          <div>9:34</div>

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Pista</div>
        </q-card-section>

        <q-card-section>
         Las palabras pueden ser numeros del 1 al 5.
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>


    <hangman-game
    :words="words"
    :lang="lang"
    :show-play-again="false"
    :winMessage="winMessage"
    :loseMessage="loseMessage"
    @gameFinished="gameFinished"
  />
</div>

</template>
<script>
import 'vue-games'
export  default {
  data () {
    return {
      words: ['Maya', 'Paya', 'Kimsa', 'Pusi', 'Phisqa'],
      winMessage:  'Ganaste!',
      loseMessage:  'Prediste!',
      lang: 'ES',


      bar2: true,


    }
  },

  methods: {
    gameFinished: function (word, lose) {
      console.log('game finished!!!')
      console.log('user was guessing word:', word)
      console.log('she/he/it lost?', lose)
    }
  }
}
</script>