<template>
  <div class="">
    <div class="">
     
      <span class="text">Intentos: {{ turnCount }}</span>
      <div>
        <span v-for="turn in score" :key="turn.id" :class="`turn turn--${turn}`" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ScoreBoard',
  props: {
    score: {
      type: Array,
      default: () => null,
    },
  },

  computed: {
    matchCount() {
      return this.score.filter(turn => turn === 'match').length;
    },
    turnCount() {
      return this.score.length;
    },
  },


};

</script>

<style lang="scss" scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.text {
  color: #000;
  display: inline-block;
  font: bold 12px / 1.4 arial;
  margin-right: 20px;
}

.scoreboard {
  color: #000;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  position: fixed;
  padding: 15px 20px;
  top:0;
  left:0;
  width: 100%;

  @media (min-width: 700px) {
    padding: 15px 50px;
  }
}

.turn {
  height: 10px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 3px;
  width: 10px;
}

.turn--miss {
  border: 1px solid rgb(100, 18, 18);
  background-color: white;
}

.turn--match {
  background: rgb(250, 154, 29);
}
</style>
