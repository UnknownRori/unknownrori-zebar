<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import {
  WorkspaceWidget,
  InternetWidget,
  NameTagWidget,
  ResourceWidget,
  DateWidget,
  AudioWidget,
} from '@/components/widgets';
</script>

<template>
  <BaseLayout>
    <div class="flex justify-center items-center gap-4">
      <WorkspaceWidget />
      <InternetWidget />
    </div>

    <div class='absolute w-screen flex justify-center items-center gap-4 -z-10'>
      <div>
        <DateWidget />
      </div>
    </div>

    <div class="flex justify-center items-center gap-4">
      <AudioWidget />
      <ResourceWidget />
      <NameTagWidget />
    </div>
  </BaseLayout>
</template>
