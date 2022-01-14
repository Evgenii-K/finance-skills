<template>
  <q-page class="main__container">
    Главная
    <button-primary
      label="Add to IndexDB"
      @click="addCollection"
    />
    <button-primary
      label="Get from IndexDB"
      @click="getCollection"
    />
    <button-primary
      label="Delete from IndexDB"
      @click="deleteCollection"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ScoopaBase } from 'scoopabase'
import ButtonPrimary from '../../components/baseComponents/btnPrimary.vue'


export default defineComponent({
  name: 'Main',
  components: {
    ButtonPrimary
  },
  setup() {
    let db = new ScoopaBase('finance')
    db.collection('skill')

    const addCollection = () => {
      db.collection('skill')
        .add({
          id: 2,
          name: 'Vladimir',
          age: 18,
          cash: 10000
        }, 'key')
        .catch(e => console.log(e))
    }

    const getCollection = () => {
      db.collection('skill')
        .documents$
        .subscribe(data => {
          console.log(data);
        })
        .closed
    }

    const deleteCollection = () => {
      db.collection('skill')
        .clearAll()
        .catch(e => console.log(e))
    }

    return {
      addCollection,
      getCollection,
      deleteCollection,
    }
  },
})
</script>
<style scoped lang="sass">
</style>
