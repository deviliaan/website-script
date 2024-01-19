<template>
  <div>
    {{JSON.stringify(data)}}    
  </div>
</template>

<script lang="ts" setup>

const {data} = await useFetch('/api/anime')
</script>

<style>

</style>