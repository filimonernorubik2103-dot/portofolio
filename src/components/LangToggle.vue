<script setup>
import { lang, setLang } from '../i18n/lang'

defineProps({
  dark: { type: Boolean, default: true },
})
</script>

<template>
  <div
    class="relative inline-flex items-center rounded-md border font-mono text-xs select-none"
    :class="dark ? 'border-white/20 bg-white/5' : 'border-line bg-white'"
    role="group"
    aria-label="Language switch"
  >
    <span
      class="absolute top-0.5 bottom-0.5 w-1/2 rounded-[5px] bg-signal transition-transform duration-300 ease-out"
      :class="lang === 'en' ? 'translate-x-full' : 'translate-x-0'"
      style="left: 2px; width: calc(50% - 2px);"
    />
    <button
      type="button"
      class="relative z-10 w-10 py-1.5 text-center transition-colors duration-200"
      :class="lang === 'id' ? 'text-ink font-semibold' : dark ? 'text-white/50 hover:text-white/80' : 'text-steel hover:text-navy'"
      @click="setLang('id')"
      :aria-pressed="lang === 'id'"
      data-testid="lang-id"
    >
      ID
    </button>
    <button
      type="button"
      class="relative z-10 w-10 py-1.5 text-center transition-colors duration-200"
      :class="lang === 'en' ? 'text-ink font-semibold' : dark ? 'text-white/50 hover:text-white/80' : 'text-steel hover:text-navy'"
      @click="setLang('en')"
      :aria-pressed="lang === 'en'"
      data-testid="lang-en"
    >
      EN
    </button>
  </div>
</template>
