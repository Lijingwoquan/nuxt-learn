<template>
  <el-button type="primary" @click="getApi">get请求</el-button>
  <el-button type="primary" @click="postApi">post请求</el-button>

  <el-button type="primary" @click="errorApi">错误请求</el-button>

  <el-button type="primary" @click="tokenApi">token请求</el-button>
  <el-button type="primary" @click="logout">退出登录</el-button>
</template>

<script setup lang="ts">
import { getUserInfo, needTokenRequest, postUserInfo } from "~/api/user";

definePageMeta({
  layout: "default",
  // middleware: "auth",
});
const serverApi = () => {
  getUserInfo("10");
};

// serverApi();

const errorApi = () => {
  api.get("/user?id=a");
};

const getApi = () => {
  getUserInfo("10");
};

const postApi = () => {
  postUserInfo({
    id: 10,
    username: "lzh",
    password: "123",
  });
};

const tokenApi = () => {
  needTokenRequest();
};
tokenApi();

onMounted(() => {
  tokenApi();
});

const logout = () => {
  localStorage.removeItem("token");
};
</script>
