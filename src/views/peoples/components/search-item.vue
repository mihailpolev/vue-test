<template>
  <li>
    <router-link
      class="dropdown-item"
      :to="{ name: 'profile', params: { id } }"
    >
      {{ people.name }}
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { People } from "@/types/people";

defineProps({
  id: {
    type: Number,
    default: 0,
  },
  people: {
    type: Object as PropType<People>,
    default: () => ({}),
  },
});
</script>

<style lang="less">
@import "@/assets/styles/theme.less";
</style>
