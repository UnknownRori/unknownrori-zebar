<script lang="ts" setup>
import useZebar from '@/stores/useZebar.ts';
import { Wifi, WifiHigh, WifiLow, WifiOff, ArrowBigUpDash, ArrowBigDownDash } from 'lucide-vue-next';
import { BlinkTransition } from '@/components/ui/transition';
import { Island } from '@/components/ui/island';

const zebar = useZebar();

</script>

<template>
  <BlinkTransition>
    <Island v-if='zebar.event.network' class='flex justify-center items-center gap-2'>
      <Wifi class='w-4' />

      <span>
        {{ zebar.event.network?.defaultInterface?.friendlyName }}
      </span>
      <span class='flex justify-center items-center text-green-500'>
        <ArrowBigUpDash class='w-4' />
        {{ zebar.event.network?.traffic?.received?.siValue }} {{ zebar.event.network?.traffic?.received?.siUnit }}
      </span>
      <span class='flex justify-center items-center text-red-500'>
        <ArrowBigDownDash class='w-4' />
        {{ zebar.event.network?.traffic?.received?.siValue }} {{ zebar.event.network?.traffic?.received?.siUnit }}
      </span>
    </Island>
  </BlinkTransition>
</template>
