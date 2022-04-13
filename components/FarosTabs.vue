<script setup>
import { reactive, computed, provide } from 'vue';

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    default: null,
    type: [String, Number]
  },
  activeClass: { required: false, type: [ String ] }
})

const state = reactive({
  active: computed(() => props.modelValue),
  activeClass: props.activeClass,
})

const activateTab = (tab) => {
  emits('update:modelValue', tab);
}

provide('tabs', {state, activateTab})
</script>

<template>
  <div class="flex flex-wrap">
    <slot />
  </div>
</template>


