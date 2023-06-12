<template>
  <main>
    <app-header />
    <div class="container app__content">
      <div class="row justify-content-center">
        <div class="col-12">
          <router-view name="view"></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import appHeader from "@/components/header.vue";
</script>

<style lang="less">
@import "./assets/styles/theme.less";

#app {
  position: relative;
}
.app {
  &__content {
    padding: 32px 0 32px 0;
  }
}
</style>
