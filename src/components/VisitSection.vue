<script setup>
import { t } from '../i18n'
import { site } from '../site'

const { lat, lng } = site.coords
const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`
const dirHref = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
</script>

<template>
  <section class="section visit" id="visit">
    <div class="container visit-grid">
      <div class="visit-info" v-reveal>
        <p class="eyebrow">{{ t.visit.eyebrow }}</p>
        <h2 class="h2">{{ t.visit.title }}</h2>
        <dl class="info-list">
          <div><dt>{{ t.visit.addrL }}</dt><dd>{{ t.visit.addr }}</dd></div>
          <div><dt>{{ t.visit.hoursL }}</dt><dd>{{ t.visit.h1 }}<br />{{ t.visit.h2 }}</dd></div>
          <div>
            <dt>{{ t.visit.phoneL }}</dt>
            <dd>
              <template v-for="(p, i) in site.phones" :key="p.tel">
                <span v-if="i"> · </span><a :href="`tel:${p.tel}`" dir="ltr">{{ p.label }}</a>
              </template>
            </dd>
          </div>
        </dl>
        <div class="visit-cta">
          <a class="btn btn-gold" :href="dirHref" target="_blank" rel="noopener">{{ t.visit.dir }}</a>
          <a class="btn btn-line" :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener">{{ t.visit.wa }}</a>
        </div>
      </div>
      <div class="map" v-reveal>
        <iframe title="STEEL location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" :src="mapSrc"></iframe>
      </div>
    </div>
  </section>
</template>
