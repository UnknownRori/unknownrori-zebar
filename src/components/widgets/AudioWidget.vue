<script lang="ts" setup>
import { ref } from 'vue';
import { Music4, Play, Pause } from 'lucide-vue-next';

import useZebar from '@/stores/useZebar.ts';
import { truncateText } from '@/utils';
import { BlinkTransition } from '@/components/ui/transition';
import { Island } from '@/components/ui/island';

const zebar = useZebar();

const progress = ref(0);
zebar.$subscribe((_, state) => {
  if (state.event.media == null) {
    progress.value = 0;
    return
  }

  const endTime = state.event.media?.currentSession?.endTime as number
  const position = state.event.media?.currentSession?.position as number
  progress.value = (position / endTime) * 100;
});
</script>

<template>
  <BlinkTransition>
    <Island v-if='zebar.event.media && zebar.event.media.currentSession' class='justify-center
      items-center text-center cursor-pointer' :hoverable='true' @click='zebar.event.media.togglePlayPause()'>
      <Music4 class='w-4' />
      {{ truncateText(zebar.event.media.currentSession.title as string, 12) }}
      <div
        class="hidden absolute left-0 bottom-0 h-1 rounded-full -z-10 bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee,0_0_16px_#22d3ee]"
        :style="{ width: progress.toFixed(2) + '%' }"></div>
      <BlinkTransition>
        <Play v-if='zebar.event.media.currentSession.isPlaying' class='w-4' />
        <Pause v-else class='w-4' />
      </BlinkTransition>
    </Island>
  </BlinkTransition>
</template>
