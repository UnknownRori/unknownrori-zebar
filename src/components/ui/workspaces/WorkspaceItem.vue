<script lang='ts' setup>
import type { Workspace } from '@/types/zebar.d.ts';
import { cn } from '@/utils';

import useZebar from '@/stores/useZebar.ts';
defineProps<{
  workspace: Workspace,
}>();
const zebar = useZebar();

</script>

<template>
  <button :class='cn("duration-300 rounded cursor-pointer py-1 w-8", workspace.hasFocus ?
    "text-white" :
    "text-gray-500")'
    @click='() => zebar.event.glazewm != null ? zebar.event.glazewm.runCommand(`focus --workspace ${workspace.name}`) : false'>
    {{ workspace.name }}
  </button>
</template>
