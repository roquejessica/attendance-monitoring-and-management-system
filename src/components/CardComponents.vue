<template>
  <!-- Main Card -->
  <div class="bg-slate-100 rounded-t-lg overflow-hidden shadow-md mb-8">
    <!-- Card Header -->
    <div class="bg-slate-500 flex justify-between items-center p-2">
      <slot name="card-header"></slot>
    </div>

    <!-- Card Body -->
    <slot />
  </div>
</template>
