import { ref, watchEffect } from 'vue'

// Reactive current language. Defaults to Indonesian since the CV/source
// content is originally in Bahasa Indonesia.
export const lang = ref('id')

export function setLang(l) {
  lang.value = l
}

export function toggleLang() {
  lang.value = lang.value === 'id' ? 'en' : 'id'
}

// Keep <html lang="..."> in sync for accessibility/SEO.
watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang.value
  }
})

// t(field): field can either be a plain string/number (language-agnostic,
// e.g. a name, a date, a phone number) or a { id, en } object. Returns the
// right string for the current language either way.
export function t(field) {
  if (field && typeof field === 'object' && ('id' in field || 'en' in field)) {
    return field[lang.value] ?? field.id ?? field.en ?? ''
  }
  return field
}

// Static UI copy (nav, section eyebrows/headings, buttons, misc.) that
// isn't part of the CV data itself.
export const ui = {
  nav: {
    about: { id: 'About', en: 'About' },
    experience: { id: 'Pengalaman', en: 'Experience' },
    skills: { id: 'Keahlian', en: 'Skills' },
    projects: { id: 'Proyek', en: 'Projects' },
    contact: { id: 'Kontak', en: 'Contact' },
  },
  downloadCV: { id: 'Unduh CV', en: 'Download CV' },
  heroEyebrow: { id: 'Portfolio — Teknik Industri', en: 'Portfolio — Industrial Engineering' },
  viewExperience: { id: 'Lihat Pengalaman', en: 'View Experience' },
  aboutEyebrow: { id: 'Tentang', en: 'About' },
  aboutHeading: { id: 'Profil Profesional', en: 'Professional Profile' },
  experienceEyebrow: { id: 'Pengalaman', en: 'Experience' },
  experienceHeading: { id: 'Pengalaman Kerja & Praktik', en: 'Work & Practical Experience' },
  educationEyebrow: { id: 'Pendidikan', en: 'Education' },
  educationHeading: { id: 'Pendidikan', en: 'Education' },
  skillsEyebrow: { id: 'Keahlian', en: 'Skills' },
  skillsHeading: { id: 'Keahlian', en: 'Skills' },
  projectsEyebrow: { id: 'Proyek & Riset', en: 'Projects & Research' },
  projectsHeading: { id: 'Proyek, Riset & Kompetisi', en: 'Projects, Research & Competitions' },
  featured: { id: 'Unggulan', en: 'Featured' },
  certificationEyebrow: { id: 'Sertifikasi', en: 'Certification' },
  certificationHeading: { id: 'Sertifikasi', en: 'Certification' },
  contactEyebrow: { id: 'Kontak', en: 'Contact' },
  contactHeading: { id: "Mari Terhubung", en: "Let's Connect" },
  contactBody: {
    id: 'Terbuka untuk peluang di bidang operasional, PPIC, dan manajemen fasilitas. Silakan hubungi saya melalui salah satu kanal berikut.',
    en: 'Open to opportunities in operations, PPIC, and facility management. Feel free to reach out through any of the channels below.',
  },
  emailMe: { id: 'Kirim Email', en: 'Email Me' },
}
