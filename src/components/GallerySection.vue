<script setup>
import { t } from '../i18n'
import { img, site } from '../site'
import ImageSlot from './ImageSlot.vue'
</script>

<template>
  <section class="section gallery-sec" id="gallery">
    <div class="container">
      <div class="sec-head" v-reveal>
        <p class="eyebrow">{{ t.gallery.eyebrow }}</p>
        <h2 class="h2">{{ t.gallery.title }}</h2>
      </div>
      <div class="gallery">
        <ImageSlot
          v-for="(label, i) in t.gallery.slots" :key="i"
          :class="`g${i + 1}`" :src="img(`g${i + 1}.jpg`)" :label="label" v-reveal
        />
      </div>
      <div class="center" v-reveal>
        <a :href="site.facebook" target="_blank" rel="noopener" class="btn btn-line">{{ t.gallery.cta }}</a>
      </div>
    </div>
  </section>
</template>
