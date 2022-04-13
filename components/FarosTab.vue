<script setup>
import { reactive, computed, inject } from 'vue';

const props = defineProps({
  val: { default: null, type: [String, Number] },
})

const tabs = inject('tabs', {
  state: reactive({
    active: null,
    activeClass: '',
  }),
  activateTab: () => {},
});

const state = reactive({
  isActive: computed(() => tabs.state.active === props.val),
  activeClass: computed(() => tabs.state.activeClass)
});

const onClickTab = () => {
  tabs.activateTab(props.val);
}
</script>

<template>
  <div
      class="cursor-pointer"
      :class="[state.isActive ? state.activeClass : '']"
      @click="onClickTab"
  >
      <slot></slot>
  </div>
</template>