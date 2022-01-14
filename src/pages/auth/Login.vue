<template>
  <q-page>
    <auth-header/>

    <base-error 
      v-show="authError"
      :text="authError"
    />
    <base-error 
      v-show="isEmailValidate"
      :text="isEmailValidate"
    />
    <base-error 
      v-show="isPasswordValid"
      :text="isPasswordValid"
    />
    
    <sub-background >
      
      <div class="row justify-center full-width q-pt-lg q-pb-xl">
        <h2>Войти через почту</h2>
      </div>

      <q-form 
        class="q-gutter-y-lg"
        @submit="onSubmit"
      > 
        <base-input
          type="text"
          v-model:value="identifier"
          placeholder="Username@gmail.com"
          icon="mdi-email-outline"
          :isValid="isEmailValidate"
          @focus="emailBlur"
          autocomplete="off"
        />
        <base-input
          type="password"
          v-model:value="password"
          placeholder="Пароль"
          icon="mdi-lock-outline"
          isPassword
          :isValid="isPasswordValid"
          @focus="passwordBlur"
        />
        <div class="q-mx-lg">
          <button-primary
            label="Войти"
            :disable="!isUnelevated"
          />
        </div>
      </q-form>

      <div class="help-link row justify-center full-width">
        <router-link to="/auth/recovery">Забыли пароль?</router-link>
      </div>

    </sub-background>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from 'vue'
import SubBackground from '../../components/auth/SubBackground.vue'
import AuthHeader from '../../components/auth/AuthHeader.vue'
import { AuthService } from '../../services/auth.service'
import Validate from '../../services/validate'
import BaseInput from '../../components/baseComponents/baseInput.vue'
import BaseError from '../../components/baseComponents/baseError.vue'
import ButtonPrimary from '../../components/baseComponents/btnPrimary.vue'

export default defineComponent({
  name: 'Login',
  components: {
    SubBackground,
    AuthHeader,
    BaseInput,
    BaseError,
    ButtonPrimary,
  },
  setup () {
    const formData = reactive({
      identifier: '',
      password: '',
    })
    const showPassword = ref<boolean>(true)
    const authError = ref<string>('')
    const isEmailBlur = ref<boolean>(false)
    const emailBlur = () => {
      isEmailBlur.value = true;
    }
    const isPasswordBlur = ref<boolean>(false)
    const passwordBlur = () => {
      isPasswordBlur.value = true;
    }

    const isEmailValidate = computed(() => {
      return Validate.IsEmailValid(formData.identifier, isEmailBlur.value)
    })

    const isPasswordValid = computed(() => {
      return Validate.IsPasswordValid(formData.password, isPasswordBlur.value)
    })
    
    const isUnelevated = computed(() => {
      return Validate.IsUnelevated(formData.identifier, formData.password)
    })

    const onSubmit = async () => {
      try {
        const res = await AuthService.signIn(formData)

        switch (res) {
          case 403:
            authError.value = 'Пользователь уже существует'
            break;
          default:
            authError.value = 'Ошибка авторизации'
            break;
        }
      } catch (error) {
        authError.value = 'Ошибка авторизации'
        console.log(error)
      }
    }

    return {
      ...toRefs(formData),
      onSubmit,
      showPassword,
      isUnelevated,
      isEmailValidate,
      emailBlur,
      isPasswordValid,
      passwordBlur,
      authError,
    }
  }
})
</script>
<style scoped lang="sass">
</style>
