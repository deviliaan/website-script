<template>
  <div>
    Wellcome
  </div>
</template>

<script lang="ts" setup>
import Card from '~/components/Card.vue';
const {data} = await useFetch('/api/recent')
</script>

<style>

</style>