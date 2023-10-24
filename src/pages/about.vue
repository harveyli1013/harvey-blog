<template>
  <section class="section-test">
    <p>此页面将显示在 /about 路由。</p>
    <AppAlert> aaaaaa </AppAlert>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
</script>

<style lang="less" scoped>
.section-test {
  font-size: 30px;
  color: #000;
}
</style>
