import * as zebar from 'zebar';
import { defineStore } from 'pinia'
import { ref } from 'vue';

const useZebar = defineStore('useZebar', () => {
  const providers = zebar.createProviderGroup({
    audio: { type: 'audio' },
    cpu: { type: 'cpu' },
    glazewm: { type: 'glazewm' },
    battery: { type: 'battery' },
    memory: { type: 'memory' },
    weather: { type: 'weather' },
    media: { type: 'media' },
  });

  const event = ref(providers.outputMap);
  providers.onOutput(() => {
    console.log(providers.outputMap);
    event.value = providers.outputMap
  })

  return {
    event
  }
});

export default useZebar;
