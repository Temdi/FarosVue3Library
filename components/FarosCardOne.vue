<script setup>
  const props = defineProps({
    id: { type: [String, Number], required: true },
    title: { type : String, required: true },
    createdAt: { type: String, required: true },
    image: { type: String, required: false },
  });
</script>

<template>
  <div
        class="
            relative overflow-hidden cursor-pointer
            bg-white rounded-lg shadow
            border border-solid border-gray-200
            transform active:scale-[1.01] hover:scale-[1.01] duration-200
        "
    >
      <div v-if="image">
          <img
              alt=""
              :src="image"
              class="h-64 w-full object-cover bg-gray-200"
          />
      </div>

      <div class="
        flex flex-col justify-between
        p-4
      ">
        <div class="font-bold text-lg leading-5">{{ title }}</div>
        <div class="text-sm font-light">{{ createdAt }}</div>
        <div class="mt-2">
          <slot></slot>
        </div>
      </div>
    </div>
</template>
