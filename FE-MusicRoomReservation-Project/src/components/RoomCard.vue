<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

// const router = useRouter();

// const props = defineProps<{
//   timeSlots: string[];
// }>();
</script>

<template>
  <div
    class="bg-white rounded-lg sm:p-5 m-5 h-fit shadow-lg transition-transform transform hover:scale-[1.02] duration-300"
  >
    <div
      class="lg:grid lg:grid-cols-7 lg:gap-x-5 sm:flex sm:flex-col sm:justify-center sm:items-start px-2"
    >
      <!-- Image Slot -->
      <slot name="image">image ...</slot>

      <!-- Room Reservation Slot -->
      <div class="room-reservation col-span-3 mt-2 text-base lg:text-xl">
        <h3 class="font-bold lg:mb-2 text-gray-800">
          <slot name="room-name">room name ...</slot>
        </h3>
        <p class="text-gray-500 lg:mb-4">
          <slot name="capacity">capacity ...</slot>
        </p>

        <div class="grid grid-cols-4 gap-2 sm:gap-3 text-center mt-3">
          <slot name="timeSlots">time slot ...</slot>
        </div>
      </div>

      <!-- Divider -->

      <div
        class="room-detail flex col-span-2 mt-3 lg:mt-2 text-base lg:text-xl h-full"
      >
        <div class="h-full w-0.5 bg-slate-200 lg:block"></div>
        <div class="lg:ml-7">
          <h3 class="text-base lg:text-xl font-bold lg:mb-2 text-gray-800">
            Room Detail
          </h3>
          <slot name="details"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
