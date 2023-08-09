<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1" background-color="#545c64">
      <template #title>
        <span>Navigator One111</span>
      </template>
      <el-menu-item-group background-color="#545c64">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="js" setup>
  import { ref } from 'vue'

  const isCollapse = ref(false)
  const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
  }
  const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
  }
</script>

<style lang="scss" scoped>
  @import url('./index.scss');
</style>