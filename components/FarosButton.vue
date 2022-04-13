<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    color: { required: false, type: String, default: 'primary', validator(value) {
      return ['primary', 'success', 'warning', 'danger'].includes(value)
    }},
    size: { required: false, type: String, default: 'base', validator(value) {
      return ['sm', 'base', 'lg'].includes(value)
    }},
    href: { required: false, type: String }
  })

  const componentType = computed(() => {
    return props.href ? 'a' : 'button';
  })
</script>

<template>
  <component :is="componentType"
        :href="href"
             class="rounded"
        :class="[
            {'text-sm px-4 py-1' : size === 'sm' },
            {'text-base px-6 py-2' : size === 'base' },
            {'text-lg px-10 py-3' : size === 'lg' },
            {'bg-blue-500 hover:bg-blue-600 text-white' : color === 'primary' },
            {'bg-green-500 hover:bg-green-600 text-white' : color === 'success' },
            {'bg-orange-500 hover:bg-orange-600 text-white' : color === 'warning' },
            {'bg-red-500 hover:bg-red-600 text-white' : color === 'danger' },
        ]">
    <div class="flex">
      <div class="mr-4">
        <slot name="iconStart"></slot>
      </div>
      <div>
        <slot></slot>
      </div>
      <div class="ml-4">
        <slot name="iconEnd"></slot>
      </div>
    </div>
  </component>
</template>