<template>
  <div>
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          inline-label
          outside-arrows
          mobile-arrows
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >

          <q-tab name="grammar" label="Gramatica y Vocabulario" />
          <q-tab name="pronunciacion" label="Pronunciacion" />
          <q-tab name="ejercicios" label="Ejercicios" />

        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="grammar">
            <q-card flat bordered class="my-card">
              <q-card-section>
                <numeros></numeros>
              </q-card-section>

              <q-card-section>
                <cuerpo></cuerpo>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <li v-for="(item,index) in despedidas" :key="index" style="list-style:none">{{item}}</li>
              </q-card-section>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="pronunciacion">
            <chatNum></chatNum>
          </q-tab-panel>

          <q-tab-panel name="ejercicios">
            <juegos></juegos>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script>
import numeros from "components/Numeros.vue";
import cuerpo from "../views/vocabulario/cuerpo_humano.vue"
import chatNum from "components/chatNum.vue"
import juegos from "../juegos/OrdenNumero.vue"
export default {
  components: { numeros , juegos, cuerpo, chatNum},
  data(){
     return{

       tab:"grammar"
     }
  }
}
</script>
<style>

</style>
