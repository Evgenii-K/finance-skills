<template>
  <q-btn
    round 
    color="white"
    size="md"
    unelevated
    @click="$router.go(-1)"
  >
    <q-icon name="eva-arrow-back" color="dark"/>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonRoundBack',
})
</script>

<style scoped lang="sass">
</style>