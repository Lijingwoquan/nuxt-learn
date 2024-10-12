<template>
  <el-header class="text-blue-500 flex justify-around items-center">
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink to="/about">关于页面</NuxtLink>
    <NuxtLink to="/data">数据页面</NuxtLink>
    <NuxtLink to="/private">个人数据页面</NuxtLink>
  </el-header>

  <el-main class="bg-red-200">
    <slot />
  </el-main>

  <el-footer>这是底部</el-footer>
</template>
