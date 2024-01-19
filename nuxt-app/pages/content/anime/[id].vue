<template>
  <div class="w-full">
     <div class="w-full grid grid-cols-2">
        <div class="p-2 rounded shadow-lg">
          <img 
          class="rounded" :src="data.response.image" alt="" srcset="">
        </div>
        <div class="p-2 flex flex-wrap">
          <div class="rounded shadow-lg p-2">
            <h2 class="">{{ data.response.title }}</h2>
            <p>Anilist Id: {{ data.response?.alID }}</p>
          </div>
          <div class="rounded shadow-lg p-2 w-full">
            <p class="pt-2">Type: {{ data.response.type }}</p>
            <p>Episodes: {{data.response.totalEpisodes}}</p>
          </div>
        </div>
     </div>
     <div class="p-4">
       <UAccordion color="amber" variant="soft" size="sm" :items="[{label: 'Story:',content: data.response.description}]"/>
     </div>
     <div>
      
     </div>   
  </div>
</template>

<script setup>
const { id } = useRoute().params
const {data} = await useFetch(`/api/anime/${id}`);

</script>

<style>

</style>