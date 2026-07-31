<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CertificationSection from './components/CertificationSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
