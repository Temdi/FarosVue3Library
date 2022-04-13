<template>
  <div class="
    w-fit
    p-4
    overflow-hidden
    bg-white
    rounded-lg shadow border border-solid border-gray-200
  ">
    <div class="w-full flex justify-start items-center">
      <div>
        <slot name="icon"></slot>
      </div>

      <div class="flex flex-col ml-4 font-light">
        <div>
          <slot></slot>
        </div>

        <div class="text-2xl font-bold mt-1">
          <slot name="value"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
