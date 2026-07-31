<script setup>
import { experience } from '../data/cv'
import { ui, t } from '../i18n/lang'
</script>

<template>
  <section id="experience" class="relative py-24 lg:py-32 bg-ink bp-grid">
    <div class="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
    <div class="relative max-w-4xl mx-auto px-6 lg:px-8">
      <div class="reveal mb-16 text-center" v-reveal>
        <p class="eyebrow mb-4">{{ t(ui.experienceEyebrow) }}</p>
        <h2 class="font-display font-bold text-white text-3xl lg:text-4xl tracking-tight">
          {{ t(ui.experienceHeading) }}
        </h2>
      </div>

      <div class="relative">
        <!-- vertical line -->
        <div class="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 hidden sm:block" />

        <div
          v-for="(job, i) in experience"
          :key="job.org"
          class="reveal relative sm:pl-12 pb-14 last:pb-0"
          v-reveal="i * 140"
        >
          <span class="hidden sm:flex absolute left-0 top-1.5 w-4 h-4 rounded-full bg-ink ring-2 ring-signal items-center justify-center">
            <span class="w-1.5 h-1.5 rounded-full bg-signal" />
          </span>

          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
            <h3 class="font-display font-bold text-white text-lg lg:text-xl">{{ t(job.role) }}</h3>
            <span class="font-mono text-xs text-signal/80 whitespace-nowrap">{{ t(job.period) }}</span>
          </div>
          <p class="text-white/50 text-sm mb-4">
            {{ job.org }} <span v-if="job.location">— {{ job.location }}</span>
          </p>

          <ul class="space-y-2.5">
            <li
              v-for="point in job.points"
              :key="point.id"
              class="flex gap-3 text-white/65 text-[15px] leading-relaxed"
            >
              <span class="mt-2 w-1 h-1 rounded-full bg-signal/70 shrink-0" />
              {{ t(point) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
