<template>
  <el-button type="primary" @click="getApi">get请求</el-button>
  <el-button type="primary" @click="postApi">post请求</el-button>
  <el-button type="primary" @click="pushApi">push请求</el-button>
  <el-button type="primary" @click="deleteApi">delete请求</el-button>

  <el-button type="primary" @click="api2">错误请求</el-button>

  <el-button type="primary" @click="login">模拟登录</el-button>
  <el-button type="primary" @click="tokenApi">token请求</el-button>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: "auth",
});
const api0 = () => {
  api.get("/user?id=10").then((res) => {
    console.log(res);
  });
};

// api0();

const getApi = () => {
  api
    .get("/user?id=10")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const post = () => {};

const push = () => {};

const deleteApi = () => {};

const login = () => {};

const tokenApi = () => {};
</script>
