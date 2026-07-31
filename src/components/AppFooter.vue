<script setup>
import { profile } from '../data/cv'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink border-t border-white/10 py-8">
    <div class="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs font-mono">
      <span>© {{ year }} {{ profile.name }}</span>
      <span>{{ profile.email }}</span>
    </div>
  </footer>
</template>
