<template>
  <Navigation></Navigation>
  <div class="max-w-full">
    <div class="container">
<!--      <h1>{{ route }}</h1>-->
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  useHead({
    bodyAttrs: {
      class: 'dark:bg-gray-900 bg-gray-50 max-w-full'
    },
  })

  const route = useRoute();
  console.log(route.meta)
  const getColor =  async () => await useAppConfig();

  const appConfig = await getColor();

  import Navigation from "../components/Navigation";

</script>

<style scoped>

</style>
