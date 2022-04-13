<template>
  <div
      class="overflow-hidden whitespace-nowrap hide-scrollbar"
      @mousedown="onMoveStart"
      @mouseup="onMoveEnd"
      @mouseleave="onMoveEnd"
      @touchstart="onMoveStart"
      @touchend="onMoveEnd"
      ref="tabPanelsContainerRef"
  >
    <slot/>
  </div>
</template>

<script setup>
  import {useSlots, ref, reactive, onMounted, onUnmounted, onUpdated, watch, computed, provide} from 'vue';

  const slots = useSlots();

  const props = defineProps({
    modelValue: { default: null, type: [String, Number] },
    animate: { default: false, type: Boolean },
    swipeable: { default: false, type: Boolean },
    swipeableThreshold: { default: 50, type: Number },
  })

  const emits = defineEmits(['update:modelValue']);

  const tabPanelsContainerRef = ref(null);

  const state = reactive({
    active: computed(() => props.modelValue),
    start: false,
    startPosition: { x: 0, y: 0 },
    tabPanelOptions: []
  });

  provide('tab', state);

  onMounted(() => {
    getTabPanelOptions();
    scrollToModelValue(props.modelValue);
    window.addEventListener("resize", onWidthChange);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onWidthChange);
  });

  onUpdated(() => {
    getTabPanelOptions();
    scrollToModelValue(props.modelValue);
  });

  watch(() => props.modelValue, (modelValue) => {
    scrollToModelValue(modelValue);
  }, {immediate: true});


const debounce = (callback, ms = 50) => {
  let timeout = null;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, ms);
  };
}

  const onWidthChange = debounce(() => {
    getTabPanelOptions();
    scrollToModelValue(props.modelValue, false);
  }, 50);

  function scrollToModelValue(modelValue, animate = true) {
    const option = state.tabPanelOptions.find(option => option.value === modelValue);

    if (option && tabPanelsContainerRef) {
      if (option.height) {
        tabPanelsContainerRef.value.style.height = option.height+'px';
      }

      tabPanelsContainerRef.value.scrollTo({
        left: option.left,
        behavior: props.animate ? 'smooth' : undefined
      });
    }
  }

function getTabPanelOptions() {
  if (slots.default && tabPanelsContainerRef) {
    let vnodes = slots.default() || [];

    const size = tabPanelsContainerRef.value?.getBoundingClientRect();
    const width = size?.width || 0;
    const height = size?.height || 0;

    state.tabPanelOptions = vnodes.map((vnode, i) => {
      return {
        left: width * i,
        height: tabPanelsContainerRef.value?.children[i]?.getBoundingClientRect().height || null,
        value: vnode.props !== undefined && vnode.props !== null ? vnode.props.val : undefined
      };
    });
  }
}

function activateTab(tab) {
  emits('update:modelValue', tab);
}

function getPosition(event) {
  if (event.type.includes('touch')) {
    const touch = (event).changedTouches[0];
    return touch ? {
      x: touch.clientX,
      y: touch.clientY
    } : undefined;
  } else if (event.type.includes('mouse')) {
    return {
      x: (event).clientX,
      y: (event).clientY,
    }
  } else {
    return undefined;
  }
}

function onMoveStart(event) {
  if (props.swipeable) {
    state.start = true;
    const position = getPosition(event);
    if (!position) return;
    state.startPosition.x = position.x;
    state.startPosition.y = position.y;
  }
}

function onMoveEnd(event) {
  if (state.start) {
    state.start = false;
    const position = getPosition(event);
    if (!position) return;
    const selectedIndex = state.tabPanelOptions.findIndex(option => option.value === props.modelValue);
    const dx = state.startPosition.x - position.x;

    if (dx < -props.swipeableThreshold) {
      if (selectedIndex > 0) {
        const tabPanelOption = state.tabPanelOptions[selectedIndex - 1];
        activateTab(tabPanelOption.value);
      }
    } else if (dx > props.swipeableThreshold) {
      if (selectedIndex < state.tabPanelOptions.length - 1) {
        const tabPanelOption = state.tabPanelOptions[selectedIndex + 1];
        activateTab(tabPanelOption.value);
      }
    }
  }
}
</script>
