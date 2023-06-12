<template>
  <h1 class="title">Vue test | Profile</h1>
  <a class="icon-link" href="javascript:void(0)" @click="router.go(-1)">Back</a>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="less" scoped>
@import "@/assets/styles/theme.less";

.title {
  margin: 0 0 32px 0;
}
</style>
