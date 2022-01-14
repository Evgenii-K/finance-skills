<template>
  <div class="column">
    <div class="row justify-between items-center q-mt-md">
      <button-round-back/>
      <h2>
        <slot name="title"/>
      </h2>
    </div>
    <slot name="image"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonRoundBack from '../baseComponents/btnRoundBack.vue'

export default defineComponent({
  name: 'AuthHeader',
  components: {
    ButtonRoundBack,
  },
})
</script>
<style scoped lang="sass">
</style>
