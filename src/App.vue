<script setup>
import { t } from './i18n'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MenuSection from './components/MenuSection.vue'
import EventsSection from './components/EventsSection.vue'
import GallerySection from './components/GallerySection.vue'
import ReserveSection from './components/ReserveSection.vue'
import VisitSection from './components/VisitSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="demo-ribbon">{{ t.ribbon }}</div>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <EventsSection />
    <GallerySection />
    <ReserveSection />
    <VisitSection />
  </main>
  <FooterSection />
  <a href="#reserve" class="sticky-reserve">{{ t.nav.reserve }}</a>
</template>
