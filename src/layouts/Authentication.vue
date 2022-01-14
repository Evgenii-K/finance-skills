<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="auth__container">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">

export default {
  name: 'AuthenticationLayout',
}
</script>
<style lang="sass" scoped>
.auth__container
  position: relative
  background: center top no-repeat url('~assets/img/Background_greetings.jpg')
  background-origin: border-box
  background-size: cover

@media (max-width: 500px)
  .auth__container
    background-size: contain
  
</style>
