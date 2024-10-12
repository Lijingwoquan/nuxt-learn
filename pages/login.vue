<template>
  <div>这是登录页面</div>
  <el-button type="primary" @click="login">模拟登录</el-button>
</template>

<script setup>
const login = () => {
  localStorage.setItem("token", "123");
  navigateTo("/data");
};
</script>
