<script setup lang="ts"></script>

<template>
  <div>
    <img
      :src="`/limited/original/001f9876-3680-45f1-bd08-1a845e21467f.jpg`"
      alt="details"
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
  @apply w-full h-full object-contain;
}
</style>
