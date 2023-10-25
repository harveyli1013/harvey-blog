<template>
  <!-- <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Style type="text/css" children="body { background-color: green; }" />
  </Head> -->
  <section class="bg-slate-50 flex flex-row flex-wrap">
    <div class="h-20 content-end grow w-80 bg-teal-700">1</div>
    <div class="h-20 grow w-80 bg-orange-300">2</div>
    <div class="h-20 grow w-80 bg-sky-600">3</div>
    <UCard class="flex-1" :ui="ui">
      <!-- <template #header> Welcome to the playground! </template> -->
      <p class="text-gray-500 dark:text-gray-400">Try your components here!</p>
    </UCard>
  </section>

  <section>
    <div>
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
const title = ref('你好，世界')
definePageMeta({
  layout: "custom",
});
const ui = ref({
  background: 'bg-gray-50 dark:bg-gray-800/50',
  ring: 'ring-1 ring-gray-300 dark:ring-gray-700',
  divide: 'divide-y divide-gray-300 dark:divide-gray-700',
  header: { base: 'font-bold' },
})
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

// useSeoMeta({
//   title: '我的神奇网站',
//   ogTitle: '我的神奇网站',
//   description: '这是我的神奇网站，让我来告诉你关于它的一切。',
//   ogDescription: 'aaa这是我的神奇网站，让我来告诉你关于它的一切。',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })
</script>
