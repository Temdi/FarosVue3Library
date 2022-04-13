<script setup>
  const props = defineProps({
    title: { type: String, required: false, default: null },
    image: { type: String, required: false, default: null },
  });
</script>

<template>
  <div
      class="
        relative overflow-hidden cursor-pointer
        bg-white shadow rounded-lg
        transform duration-200 hover:scale-105"
  >
    <div class="
      flex flex-col justify-center items-center
      h-full rounded-xl p-2
    ">
      <div class="m-2" v-if="image">
          <img
              :src="image"
              class="w-2/3 mx-auto"
              alt=""
          />
      </div>

      <div
          v-if="title"
          class="justify-center my-1 text-center"
      >{{ title }}</div>
    </div>
  </div>

</template>