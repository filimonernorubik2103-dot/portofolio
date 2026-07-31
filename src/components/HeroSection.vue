<script setup>
import { profile } from '../data/cv'
import { ui, t } from '../i18n/lang'
import profileImg from '../assets/profile.jpeg'
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-ink pt-32 pb-24 lg:pt-40 lg:pb-32">
    <!-- blueprint grid backdrop -->
    <div class="absolute inset-0 bp-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
    <!-- soft blue glow -->
    <div class="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-signal/20 blur-[120px]" />
    <div class="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-blue/20 blur-[110px]" />

    <div class="relative max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
      <div>
        <p class="eyebrow reveal mb-5">{{ t(ui.heroEyebrow) }}</p>

        <h1 class="reveal font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight" v-reveal="80">
          {{ profile.name }}
        </h1>

        <p class="reveal mt-5 font-display font-medium text-signal text-lg lg:text-xl" v-reveal="180">
          {{ t(profile.title) }}
        </p>

        <p class="reveal mt-6 text-white/65 text-base lg:text-[17px] leading-relaxed max-w-xl" v-reveal="260">
          {{ t(profile.summary) }}
        </p>

        <div class="reveal mt-10 flex flex-wrap items-center gap-4" v-reveal="340">
          <button
            @click="$el.ownerDocument.getElementById('experience').scrollIntoView({behavior:'smooth'})"
            class="group inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3.5 font-body font-semibold text-ink text-sm shadow-[0_0_0_0_rgba(46,155,240,0.4)] hover:shadow-[0_0_30px_2px_rgba(46,155,240,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            {{ t(ui.viewExperience) }}
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <a
            href="/CV_Filimon_Erno_Rubik.pdf"
            download
            class="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-body font-semibold text-white text-sm hover:border-signal/60 hover:bg-white/5 transition-all duration-300"
          >
            {{ t(ui.downloadCV) }}
          </a>
        </div>

        <div class="reveal mt-14 flex items-center gap-3 text-white/40 font-mono text-xs" v-reveal="420">
          <span class="h-px w-10 bg-white/20" />
          {{ profile.location }}
          <span class="h-px w-10 bg-white/20" />
        </div>  
      </div>

      <!-- Photo as a technical drawing callout -->
      <div class="reveal relative mx-auto lg:mx-0 w-full max-w-xs" v-reveal="200">
        <div class="bracket text-signal p-4">
          <div class="relative w-64 h-64 mx-auto rounded-full overflow-hidden ring-1 ring-white/10">
            <img :src="profileImg" alt="Foto Filimon Erno Rubik" class="w-full h-full object-cover" />
            <div class="absolute inset-0 rounded-full ring-1 ring-inset ring-signal/20" />
          </div>
        </div>
        <div class="absolute -bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-wider text-signal/70 bg-ink px-2">
          <span>FIG. 01</span>
          <span>SCALE — N.T.S.</span>
        </div>
      </div>
    </div>
  </section>
</template>
