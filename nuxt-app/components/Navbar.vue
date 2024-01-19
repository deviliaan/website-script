<template>
  <div class=" h-16 flex items-center w-full flex-row p-4 justify-between bg-orange-300">
    <UIcon name="i-mdi-hamburger" class="w-8 h-8"></UIcon>
    <div class="hidden md:block lg:block">
        <NuxtLink to="/">Home</NuxtLink>
    </div>
    <UButton @click="toggleMenu" color="black" class="md:hidden lg:hidden">
        <UIcon name="i-quill-hamburger"></UIcon>
    </UButton>
  </div>
  <div id="mobile-menu" class="flex flex-col p-2 hidden bg-orange-300 gap-y-2">
    <NuxtLink class="rounded p-2 cursor-pointer bg-orange-400" to="/">Home</NuxtLink>
    <NuxtLink class="bg-orange-400 rounded p-2 cursor-pointer">About</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<script>
    export default {
        name: 'Navbar',
        methods: {
            toggleMenu() {
                var x = document.getElementById('mobile-menu');
                x?.classList.toggle('hidden')
            }
        }
    }
</script>

<style>

</style>