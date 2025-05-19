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
      <div :class='cn("flex justify-center items-center gap-1", zebar.event.cpu?.usage as number > 80 ?
        "text-red-500" : zebar.event.cpu?.usage as number > 60 ? "text-yellow-500" : "text-white")'>
        <Cpu class='w-4' />
        {{ Math.round(zebar.event.cpu?.usage as number) }}%
      </div>

      <div :class='cn("flex justify-center items-center gap-1", zebar.event.memory?.usage as number > 80 ?
        "text-red-500" : zebar.event.memory?.usage as number > 60 ? "text-yellow-500" : "text-white")'>
        <MemoryStick class='w-4' />
        {{ Math.round(zebar.event.memory?.usage as number) }}%
      </div>

      <div :class='cn("flex justify-center items-center gap-1", zebar.event.battery?.chargePercent as number < 35 ?
        "text-red-500" : zebar.event.battery?.chargePercent as number < 60 ? "text-yellow-500" : "text-white")'>
        <component :is='getBatteryIcon()' />
        {{ Math.round(zebar.event.battery?.chargePercent as number) }}%
      </div>
    </Island>
  </BlinkTransition>
</template>
