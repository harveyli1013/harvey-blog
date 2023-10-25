<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <!-- <Style type="text/css" children="body { background-color: green; }" /> -->
  </Head>
  <section class="bg-slate-50 flex flex-row flex-wrap">
    <div class="h-20 content-end grow w-80 bg-teal-700">1</div>
    <div class="h-20 grow w-80 bg-orange-300">2</div>
    <div class="h-20 grow w-80 bg-sky-600">3</div>
    <UCard :ui="ui" />
    <UInput v-model="value" />
  </section>

  <section>
    <div>
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
const value = ref('')
const title = ref('你好，世界')
definePageMeta({
  layout: "custom",
});
const ui = /*ui*/ {
  background: 'bg-white dark:bg-slate-900'
}
/* useHead({
  title: '我的应用',
  meta: [
    { name: 'description', content: '我的神奇网站。' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
}) */

useSeoMeta({
  title: '我的神奇网站',
  ogTitle: '我的神奇网站',
  description: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogDescription: 'aaa这是我的神奇网站，让我来告诉你关于它的一切。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
