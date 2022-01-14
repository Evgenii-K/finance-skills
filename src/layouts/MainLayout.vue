<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="text-dark transparent main__header" height-hint="98">
      <q-toolbar class="text-primary q-px-none">
        <div>
          <q-icon 
            name="img:icons/money.png" 
            color="primary"
            size="36px"
          />
          0
        </div>
        <q-toolbar-title class="text-center text-weight-medium">
          {{ app.pageTitle }}
        </q-toolbar-title>
        <q-btn size="xs" dense round to="/settings/profile">
          <q-avatar size="40px">
            <img src="~assets/img/round-face.png">
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container class="main__container">
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs
        v-model="tab"
        content-class="footer__wrapper"
        indicator-color="transparent"
        class="bg-white text-dark footer__wrapper"
        active-color="secondary"
        align="justify"
      >
        <q-route-tab name="dashboard" to="/dashboard">
          <q-icon name="o_home" :size="tabSize('dashboard')"/>
          <label class="footer__label">{{isLabel('dashboard', 'главная')}}</label>
        </q-route-tab>
        <q-route-tab name="articles" to="/">
          <q-icon name="o_book" :size="tabSize('articles')"/>
          <label class="footer__label">{{isLabel('articles', 'Статьи')}}</label>
        </q-route-tab>
        <q-route-tab name="add" to="/">
          <q-icon name="eva-plus-circle" size="62px" color="warning"/>
        </q-route-tab>
        <q-route-tab name="friends" to="/">
          <q-icon name="o_people_outline" :size="tabSize('friends')"/>
          <label class="footer__label">{{isLabel('friends', 'Друзья')}}</label>
        </q-route-tab>
        <q-route-tab name="settings" to="/settings">
          <q-icon name="o_settings" :size="tabSize('settings')"/>
          <label class="footer__label">{{isLabel('settings', 'Настройки')}}</label>
        </q-route-tab>
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const $store = useStore()
    const router = useRouter()

    const goBack = () => router.go(-1)

    const tab = ref<string>('dashboard')

    const tabSize = (name: string): string => {
      return name === tab.value ? '45px' : '36px'
    }

    const isLabel = (name: string, label: string): string => {
      return name === tab.value ? '' : label.toLowerCase()
    }

    return {
      app: $store.state.app,
      goBack,
      tab,
      tabSize,
      isLabel,
    }
  }
})
</script>

<style lang="sass" scoped>
.main__header
  margin: 32px 20px
  height: 114px
.main__container
  position: relative
  background: center bottom no-repeat url('~assets/img/Background_main.png')
  background-origin: border-box
  background-size: 100% 363px
.footer__wrapper
  height: 80px
.footer__label
  font-weight: 700
  font-size: 10px
  line-height: 20px
  color: $dark
</style>
