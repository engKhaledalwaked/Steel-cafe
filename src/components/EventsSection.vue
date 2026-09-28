<script setup>
import { t } from '../i18n'
</script>

<template>
  <section class="section events" id="events">
    <div class="container">
      <div class="sec-head light" v-reveal>
        <p class="eyebrow">{{ t.events.eyebrow }}</p>
        <h2 class="h2">{{ t.events.title }}</h2>
        <p class="sec-sub">{{ t.events.sub }}</p>
      </div>
      <div class="ev-cards">
        <article class="ev-card" v-for="(c, i) in t.events.cards" :key="i" v-reveal>
          <span class="ev-num">0{{ i + 1 }}</span>
          <h3>{{ c.t }}</h3>
          <p>{{ c.d }}</p>
        </article>
      </div>
      <div class="center" v-reveal><a href="#reserve" class="btn btn-gold">{{ t.events.cta }}</a></div>
    </div>
  </section>
</template>
