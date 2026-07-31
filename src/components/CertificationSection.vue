<script setup>
import { certifications } from '../data/cv'
import { ui, t } from '../i18n/lang'
</script>

<template>
  <section id="certifications" class="py-24 lg:py-28 bg-paper">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="reveal mb-12" v-reveal>
        <p class="eyebrow text-blue mb-4">{{ t(ui.certificationEyebrow) }}</p>
        <h2 class="font-display font-bold text-navy text-3xl lg:text-4xl tracking-tight">{{ t(ui.certificationHeading) }}</h2>
      </div>

      <div
        v-for="cert in certifications"
        :key="cert.name.id"
        class="reveal flex flex-col sm:flex-row sm:items-center gap-5 bg-white rounded-lg ring-1 ring-line p-7 lg:p-8 hover:ring-signal/40 transition-all duration-300"
        v-reveal="120"
      >
        <div class="w-11 h-11 rounded-md bg-blue/10 flex items-center justify-center shrink-0">
          <span class="w-3 h-3 rounded-sm bg-signal" />
        </div>
        <div>
          <h3 class="font-display font-bold text-navy text-lg">{{ t(cert.name) }}</h3>
          <p class="text-steel text-sm mt-1">{{ cert.issuer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
