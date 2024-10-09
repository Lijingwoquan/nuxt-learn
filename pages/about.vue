<script setup lang="ts">
definePageMeta({
  layout: "orange",
  middleware: "auth",
  validate: async (route) => {
    // 检查id是否由数字组成
    
    return true;
  },
});
</script>

<template>
  <div>
    <h1>关于页面</h1>
    <NuxtLink to="/">首页</NuxtLink>
  </div>
</template>
