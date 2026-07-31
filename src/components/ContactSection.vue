<script setup>
import { profile } from '../data/cv'
import { ui, t } from '../i18n/lang'
</script>

<template>
  <section id="contact" class="relative py-24 lg:py-32 bg-ink bp-grid overflow-hidden">
    <div class="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-signal/15 blur-[130px]" />

    <div class="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
      <p class="eyebrow mb-4">{{ t(ui.contactEyebrow) }}</p>
      <h2 class="reveal font-display font-bold text-white text-3xl lg:text-5xl tracking-tight" v-reveal>
        {{ t(ui.contactHeading) }}
      </h2>
      <p class="reveal mt-5 text-white/60 max-w-lg mx-auto leading-relaxed" v-reveal="120">
        {{ t(ui.contactBody) }}
      </p>
      <div class="reveal mt-10 flex flex-wrap items-center justify-center gap-4" v-reveal="220">
        <a
          :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent('Peluang Kerja - Filimon Erno Rubik')}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3.5 font-semibold text-ink text-sm hover:-translate-y-0.5 hover:shadow-[0_0_30px_2px_rgba(46,155,240,0.35)] transition-all duration-300"
        >
          {{ t(ui.emailMe) }}
        </a>
        <a
          :href="`tel:${profile.phone}`"
          class="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-semibold text-white text-sm hover:border-signal/60 hover:bg-white/5 transition-all duration-300"
        >
          {{ profile.phone }}
        </a>
        <a
          href="/CV_Filimon_Erno_Rubik.pdf"
          download
          class="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-semibold text-white text-sm hover:border-signal/60 hover:bg-white/5 transition-all duration-300"
        >
          {{ t(ui.downloadCV) }}
        </a>
      </div>

      <p class="reveal mt-10 font-mono text-xs text-white/35" v-reveal="300">
        {{ profile.location }}
      </p>
    </div>
  </section>
</template>
