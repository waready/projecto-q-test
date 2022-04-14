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
        :options="[
          { label: 'Horizontal (default)', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
          { label: 'Cell', value: 'cell' },
          { label: 'None', value: 'none' },
        ]"
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
          Dar click aqui para ver los adjetivos!
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

        { name: 'ESCRITURA AYMARA',  label: 'ESCRITURA AYMARA', field: 'calories' },
        { name: 'TRADUCCIÓN LITERAL', label: 'TRADUCCIÓN LITERAL', field: 'fat' },
        { name: 'ESCRITURA CASTELLANO', label: 'ESCRITURA CASTELLANO', field: 'carbs' },

      ],
       data: [
        {

          calories: 'JANQ`U UTA',
          fat: 'BLANCA CASA',
          carbs: 'CASA BLANCA',

        },
        {

          calories: 'JISK`A IMILLA',
          fat: 'CHICA NIÑA',
          carbs: 'NIÑA CHICA',

        },
        {

          calories: 'JAYRA YUQALLA',
          fat: 'FLOJO NIÑO',
          carbs: 'NIÑO FLOJO',

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
