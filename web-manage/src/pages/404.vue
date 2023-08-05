<script lang="js" setup>
  import router from "@/routes";

  const handleBack = () => {
    router.replace('/')
  }
</script>

<template>
  <el-empty description="404">
    <el-button type="primary" @click="handleBack">返回首页</el-button>
  </el-empty>
</template>
