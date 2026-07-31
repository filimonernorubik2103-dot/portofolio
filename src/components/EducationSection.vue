<script setup>
import { education } from '../data/cv'
import { ui, t } from '../i18n/lang'
</script>

<template>
  <section id="education" class="py-24 lg:py-28 bg-paper">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="reveal mb-12" v-reveal>
        <p class="eyebrow text-blue mb-4">{{ t(ui.educationEyebrow) }}</p>
        <h2 class="font-display font-bold text-navy text-3xl lg:text-4xl tracking-tight">{{ t(ui.educationHeading) }}</h2>
      </div>

      <div class="reveal bracket text-signal/50 p-6 lg:p-8 bg-white rounded-lg ring-1 ring-line flex flex-col sm:flex-row sm:items-center justify-between gap-4" v-reveal="140">
        <div>
          <h3 class="font-display font-bold text-navy text-xl">{{ education.degree }}</h3>
          <p class="text-steel mt-1">{{ education.institution }}</p>
        </div>
        <span class="font-mono text-sm text-blue bg-blue/5 border border-blue/20 rounded px-3 py-1.5 w-fit">
          {{ t(education.period) }}
        </span>
      </div>
    </div>
  </section>
</template>
