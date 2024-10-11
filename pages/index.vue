<template>这是主页</template>

<script setup lang="ts">
const keywords = ref(["关键词1", "关键词2", "关键词3"]);
const metaKeywords = computed(() => keywords.value.join(","));
const title = ref("网站标题");
const metaTitle = computed(() => title.value);
useHead({
  title: metaTitle,
  meta: [{ name: "keywords", content: metaKeywords }],
});
</script>
