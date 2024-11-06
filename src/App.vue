<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">HOME</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
