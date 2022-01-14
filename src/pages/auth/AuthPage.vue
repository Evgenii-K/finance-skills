<template>
  <q-page class="auth__container">
    <h1 class="q-mt-xl">
      FINance skills ждет вас
    </h1>

    <sub-background>
      <div class="q-gutter-y-lg column justify-center q-mx-lg q-mt-lg q-pt-sm">
        <div
          v-for="(button, idx) in buttons"
          :key="idx"
        >
          <q-btn 
            class="auth__button-mail full-width"
            :to="`/auth/${button.path}`"
          >
          <div class="button-mail--label">
            <div class="justify-center">
              <q-icon 
                :name="button.iconName" 
                :style="`color: ${button.iconColor};`"
              />
            </div>
            <div class="self-center justify-center">
              {{button.label}}
            </div>
          </div>
          </q-btn>
        </div>

        <button-primary
          label="Зарегистрироваться"
          to="/auth/signup"
        />

    </div>

    </sub-background>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubBackground from '../../components/auth/SubBackground.vue'
import ButtonPrimary from '../../components/baseComponents/btnPrimary.vue'

export default defineComponent({
  name: 'AuthPage',
  components: {
    SubBackground,
    ButtonPrimary,
  },
  setup() {
    const buttons = [
        { iconName: 'svguse:icons/Icon_google.svg#icon_google|4 2 27 27', iconColor: 'rgba(23, 114, 234, 1)', label: 'Войти с Google', path: 'google'},
        { iconName: 'facebook', iconColor: 'rgba(23, 114, 234, 1)', label: 'Войти с Facebook', path: 'facebook'},
        { iconName: 'alternate_email', iconColor: 'rgba(38, 96, 179, 1)', label: 'Войти через почту', path: 'login'},
      ]
    
    return {
      buttons,
    }
  }
})
</script>
<style scoped lang="sass">
.auth__button-mail
  position: relative
  background-color: #fff
  border-radius: 12px
  height: 50px
  font-weight: 700
  font-size: 16px
.button-mail--label
  position: absolute
  display: grid
  grid-template-columns: 1fr 2fr 1fr
  width: 100%
  cursor: pointer
</style>
