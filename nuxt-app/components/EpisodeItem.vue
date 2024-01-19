<template >
  <div class="w-full">
    <div class="bg-orange-300 p-2 rounded">
        {{ episode.title }}
    </div>
    <div id="mobile-menu" class="p-2 flex">
        <NuxtLink class="bg-slate-400 p-2 rounded">Watch Now</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<script>

export default {
    name: 'EpisodeItem',
    props: ['episode'],
    
    methods: {
        
    },
   
}
</script>