<template>
  <q-btn
    round 
    color="primary"
    size="md"
    unelevated
    @click="$router.go(-1)"
  >
    <q-icon name="mdi-plus-thick" color="white"/>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonRoundPlus',
})
</script>

<style scoped lang="sass">
</style>