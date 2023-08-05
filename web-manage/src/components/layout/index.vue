<script setup>
  import Menus from '../menus/index.vue'
</script>

<template>
  <div class="layoutBox">
    <div>
      <Menus />
    </div>
    <div>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'">
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
   @import url('./index.scss');
</style>
