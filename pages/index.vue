<template>
  <div>
    <h1>首页</h1>
    <NuxtLink to="/about">关于页面</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "orange",
  middleware: "auth",
  validate: async (route) => {
    return true;
  },
});

const keywords = ref(["关键词1", "关键词2", "关键词3"]);
const metaKeywords = computed(() => keywords.value.join(","));

const title = ref("网站标题");
const metaTitle = computed(() => title.value);

useHead({
  title: metaTitle,
  meta: [{ name: "keywords", content: metaKeywords }],
});
</script>
