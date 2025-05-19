import * as zebar from 'zebar';
import { defineStore } from 'pinia'
import { ref } from 'vue';

const useZebar = defineStore('useZebar', () => {
  const providers = zebar.createProviderGroup({
    cpu: { type: 'cpu' },
    glazewm: { type: 'glazewm' },
    battery: { type: 'battery' },
    memory: { type: 'memory' },
    media: { type: 'media' },
    network: { type: 'network', refreshInterval: 600, },
    date: { type: 'date', formatting: 'EEE d MMM hh:mm a', refreshInterval: 600, },
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
