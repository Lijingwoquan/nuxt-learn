<template>
  <el-header class="text-blue-500 flex justify-around items-center">
    <NuxtLink to="/">首页</NuxtLink>
  </el-header>

  <el-main class="bg-red-200">
    <slot />
  </el-main>

  <el-footer>底部</el-footer>
</template>
