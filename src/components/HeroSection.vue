<script setup>
import { ref, onMounted } from 'vue'
import { t } from '../i18n'
import { img } from '../site'

// صورة الخلفية اختيارية: public/img/hero.jpg
const heroBg = ref(null)
onMounted(() => {
  const im = new Image()
  im.onload = () => { heroBg.value = { '--hero': `url(${im.src})` } }
  im.src = img('hero.jpg')
})
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-bg" :style="heroBg"></div>
    <div class="hero-lines" aria-hidden="true"></div>
    <div class="container hero-content">
      <p class="eyebrow" v-reveal>{{ t.hero.eyebrow }}</p>
      <h1 class="hero-title" v-reveal>
        <span class="hero-en">STEEL</span>
        <span class="hero-ar">{{ t.hero.title }}</span>
      </h1>
      <p class="hero-lead" v-reveal>{{ t.hero.lead }}</p>
      <div class="hero-cta" v-reveal>
        <a href="#reserve" class="btn btn-gold">{{ t.hero.cta1 }}</a>
        <a href="#menu" class="btn btn-ghost">{{ t.hero.cta2 }}</a>
      </div>
      <ul class="hero-meta" v-reveal>
        <li v-for="m in t.hero.meta" :key="m.k"><strong>{{ m.k }}</strong><span>{{ m.v }}</span></li>
      </ul>
    </div>
    <a href="#about" class="scroll-hint" aria-label="Scroll"><span></span></a>
  </section>
</template>
