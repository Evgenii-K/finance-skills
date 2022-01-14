<template>
  <div class="base-error__wrapper q-my-md">
    <div class="base-error q-py-sm q-px-lg">
      <q-icon 
        name="mdi-alert-circle-outline"
        class="base-error-icon"
      />
      {{text}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseError',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped lang="sass">
.base-error__wrapper
  display: flex
  justify-content: flex-end
.base-error
  border-radius: 10px
  background-color: $negative
  color: white
  display: flex
  grid-gap: 20px
  align-items: center
.base-error-icon
  font-size: 24px
  color: white
</style>