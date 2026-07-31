<script setup>
import { skillGroups } from '../data/cv'
import { ui, t } from '../i18n/lang'
</script>

<template>
  <section id="skills" class="py-24 lg:py-32 bg-paper bp-grid-light">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="reveal mb-16 text-center max-w-xl mx-auto" v-reveal>
        <p class="eyebrow text-blue mb-4">{{ t(ui.skillsEyebrow) }}</p>
        <h2 class="font-display font-bold text-navy text-3xl lg:text-4xl tracking-tight">{{ t(ui.skillsHeading) }}</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(group, i) in skillGroups"
          :key="group.title.id"
          class="reveal bg-white rounded-lg ring-1 ring-line p-7 lg:p-8"
          v-reveal="i * 160"
        >
          <h3 class="font-display font-bold text-navy text-lg mb-6 flex items-center gap-2.5">
            <span class="w-2 h-2 rounded-sm bg-signal" />
            {{ t(group.title) }}
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="skill in group.items"
              :key="skill.id"
              class="text-sm text-navy/80 bg-navy/[0.04] hover:bg-signal/10 hover:text-blue hover:-translate-y-0.5 transition-all duration-200 border border-line rounded-md px-3.5 py-2 cursor-default"
            >
              {{ t(skill) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
