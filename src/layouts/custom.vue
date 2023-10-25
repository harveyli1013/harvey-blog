<template>
  <!-- <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Style type="text/css" children="body { background-color: green; }" />
  </Head> -->
  <header>custom header</header>
  <slot />
  <footer>custom footer</footer>
</template>

<script setup lang="ts">
const title = ref('你好，世界')
</script>
