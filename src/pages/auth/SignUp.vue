<template>
  <q-page class="page__content column justify-between">
    <div>
      <auth-header>
        <template v-slot:title>
          Регистрация
        </template>
        <template v-slot:image>
          <div class="account_png q-mt-xl"></div>
        </template>
      </auth-header>

      <div class="login__error-wrapper">
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
      </div>

    </div>

    <q-form 
      class="q-gutter-y-lg"
      @submit="onSubmit"
    >
      <base-input
        type="text"
        v-model:value="username"
        placeholder="SuperUserName"
        icon="mdi-account-outline"
        autocomplete="off"
      />
      <base-input
        type="email"
        v-model:value="email"
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
      <div class="non-selectable q-mt-md">
        <q-checkbox size="md" v-model="checkboxMail" val="md" label="Пишите мне на email про скидки и акции" />
      </div>
      
      <div class="q-mx-lg q-mt-lg">
        <button-primary
          label="Создать аккаунт"
          :disable="!isUnelevated"
        />
      </div>

      <div class="help-link row justify-center full-width q-mb-lg">
        <router-link to="/auth">Политика обработки персональных данных</router-link>
      </div>

    </q-form>

  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed} from 'vue'
import AuthHeader from '../../components/auth/AuthHeader.vue'
import BaseError from '../../components/baseComponents/baseError.vue'
import Validate from '../../services/validate'
import BaseInput from '../../components/baseComponents/baseInput.vue'
import ButtonPrimary from '../../components/baseComponents/btnPrimary.vue'
import { AuthService } from '../../services/auth.service'

export default defineComponent({
  name: 'SignUp',
  components: {
    AuthHeader,
    BaseError,
    BaseInput,
    ButtonPrimary,
  },
  setup () {
    const formData = reactive({
      email: '',
      password: '',
      username: '',
      checkboxMail: false,
    })

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
      return Validate.IsEmailValid(formData.email, isEmailBlur.value)
    })

    const isPasswordValid = computed(() => {
      return Validate.IsPasswordValid(formData.password, isPasswordBlur.value)
    })

    const isUnelevated = computed(() => {
      return Validate.IsUnelevated(formData.email, formData.password, formData.username)
    })

    const isPassword = ref<boolean>(true)

    const onSubmit = async () => {
      try {
        const res = await AuthService.signUp(formData)

        switch (res) {
          case 400: 
            authError.value = 'Пользователь c таким именем/почтой уже зарегистрирован'
            break;
          default:
            authError.value = 'Ошибка регистрации'
            break;
        }
      } catch (error) {
        authError.value = 'Ошибка регистрации'
        console.log(error)
      }
    }

    return {
      ...toRefs(formData),
      isPassword,
      onSubmit,
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
.page__content
  background: #F6F8FA
.login__error-wrapper
  position: absolute
  right: 20px
  top: 92px 
.account_png
  background: center no-repeat url('~assets/img/Create Your Account.png')
  width: 100%
  height: 286px
</style>
