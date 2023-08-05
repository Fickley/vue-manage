<template>
  <div class="appBox">
    <router-view v-slot="{ Component, route }">
      <transition name="el-fade-in" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<style>
  .appBox {
    background-color: #f0f2f5;
    width: 100%;
    height: 100%;
  }
</style>
