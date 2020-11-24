<template>
  <div id="app">
    <keep-alive>
      <router-view
        v-if="$route.meta && $route.meta.keepAlive"
        :key="$route.fullPath"
      >
      </router-view>
    </keep-alive>
    <router-view
      v-if="!($route.meta && $route.meta.keepAlive)"
      :key="$route.fullPath"
    >
    </router-view>
  </div>
</template>
