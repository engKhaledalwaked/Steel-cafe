<script setup>
import { ref, computed } from 'vue'
import { t, lang, menu } from '../i18n'

const active = ref(menu[0].id)
const current = computed(() => menu.find((c) => c.id === active.value))
const fmt = (n) => n.toFixed(2)
const tagLabel = (tag) => ({ signature: { ar: 'مميّز', en: 'Signature' }, new: { ar: 'جديد', en: 'New' } }[tag]?.[lang.value])
</script>

<template>
  <section class="section menu-sec" id="menu">
    <div class="container">
      <div class="sec-head" v-reveal>
        <p class="eyebrow">{{ t.menu.eyebrow }}</p>
        <h2 class="h2">{{ t.menu.title }}</h2>
        <p class="sec-sub">{{ t.menu.sub }}</p>
      </div>

      <div class="tabs" role="tablist" v-reveal>
        <button
          v-for="c in menu" :key="c.id" type="button" role="tab"
          :aria-selected="active === c.id" :class="{ on: active === c.id }"
          @click="active = c.id"
        >{{ c[lang] }}</button>
      </div>

      <Transition name="fade" mode="out-in">
        <ul class="menu-grid" :key="active">
          <li class="dish" v-for="d in current.items" :key="d.en">
            <div class="dish-top">
              <h3>{{ d[lang] }} <em v-if="d.tag" class="tag">{{ tagLabel(d.tag) }}</em></h3>
              <span class="dots" aria-hidden="true"></span>
              <span class="price"><bdi>{{ fmt(d.price) }}</bdi> {{ t.menu.currency }}</span>
            </div>
            <p>{{ lang === 'ar' ? d.dar : d.den }}</p>
          </li>
        </ul>
      </Transition>
    </div>
  </section>
</template>
