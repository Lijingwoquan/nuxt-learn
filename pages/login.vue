<template>
  <div>这是登录页面</div>
  <el-button type="primary" @click="login">模拟登录</el-button>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
const login = () => {
  authStore.setToken(parseInt(Math.random() * 1000000000));
  navigateTo("/data");
};
</script>
