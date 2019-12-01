<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    {{mensaje}} {{reves}}
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      mensaje:"hola"
    }
  },
  computed: {
    reves(){
      return this.mensaje.split('').reverse().join('')
    }
  },
}
</script>
