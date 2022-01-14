<template>
  <q-card 
    class="card"
    :class="isValid ? 'error' : ''"
  >
    <q-card-section class="q-py-xs section">
      <div>
        <q-icon
          :name="icon"
          class="icon"
        />
      </div>
      <q-input
        :type="showPassword ? type : 'text'"
        borderless
        dense
        v-model="value"
        :placeholder="placeholder"
        class="full-width q-pl-md"
        @update:model-value="inputHandler"
        @blur="inputBlur"
      >
        <template 
          v-if="isPassword"
          v-slot:append
        >
          <q-icon
            :name="showPassword ? 'eva-eye-off-2-outline' : 'eva-eye-outline'"
            class="cursor-pointer"
            @click="showPassword = !showPassword"
          />
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    isPassword: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: String,
      default: ''
    }
  },
  emits: ['update:value', 'keyup', 'focus'],
  setup(props, { emit }) {
    const value = ref<string>('')
    const showPassword = ref<boolean>(true)

    const inputHandler = (value: string) => {
      emit('update:value', value)
    }

    const inputBlur = () => {
      emit('focus')
    }

    return {
      inputHandler,
      inputBlur,
      value,
      showPassword,
    }
  }
})
</script>

<style scoped lang="sass">
.card
  background-color: white
  border-radius: 12px
  border: 1px solid #F6F8FA
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08)
.section
  display: flex
  padding-left: 12px
.icon
  font-size: 24px
  color: $input-text
  height: 100%
  width: 32px
  justify-content: flex-start
  border-right: 2px solid #F6F8FA
.icon:before
  justify-content: flex-start
.error
  border: 1px solid $negative
</style>