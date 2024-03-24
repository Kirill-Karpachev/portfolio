<template>
  <header class="layout-header">
    <NuxtLink :to="name.path">{{ name.name }}</NuxtLink>
    <nav>
      <ul>
        <li
          v-for="item in nav"
          :key="item.name"
        >
          <NuxtLink :to="item.path">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtLink :to="contact.path">{{ contact.name }}</NuxtLink>
  </header>
</template>

<script setup>
  const name = ref({
    name: "kirill-karpachev",
    path: "/",
  });
  const nav = ref([
    {
      name: "_hello",
      path: "/",
    },
    {
      name: "_about-me",
      path: "/about-me",
    },
    {
      name: "_projects",
      path: "/projects",
    },
  ]);
  const contact = ref({
    name: "_contact-me",
    path: "/contact-me",
  });
</script>

<style lang="scss" scoped>
  .layout-header {
  }
</style>