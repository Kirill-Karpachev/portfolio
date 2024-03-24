<template>
  <div class="layouts-default">
    <LayoutHeader />
    <main class="layouts-default__main">
      <slot></slot>
    </main>
    <LayoutFooter />
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
  .layouts-default {
    padding: 70px;
    &__main {
    }
  }
</style>
 