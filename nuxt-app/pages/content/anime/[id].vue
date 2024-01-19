<template>
  <div>
    {{JSON.stringify(data)}}    
  </div>
</template>

<script setup>
const { id } = useRoute().params
const {data} = await useFetch(`/api/anime/${id}`)
</script>

<style>

</style>