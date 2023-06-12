<template>
  <h1>Vue test | Peoples</h1>

  <div class="container peoples-search">
    <div class="row">
      <div class="col-md-4">
        <input
          v-model="searchText"
          type="text"
          class="form-control"
          placeholder="Search..."
          aria-label="search"
        />

        <ul class="dropdown-menu" :class="{ show: isShowDropdown }">
          <div v-if="isSearchLoading" class="text-center">
            <div class="spinner-border m-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <search-item
            v-for="(people, index) in searchResult"
            v-else
            :id="index"
            :key="index"
            :people="people"
          />
          <div
            v-if="!isSearchLoading && searchResult.length == 0"
            class="empty"
          >
            <h6>No result</h6>
          </div>
        </ul>
      </div>
    </div>
  </div>

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
        v-for="(people, index) in peoples"
        :id="index"
        :key="index"
        :is-favorite="isFavorite(people)"
        :people="people"
        @action:add="addToFavorite(people)"
        @action:remove="removeFromFavorite(people)"
      />
    </tbody>
  </table>

  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li v-if="isPrevious" class="page-item">
        <router-link
          class="page-link"
          :to="{ name: 'peoples', query: { page: Number(pageCurrent) - 1 } }"
        >
          Previous
        </router-link>
      </li>
      <li
        v-for="n in pageCount"
        :key="n"
        class="'page-item'"
        :class="{ active: pageCurrent == n }"
      >
        <router-link
          class="page-link"
          :to="{ name: 'peoples', query: { page: n } }"
        >
          <span
            v-if="pageCurrent == n && isLoading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-else>{{ n }}</span>
        </router-link>
      </li>

      <li v-if="isNext" class="page-item">
        <router-link
          class="page-link"
          :to="{ name: 'peoples', query: { page: Number(pageCurrent) + 1 } }"
        >
          Next
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, onMounted, watch, ref } from "vue";
import { useStore } from "@/store/index";
import peopleItem from "./components/people-item.vue";
import { useRoute } from "vue-router";
import searchItem from "./components/search-item.vue";
import { People } from "@/types/people";

const store = useStore();
const route = useRoute();

const isShowDropdown = ref(false);
const searchQuery = ref("");

const peoples = computed(() => store.state.people.peoples || []);
const pageCount = computed(() => Math.ceil(store.state.people.count / 10));
const pageCurrent = computed(() => (route.query.page || 1) as number);
const isLoading = computed(() => store.state.people.loading);
const isNext = computed(() => store.state.people.next !== null);
const isPrevious = computed(() => store.state.people.previous !== null);
const searchResult = computed(() => store.state.people.searchResult || []);
const isSearchLoading = computed(() => store.state.people.searchLoading);
const favorites = computed(() => store.state.favorites.peoples);

const searchText = computed({
  get: () => searchQuery.value,
  set: (value) => {
    searchQuery.value = value;
    isShowDropdown.value = value.length > 1;

    if (value.length > 1) {
      searchPeople();
    } else {
      store.dispatch("people/cleanSearchResult");
    }
  },
});

const isFavorite = (item: People) => {
  return favorites.value.filter((fav) => fav.name === item.name).length > 0;
};

const getPeoples = () => {
  store.dispatch("people/getAllPeoples", pageCurrent.value);
};

const searchPeople = () => {
  store.dispatch("people/searchPeople", searchQuery.value);
};

const addToFavorite = (item: People) => {
  store.dispatch("favorites/addToFavorites", item);
};

const removeFromFavorite = (item: People) => {
  store.dispatch("favorites/removeFromFavorites", item);
};

onMounted(() => {
  getPeoples();
});

watch(pageCurrent, () => {
  getPeoples();
});
</script>

<style lang="less" scoped>
@import "@/assets/styles/theme.less";

.col-md-4 {
  position: relative;
  padding: 0;
}

.dropdown-menu {
  width: 100%;
  margin-top: 2px;
}

.peoples-search {
  margin: 32px 0 32px 0;
}

.empty {
  padding: 16px;
  text-align: center;
}
</style>
