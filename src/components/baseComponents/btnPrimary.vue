<template>
  <q-btn
    :disable="disable"
    color="primary"
    :label="label"
    class="login__button-signIn full-width q-mb-lg"
    text-color="dark"
    type="submit"
    unelevated
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonPrimary',
  props: {
    disable: {
      type: Boolean, 
      default: false
    },
    label: {
      type: String,
      default: 'Primary'
    }
  }
})
</script>

<style scoped lang="sass">
.login__button-signIn
  border-radius: 12px
  height: 60px
</style>