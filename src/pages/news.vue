<template>
  <UContainer class="min-h-screen flex items-center">
    <UCard class="flex-1" :ui="ui">
      <template #header> Welcome to the playground! </template>

      <p class="text-gray-500 dark:text-gray-400">Try your components here!</p>
    </UCard>
    <UIcon name="i-heroicons-light-bulb" />
  </UContainer>
</template>

<script setup>
const ui = /*ui*/ {
  background: 'bg-gray-50 dark:bg-gray-800/50',
  ring: 'ring-1 ring-gray-300 dark:ring-gray-700',
  divide: 'divide-y divide-gray-300 dark:divide-gray-700',
  header: { base: 'font-bold' },
}

const appConfig = useAppConfig()
console.log('appConfig: ', appConfig);

</script>

<style>
body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>
