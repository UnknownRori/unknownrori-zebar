<script lang="ts" setup>
import useZebar from '@/stores/useZebar.ts';
import { WorkspaceItem } from '@/components/ui/workspaces';
import { BlinkTransition } from '@/components/ui/transition';
import { Island } from '@/components/ui/island';

const zebar = useZebar();
</script>

<template>
  <BlinkTransition>
    <Island v-if='zebar.event.glazewm'>
      <WorkspaceItem :key='workspace.name' :workspace='workspace'
        v-for='workspace in zebar.event.glazewm.currentWorkspaces' />
    </Island>
    <Island v-else>
      No Workspace
    </Island>
  </BlinkTransition>
</template>
