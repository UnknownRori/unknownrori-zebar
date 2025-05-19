<script lang="ts" setup>
import useZebar from '@/stores/useZebar.ts';

const zebar = useZebar();

</script>
<template>
  <span class='flex justify-center items-center'>
    {{ zebar.event.date?.formatted }}
  </span>
</template>
