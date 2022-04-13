<script setup>
  import { inject } from 'vue';

  const props = defineProps({
    val: { required: true, type: [Number, String]},
  });

  const currentTab = inject('tab');

</script>
<template>
  <div class="w-full inline-block align-top whitespace-normal">
    <div class="faros-tab-panel-content">
      <slot />
    </div>
  </div>
</template>
