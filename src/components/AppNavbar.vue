<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ui, t } from '../i18n/lang'
import LangToggle from './LangToggle.vue'
const cvUrl = `${import.meta.env.BASE_URL}CV_Filimon_Erno_Rubik.pdf`
const links = [
  { id: 'about', label: ui.nav.about },
  { id: 'experience', label: ui.nav.experience },
  { id: 'skills', label: ui.nav.skills },
  { id: 'projects', label: ui.nav.projects },
  { id: 'contact', label: ui.nav.contact },
]

const scrolled = ref(false)
const menuOpen = ref(false)
const active = ref('')

function onScroll() {
  scrolled.value = window.scrollY > 24
  let current = ''
  for (const l of links) {
    const el = document.getElementById(l.id)
    if (el && el.getBoundingClientRect().top < 140) current = l.id
  }
  active.value = current
}

function goTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-ink/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(46,155,240,0.25)]' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
      <button @click="goTo('home')" class="font-display font-bold text-white tracking-tight text-lg">
        Erno<span class="text-signal"></span>
      </button>

      <ul class="hidden md:flex items-center gap-8 font-body text-sm text-white/70">
        <li v-for="l in links" :key="l.id">
          <button
            @click="goTo(l.id)"
            class="relative py-2 transition-colors hover:text-white"
            :class="active === l.id ? 'text-white' : ''"
          >
            {{ t(l.label) }}
            <span
              class="absolute -bottom-0.5 left-0 h-[2px] bg-signal transition-all duration-300"
              :class="active === l.id ? 'w-full' : 'w-0'"
            />
          </button>
        </li>
      </ul>
      <div class="hidden md:flex items-center gap-3">

        <a
          :href="cvUrl"
          download
          class="inline-flex items-center gap-2 rounded-md border border-signal/40 px-4 py-2 text-sm font-medium text-white hover:bg-signal/10 hover:border-signal transition-colors font-mono"
        >
          {{ t(ui.downloadCV) }}
        </a>
        <LangToggle />
      </div>

      <div class="md:hidden flex items-center gap-3">
        <LangToggle />
        <button
          class="text-white w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <span class="block h-[2px] w-6 bg-white transition-transform duration-300" :class="menuOpen ? 'rotate-45 translate-y-[7px]' : ''" />
          <span class="block h-[2px] w-6 bg-white transition-opacity duration-300" :class="menuOpen ? 'opacity-0' : ''" />
          <span class="block h-[2px] w-6 bg-white transition-transform duration-300" :class="menuOpen ? '-rotate-45 -translate-y-[7px]' : ''" />
        </button>
      </div>
    </nav>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul v-if="menuOpen" class="md:hidden bg-ink/95 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-1 font-body text-white/80">
        <li v-for="l in links" :key="l.id">
          <button @click="goTo(l.id)" class="w-full text-left py-3 border-b border-white/10">
            {{ t(l.label) }}
          </button>
        </li>
        <li class="pt-4">
          <a
            :href="cvUrl"
            download
            class="block text-center rounded-md border border-signal/40 py-2.5 text-white font-mono text-sm"
          >
            {{ t(ui.downloadCV) }}
          </a>
        </li>
      </ul>
    </transition>
  </header>
</template>
