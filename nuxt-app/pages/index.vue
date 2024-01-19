<template>
  <div>
    <div class="w-full md:grid-cols-4 lg:grid-cols-5 p-2 gap-2 grid grid-cols-3">
      <div class="shadow-lg border border-orange-300" v-for="anime in data?.response.results">
        <Card :anime="anime"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Card from '~/components/Card.vue';
const {data} = await useFetch('/api/recent')
</script>

<style>

</style>