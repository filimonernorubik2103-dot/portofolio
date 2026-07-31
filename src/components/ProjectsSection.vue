<script setup>
import { projects } from '../data/cv'
import { ui, t } from '../i18n/lang'
const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => !p.featured)
</script>

<template>
  <section id="projects" class="py-24 lg:py-32 bg-ink">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="reveal mb-16 text-center max-w-xl mx-auto" v-reveal>
        <p class="eyebrow mb-4">{{ t(ui.projectsEyebrow) }}</p>
        <h2 class="font-display font-bold text-white text-3xl lg:text-4xl tracking-tight">
          {{ t(ui.projectsHeading) }}
        </h2>
      </div>

      <div class="grid gap-6">
        <!-- Featured -->
        <div
          v-if="featured"
          class="reveal group relative rounded-lg bg-navy2/60 ring-1 ring-white/10 hover:ring-signal/40 p-8 lg:p-10 transition-all duration-300"
          v-reveal
        >
          <span class="eyebrow">{{ t(ui.featured) }}</span>
          <h3 class="font-display font-bold text-white text-xl lg:text-2xl mt-3 leading-snug">
            {{ t(featured.name) }}
          </h3>
          <p class="text-signal/80 font-mono text-xs mt-3">{{ t(featured.type) }}</p>
          <p class="text-white/60 mt-4 leading-relaxed max-w-3xl">{{ t(featured.description) }}</p>
        </div>

        <!-- Others -->
        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="(p, i) in others"
            :key="p.name.id"
            class="reveal group rounded-lg bg-navy2/40 ring-1 ring-white/10 hover:ring-signal/40 p-7 transition-all duration-300 hover:-translate-y-1"
            v-reveal="i * 150 + 100"
          >
            <h3 class="font-display font-bold text-white text-lg leading-snug">{{ t(p.name) }}</h3>
            <p class="text-signal/80 font-mono text-xs mt-3">{{ t(p.type) }}</p>
            <p class="text-white/55 text-sm mt-4 leading-relaxed">{{ t(p.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
