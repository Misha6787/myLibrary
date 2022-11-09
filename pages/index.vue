<template>
    <h1 class="dark:text-gray-50 text-3xl font-bold text-gray-900">Home</h1>
    <pre>{{ route }}</pre>
</template>

<script setup lang="ts">
  useHead({
    title: 'Main Page',
    meta: [
      { name: 'description', content: 'Main page' }
    ]
  })

  const route = useRoute()
  // console.log(route) // My home page

</script>

<style scoped>

</style>