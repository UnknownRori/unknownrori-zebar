<script lang="ts" setup>
import { ref } from 'vue';
import { Music4, Play, Pause } from 'lucide-vue-next';

import useZebar from '@/stores/useZebar.ts';
import useMediaPlayer from '@/stores/useMediaPlayer.ts';
import { truncateText } from '@/utils';
import { BlinkTransition } from '@/components/ui/transition';
import { Island } from '@/components/ui/island';

const zebar = useZebar();
const media = useMediaPlayer();
</script>

<template>
  <BlinkTransition>
    <Island v-if='media.event' class='justify-center
      items-center text-center cursor-pointer' :hoverable='true' @click='zebar.event.media?.togglePlayPause()'>
      <Music4 class='w-4' />
      {{ truncateText(media.event.title as string, 24) }}
      <div
        class="absolute left-0 bottom-0 h-1 rounded-full -z-10 bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee,0_0_16px_#22d3ee]"
        :style="{ width: media.progress.toFixed(2) + '%' }"></div>
      <BlinkTransition>
        <Play v-if='media.event.isPlaying' class='w-2' />
        <Pause v-else class='w-2' />
      </BlinkTransition>
    </Island>
  </BlinkTransition>
</template>
