<script lang="ts" setup>
import useZebar from '@/stores/useZebar.ts';
import { Island } from '@/components/ui/island';

const zebar = useZebar();

</script>
<template>
  <Island>
    <span class='flex justify-center items-center'>
      {{ zebar.event.date?.formatted }}
    </span>
  </Island>
</template>
