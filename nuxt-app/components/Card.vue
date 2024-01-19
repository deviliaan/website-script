<template>
  <div class="w-full h-full pb-2">
    <img class="w-full h-[90%] object-cover" :src="anime?.image"/>
    <div class="px-2">
      <h2 class="truncate text-sm">{{ anime?.title }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<script>
export default {
    name: 'Card',
    props: ['anime']
}
</script>
<style>

</style>