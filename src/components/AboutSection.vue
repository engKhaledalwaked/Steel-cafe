<script setup>
import { t } from '../i18n'
import { img } from '../site'
import ImageSlot from './ImageSlot.vue'
</script>

<template>
  <section class="section about" id="about">
    <div class="container about-grid">
      <div class="about-media" v-reveal>
        <ImageSlot class="tall" :src="img('about-1.jpg')" :label="t.about.slots[0]" />
        <ImageSlot :src="img('about-2.jpg')" :label="t.about.slots[1]" />
      </div>
      <div class="about-text" v-reveal>
        <p class="eyebrow">{{ t.about.eyebrow }}</p>
        <h2 class="h2">{{ t.about.title }}</h2>
        <p>{{ t.about.p1 }}</p>
        <p>{{ t.about.p2 }}</p>
        <div class="pillars">
          <div class="pillar" v-for="p in t.about.pillars" :key="p.t">
            <span class="pillar-ico" aria-hidden="true"></span>
            <div><h4>{{ p.t }}</h4><p>{{ p.d }}</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
