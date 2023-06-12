<template>
  <tr>
    <td>
      <router-link :to="{ name: 'profile', params: { id } }">
        {{ people.name }}
      </router-link>
    </td>
    <td>{{ people.height }}</td>
    <td>{{ people.mass }}</td>
    <td>{{ people.hair_color }}</td>
    <td>
      <button
        v-if="!isFavorite"
        type="button"
        class="btn btn-primary"
        @click.stop="$emit('action:add')"
      >
        Add to favorite
      </button>
      <button
        v-else
        type="button"
        class="btn btn-danger"
        @click.stop="$emit('action:remove')"
      >
        Remove from favorite
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { People } from "@/types/people";

defineProps({
  id: {
    type: Number,
    default: 0,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  people: {
    type: Object as PropType<People>,
    default: () => ({}),
  },
});

defineEmits<{
  (e: "action:add"): void;
  (e: "action:remove"): void;
}>();
</script>

<style lang="less">
@import "@/assets/styles/theme.less";
.people-item {
  display: block;
}
</style>
