import useZebar from '@/stores/useZebar.ts';
import { defineStore } from 'pinia'
import { ref, onUnmounted } from 'vue';
import type { MediaSession } from 'zebar';


const useMediaPlayer = defineStore('useMediaPlayer', () => {
  const data = ref<MediaSession | null>(null);
  let time = 0;
  const progress = ref(0);

  const interval = setInterval(() => {
    if (data.value == null) return;

    if (data.value.isPlaying) {
      time += 0.5;
      const endTime = data.value.endTime as number
      const position = time as number
      progress.value = (position / endTime) * 100;
    }
  }, 500);

  const zebar = useZebar();

  zebar.$subscribe((_, state) => {
    if (state.event.media == null) {
      data.value = null;
      return
    }

    if (data.value != null && state.event.media.currentSession) {
      if (data.value.title != state.event.media.currentSession.title) {
        data.value = state.event.media.currentSession;
        return;
      } else if (data.value.position != state.event.media.currentSession.position || data.value.isPlaying != state.event.media.currentSession.isPlaying) {
        data.value = state.event.media.currentSession;
        time = data.value?.position as number;
        return;
      }

      return;
    }

    data.value = state.event.media.currentSession;
    time = data.value?.position as number;
  });

  onUnmounted(() => {
    clearInterval(interval);
  })

  return {
    event: data,
    progress,
  }
});

export default useMediaPlayer;
