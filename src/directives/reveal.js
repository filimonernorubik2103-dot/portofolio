// v-reveal: adds .reveal then .in-view when element enters viewport.
// Supports a delay via v-reveal="120" (ms) for stagger effects.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target
        const delay = el.__revealDelay || 0
        setTimeout(() => el.classList.add('in-view'), delay)
        observer.unobserve(el)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
)

export default {
  mounted(el, binding) {
    el.classList.add('reveal')
    el.__revealDelay = typeof binding.value === 'number' ? binding.value : 0
    observer.observe(el)
    // Safety net: if for any reason the observer never fires (e.g. a
    // sandboxed preview iframe with unusual layout timing), force the
    // content visible after 2s so it's never permanently blank.
    el.__revealFallback = setTimeout(() => el.classList.add('in-view'), 2000)
  },
  unmounted(el) {
    observer.unobserve(el)
    clearTimeout(el.__revealFallback)
  },
}
