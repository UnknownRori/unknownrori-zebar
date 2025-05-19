<script lang='ts' setup>
import { cn } from '@/utils';
defineProps<{
  class?: string,
}>();
</script>

<template>
  <div :class='cn("flex items-stretch gap-2 bg-gray-800/50 rounded-full py-1 px-4", $props.class)'>
    <slot />
  </div>
</template>
