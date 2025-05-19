<script lang="ts" setup>
import { cn } from '@/utils';
defineProps<{
  icon: unknown,
  value: number,
  medium: number,
  high: number,
}>();

</script>

<template>
  <div :class='cn("flex justify-center items-center gap-1", value as number > high ?
    "text-red-500" : value > medium ? "text-yellow-500" : "text-white")'>
    <component :is='$props.icon' class='w-4' />
    {{ Math.round(value) }}%
  </div>
</template>
