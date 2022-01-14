<template>
  <q-page>
  <button-primary
    label="Новая игра"
    to="/game"
  />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonPrimary from '../components/baseComponents/btnPrimary.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    ButtonPrimary,
  },
})
</script>
