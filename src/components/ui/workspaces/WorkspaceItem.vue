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
  <button :class='cn("duration-500 px-2 rounded cursor-pointer w-8 text-sm", workspace.hasFocus ? "bg-gray-600/100" :
    "bg-gray-800/30")'
    @click='() => zebar.event.glazewm != null ? zebar.event.glazewm.runCommand(`focus --workspace ${workspace.name}`) : false'>
    {{ workspace.name }}
  </button>
</template>
