<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="transparent game__header"
    >
      <q-toolbar class="text-primary q-px-none">
        <button-round-back/>
        <q-space />
        <div>
          <q-icon 
            name="img:icons/money.png" 
            color="primary"
            size="36px"
          />
          {{ cash * 10 }}
        </div>
      </q-toolbar>
      <q-toolbar class="text-primary q-px-none">
        <div>
          Владимир 18 лет
        </div>
        <q-space />
        <div>
          Доступное время: 450 ч.
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="game__container">
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
        <q-route-tab name="game" to="/game">
          <q-icon :name="tab === 'game' ? 'play_circle' : 'play_circle_outline'" :size="tabSize('game')"/>
        </q-route-tab>
        <q-route-tab name="work" to="/game/work">
          <q-icon name="work" :size="tabSize('work')"/>
        </q-route-tab>
        <q-route-tab name="learning" to="/game/learning">
          <q-icon name="fas fa-graduation-cap" :size="tabSize('learning')"/>
        </q-route-tab>
        <q-route-tab name="statistics" to="/game/statistics">
          <q-icon name="insert_chart_outlined" :size="tabSize('statistics')"/>
        </q-route-tab>
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ButtonRoundBack from '../components/baseComponents/btnRoundBack.vue'
import { useStore } from '../store/index'

export default defineComponent({
  name: 'GameLayout',
  components: {
    ButtonRoundBack,
  },
  setup() {
    const store = useStore()

    const cash = store.state.example.cash

    const tab = ref<string>('game')

    const tabSize = (name: string): string => {
      return name === tab.value ? '54px' : '40px'
    }

    return {
      tab,
      tabSize,
      cash,
    }
  },
})
</script>
<style lang="sass" scoped>
.game__header
  margin: 20px 20px 0px 20px  
.game__container
  background-color: $blue-light
.footer__wrapper
  height: 80px
</style>
