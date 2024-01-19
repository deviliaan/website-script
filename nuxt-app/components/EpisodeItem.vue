<template>
  <div>
    {{ episode.number }}
  </div>
</template>

<script lang="ts" setup>

</script>
<script>
export default {
    name: 'EpisodeItem',
    props: ['episode']
}
</script>