<script lang="ts" setup>
import { cn } from '@/utils';
import useZebar from '@/stores/useZebar.ts';
import {
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryCharging,
  Battery,
  Cpu,
  MemoryStick,
} from 'lucide-vue-next';
import { BlinkTransition } from '@/components/ui/transition';
import { Island } from '@/components/ui/island';
import { ResourceItem } from '@/components/ui/resources';

const zebar = useZebar();

function getBatteryIcon() {
  if (zebar.event.battery == null) {
    return Battery;
  }
  if (zebar.event.battery.isCharging) {
    return BatteryCharging;
  }

  if (zebar.event.battery.chargePercent > 75) {
    return BatteryFull;
  }
  if (zebar.event.battery.chargePercent > 50) {
    return BatteryMedium;
  }
  return BatteryLow
}
</script>

<template>
  <BlinkTransition>
    <Island class='flex items-center justify-center gap-8'>
      <ResourceItem :icon='Cpu' :value='zebar.event.cpu?.usage as number' :high='80' :medium='60' />
      <ResourceItem :icon='MemoryStick' :value='zebar.event.memory?.usage as number' :high='80' :medium='60' />

      <div :class='cn("flex justify-center items-center gap-1", zebar.event.battery?.chargePercent as number < 25 ?
        "text-red-500 animate-pulse" : zebar.event.battery?.chargePercent as number < 40 ?
          "text-yellow-500" : "text-white", zebar.event.battery?.isCharging ?
        "text-green-500 animate-pulse" : "")'>
        <component :is='getBatteryIcon()' />
        {{ Math.round(zebar.event.battery?.chargePercent as number) }}%
      </div>
    </Island>
  </BlinkTransition>
</template>
