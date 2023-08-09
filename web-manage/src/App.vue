<script setup>
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="appBox">
      <router-view v-slot="{ Component, route }">
        <transition name="el-fade-in" mode="out-in">
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </div>
  </el-config-provider>
</template>

<style>
  .appBox {
    background-color: #f0f2f5;
    width: 100%;
    height: 100%;
  }
</style>
