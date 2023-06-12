<template>
  <h1 class="title">Vue test | Favorites</h1>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">name</th>
        <th scope="col">height</th>
        <th scope="col">mass</th>
        <th scope="col">hair_color</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <people-item
        v-for="(people, index) in favorites"
        :id="index"
        :key="index"
        :is-favorite="true"
        :people="people"
        @action:add="addToFavorite(people)"
        @action:remove="removeFromFavorite(people)"
      />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/index";
import peopleItem from "@/views/peoples/components/people-item.vue";
import { People } from "@/types/people";

const store = useStore();

const favorites = computed(() => store.state.favorites.peoples);

const addToFavorite = (item: People) => {
  store.dispatch("favorites/addToFavorites", item);
};

const removeFromFavorite = (item: People) => {
  store.dispatch("favorites/removeFromFavorites", item);
};
</script>

<style lang="less" scoped>
@import "@/assets/styles/theme.less";

.title {
  margin: 0 0 32px 0;
}
</style>
