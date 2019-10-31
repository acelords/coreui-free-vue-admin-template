<template>
  <div class="c-app">

    <TheSidebar v-c-emit-root-event:hide-aside/>

    <TheAside/>

    <div class="c-wrapper">
      <TheHeader/>
      <div class="c-body" v-c-emit-root-event:hide-aside>
        <main class="c-main" v-c-emit-root-event:hide-sidebar-on-mobile>
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheAside from './TheAside'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheAside,
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
