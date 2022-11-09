<template>
    <h1>Home</h1>
  <h1 class="flex">
    Hello world!
  </h1>
    <pre>{{ route }}</pre>
</template>

<script setup lang="ts">
useHead({
  title: 'Main Page',
  meta: [
    { name: 'description', content: 'Main page' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { children: 'console.log(\'Hello world\')' } ]
})

const route = useRoute()
// console.log(route) // My home page

</script>

<style scoped>

</style>