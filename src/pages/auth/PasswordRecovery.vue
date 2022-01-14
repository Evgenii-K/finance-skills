<template>
  <q-page class="page__content">
    <auth-header>
      <template v-slot:title>
        Забыли пароль?
      </template>
      <template v-slot:image>
        <div class="account_png q-mt-xl"></div>
      </template>
    </auth-header>

    <div class="login__error-wrapper">
      <base-error 
        v-show="isEmailValidate"
        :text="isEmailValidate"
      />
    </div>

    <sub-background>
      <div class="row justify-center full-width q-pa-xl">
        <span class="text">
          Введите почту, с помощью 
          которой вы регистрировались,
          и следуйте инструкциям из письма
        </span>
      </div>

      <form 
        class="q-gutter-y-lg"
        @submit.prevent="onSubmit"
      >
        <base-input
          type="text"
          v-model:value="email"
          placeholder="Username@gmail.com"
          icon="mdi-email-outline"
          :isValid="isEmailValidate"
          @focus="emailBlur"
          autocomplete="off"
        />
        <div class="q-mx-lg">
          <button-primary
            label="Сбросить пароль"
            :disable="!email"
          />
        </div>
      </form>
    </sub-background>

  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import SubBackground from '../../components/auth/SubBackground.vue'
import AuthHeader from '../../components/auth/AuthHeader.vue'
import BaseInput from '../../components/baseComponents/baseInput.vue'
import Validate from '../../services/validate'
import BaseError from '../../components/baseComponents/baseError.vue'
import ButtonPrimary from '../../components/baseComponents/btnPrimary.vue'

export default defineComponent({
  name: 'PasswordRecovery',
  components: {
    SubBackground,
    AuthHeader,
    BaseInput,
    BaseError,
    ButtonPrimary,
  },
  setup () {
    const email = ref<string>('')

    const isEmailBlur = ref<boolean>(false)
    const emailBlur = () => {
      isEmailBlur.value = true;
    }

    const isEmailValidate = computed(() => {
      return Validate.IsEmailValid(email.value, isEmailBlur.value)
    })

    const onSubmit = () => {
      console.log(email.value)
    }

    return {
      email,
      emailBlur,
      onSubmit,
      isEmailValidate,
    }
  }
})
</script>
<style scoped lang="sass">
.page__content
  background: #F6F8FA
.login__error-wrapper
  position: absolute
  right: 20px
  top: 92px 
.account_png
  background: center no-repeat url('~assets/img/PasswordRecovery.png')
  width: 100%
  height: 264px
.text
  text-align: center
</style>
