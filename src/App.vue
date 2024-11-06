<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="p-4">
      <nav>
        <RouterLink to="/">HOME</RouterLink>
      </nav>
    </div>
  </header>
  <main class="container px-4 pt-8 mx-auto">
    <RouterView />
  </main>
</template>
