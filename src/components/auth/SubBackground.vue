<template>
  <div class="sub__button-block full-width">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SubBackground',
})
</script>

<style scoped lang="sass">
.sub__button-block
  height: 434px
  position: absolute
  bottom: 0
  left: 0
  padding: 20px
  border-top-left-radius: 20px
  border-top-right-radius: 20px
  background-color: #ffffff
</style>