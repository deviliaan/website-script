<template>
  <div>
    <header class="sticky top-0 z-50">
      <Navbar />
    </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "~/components/Navbar.vue";
</script>

<style>

</style>