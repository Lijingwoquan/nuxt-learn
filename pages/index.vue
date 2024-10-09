<template>
  <div>
    <h1>首页</h1>
    <NuxtLink to="/about">关于页面</NuxtLink>
  </div>
  <Meta name="description" content="这是一个简单网站" />

  <!-- <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Style type="text/css" children="body { background-color: green; }" />
  </Head> -->
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
