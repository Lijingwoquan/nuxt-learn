<template>
  <el-button type="primary" @click="api1">正确请求</el-button>
  <el-button type="primary" @click="api2">错误请求</el-button>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: "auth",
});
const api0 = () => {
  getApi("/user?id=10").then((res) => {
    console.log(res);
  });
};

api0();

const api1 = () => {
  getApi("/user?id=10").then((res) => {
    console.log(res);
  });
};

const api2 = () => {
  getApi("/user?id=a").then((res) => {
    console.log(res);
  });
};
</script>
