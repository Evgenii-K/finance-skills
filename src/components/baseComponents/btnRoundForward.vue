<template>
  <q-btn
    outline
    round 
    color="primary"
    size="md"
    unelevated
    @click="$router.go(-1)"
  >
    <q-icon name="eva-arrow-forward" color="primary"/>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonRoundForward',
})
</script>

<style scoped lang="sass">
</style>