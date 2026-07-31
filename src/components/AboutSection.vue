<script setup>
import { profile, stats } from '../data/cv'
import { ui, t } from '../i18n/lang'
</script>

<template>
  <section id="about" class="relative py-24 lg:py-32 bg-paper">
    <div class="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
      <div class="reveal" v-reveal>
        <p class="eyebrow text-blue mb-4">{{ t(ui.aboutEyebrow) }}</p>
        <h2 class="font-display font-bold text-navy text-3xl lg:text-4xl leading-tight tracking-tight">
          {{ t(ui.aboutHeading) }}
        </h2>
        <div class="mt-6 h-px w-16 bg-signal/50" />
      </div>

      <div class="reveal space-y-5" v-reveal="120">
        <p class="text-steel text-base lg:text-[17px] leading-relaxed">
          {{ t(profile.summary) }}
        </p>
        <p class="text-steel text-base lg:text-[17px] leading-relaxed">
          {{ t(profile.summaryExtra) }}
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8">
          <div
            v-for="(s, i) in stats"
            :key="s.label.id"
            class="reveal bracket text-signal/60 p-4 bg-white rounded-md ring-1 ring-line"
            v-reveal="150 + i * 90"
          >
            <p class="font-display font-extrabold text-navy text-2xl lg:text-3xl">{{ s.value }}</p>
            <p class="mt-1 text-steel text-xs leading-snug">{{ t(s.label) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
