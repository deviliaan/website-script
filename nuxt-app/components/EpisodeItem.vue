
<template >
  <div class="w-full cursor-pointer">
    <div class="bg-primary rounded p-2">
      <NuxtLink><span>{{ episode.number + episode.title }}</span> <span v-if="episode.isFiller" class="ml-2">Filler</span> </NuxtLink>
    </div>
  </div>
</template>



<script>

export default {
    name: 'EpisodeItem',
    props: ['episode'],
    
}
</script>