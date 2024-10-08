<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- <Header /> -->
        <el-icon>
          <Fold />
        </el-icon>
        <el-button type="primary">Header</el-button>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <!-- <Footer /> -->
        <el-button type="primary">Footer</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>
