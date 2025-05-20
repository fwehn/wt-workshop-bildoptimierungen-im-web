<script setup lang="ts">
import { ref, onMounted } from 'vue';

const files = ref([]);

onMounted(async () => {
  const res = await fetch('/files.json');
  files.value = await res.json();
});
</script>

<template>
  <div>
    <img
      v-for="image in files"
      :key="image"
      :src="`/images/original/${image}`"
      :alt="image"
      width="3000"
      height="3000"
    />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

div {
  @apply w-full h-full flex overflow-scroll flex-wrap items-center justify-center;
}

img {
  @apply object-contain w-full h-full md:w-2/3 md:h-2/3 lg:w-96 lg:h-96;
}
</style>
