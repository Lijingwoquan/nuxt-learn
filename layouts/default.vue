<template>
  <el-header>
    <div class="text-blue-500">
      <ul>
        <li>
          <NuxtLink to="/">首页</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/data">数据页面</NuxtLink>
        </li>
      </ul>
    </div>
  </el-header>

  <el-main class="bg-red-200">
    <slot />
  </el-main>

  <el-footer>这是底部</el-footer>
</template>
