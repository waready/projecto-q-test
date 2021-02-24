<template>
  <div>
    <div class="row justify-between">
      <h2 class="q-ma-none q-mb-md">Saminaka / Colores</h2>
      <button @click="buscar()">buscar</button>
      <q-input
        outlined
        v-model="TextoBuscado"
        label="Buscar palabra"
        class="q-mb-md col-md-3 col-sm-12 col-xs-12"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            TextoBuscado:"",
        }
    },
    methods: {
        buscar(){
            this.$emit('new', this.TextoBuscado);
            alert(this.TextoBuscado);
        }
    },
};
</script>
