<template>
  <Navigation></Navigation>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts" setup>
  const getColor =  async () => await useAppConfig();

  const appConfig = await getColor();

  import Navigation from "../components/Navigation";

</script>

<style scoped>

  .container {
    max-width: 968px;
    margin: 0 auto;
  }
</style>
