<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <q-item to='/juegos'>
          <q-item-section avatar>
            <q-icon name="tv" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Programas de Tv</q-item-label>
            <q-item-label caption>Lista de programas de tv</q-item-label>
          </q-item-section>
        </q-item>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
