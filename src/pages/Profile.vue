<template>
  <q-page>
    <button-primary
      label="Войти"
      to="/auth"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonPrimary from '../components/baseComponents/btnPrimary.vue'

export default defineComponent({
  name: 'Profile',
  components: {
    ButtonPrimary,
  },
})
</script>
