<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vue test</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{ name: 'main' }">
            Home
          </router-link>
          <router-link class="nav-link" :to="{ name: 'peoples' }">
            Peoples
          </router-link>
          <router-link class="nav-link" :to="{ name: 'favorites' }">
            Favorites
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="less">
@import "@/assets/styles/theme.less";
</style>
