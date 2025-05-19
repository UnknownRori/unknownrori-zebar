<script lang='ts' setup>
import { cn } from '@/utils';
defineProps<{
  class?: string,
  hoverable?: boolean,
}>();
</script>

<template>
  <div :class='cn("flex items-stretch gap-2 duration-300 bg-gray-800/50 rounded-full py-1 px-4", $props.class,
    $props.hoverable ? "hover:bg-gray-700/80" : "")'>
    <slot />
  </div>
</template>
