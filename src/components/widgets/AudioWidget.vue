<script lang="ts" setup>
import { ref } from 'vue';
import useZebar from '@/stores/useZebar.ts';
import { BlinkTransition } from '@/components/ui/transition';
import { Island } from '@/components/ui/island';

const zebar = useZebar();

const progress = ref(30);
</script>

<template>
  <BlinkTransition>
    <Island v-if='zebar.event.media && zebar.event.media.currentSession'>
      <span>
        {{ zebar.event.media.currentSession.title }}
        <div class="h-1 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee,0_0_16px_#22d3ee]"
          :style="{ width: progress + '%' }"></div>
      </span>
    </Island>
  </BlinkTransition>
</template>
