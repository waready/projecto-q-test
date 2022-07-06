<template>
  <div class="q-pa-md">
    <q-btn label="Volver a Iniciar" push color="white" text-color="primary" @click="step = 1" class="q-mb-md" />

    <q-stepper
      v-model="step"
      header-nav
      vertical
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        :title="info.titles[0]"
        icon="settings"
        :done="step > 1"
        :header-nav="step > 1"
      >
       {{info.descripcion}}
        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        :title="info.titles[1]"
        icon="create_new_folder"
        :done="step > 2"
        :header-nav="step > 2"
      >
  <template>
    <div class="">
      <q-option-group
        v-model="separator"
        inline
        class="q-mb-md"
      />

      <q-table
        title="Ejemplo de adjetivos"
        :data="data"
        :columns="columns"
        row-key="name"
        :separator="separator"
      />
    </div>
  </template>

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Anterior" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        :title="info.titles[2]"
        icon="add_comment"
        :header-nav="step > 3"
      >
          Dar click aqui para ver los tipos de adverbios!
         <q-btn class="glossy centrar q-ml-sm" @click="obten" round color="deep-orange" icon="swap_vert" />

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="fin" />
          <q-btn flat @click="step = 2" color="primary" label="Anterior" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>


  </div>
</template>
<script>

export default {
  props:['info'],
  data () {
    return {
      step: 1,
      separator: 'vertical',
      columns: [

        { name: 'ESCRITURA AYMARA',  label: 'ESCRITURA AYMARA', field: 'aymara' },
        { name: 'ESCRITURA CASTELLANO', label: 'ESCRITURA CASTELLANO', field: 'castellano' },
        { name: 'TIPO DE ADVERBIO', label: 'TIPO DE ADVERBIO', field: 'tipo' },

      ],
       data: [
        {
          aymara: 'walja manzananaka alasiñäni',
          castellano: 'compremos bastantes manzanas',
          tipo: 'walja=bastantes(cantidad)',
        },
        {
          aymara: 'Aski jayp’ukipana',
          castellano: 'Buenas tardes',
          tipo: 'adverbio de tiempo',
        },
        {
          aymara: 'inas jichhuruxa thayächini',
          castellano: 'tal vez haga frío hoy',
          tipo: 'inasa=tal vez(duda), jichüru=hoy(tiempo)',
        },

      ]
    }
  },
  methods:{
    obten(){

     this.$emit("obtener");
    }
  }
}
</script>
<style scoped>
.centrar{
  align-text:center;
}
</style>
