<script lang="ts" setup>
import { ref } from 'vue';
import useStarry from '@/composable/useStarry.ts';

const canvasRef = ref<HTMLCanvasElement | null>(null);
useStarry(canvasRef);
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 -z-10 pointer-events-none"></canvas>
</template>
