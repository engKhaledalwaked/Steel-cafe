<script setup>
import { reactive, ref } from 'vue'
import { t } from '../i18n'
import { site } from '../site'

const today = new Date().toISOString().slice(0, 10)
const form = reactive({ name: '', phone: '', date: today, time: '20:00', guests: 2, type: 'dinner', seat: 'indoor', notes: '' })
const error = ref('')
const sent = ref(false)

function submit() {
  const digits = form.phone.replace(/\D/g, '')
  if (!form.name.trim() || digits.length < 9 || !form.date) {
    error.value = t.value.reserve.f.err
    sent.value = false
    return
  }
  error.value = ''
  const f = t.value.reserve.f
  const m = t.value.reserve.msg
  const lines = [
    `*${m.head}*`,
    `${m.name}: ${form.name.trim()}`,
    `${m.phone}: ${form.phone}`,
    `${m.date}: ${form.date}`,
    `${m.time}: ${form.time}`,
    `${m.guests}: ${form.guests}`,
    `${m.type}: ${f.types[form.type]}`,
    `${m.seat}: ${f.seats[form.seat]}`,
  ]
  if (form.notes.trim()) lines.push(`${m.notes}: ${form.notes.trim()}`)
  window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  sent.value = true
}
</script>

<template>
  <section class="section reserve" id="reserve">
    <div class="container reserve-grid">
      <div class="reserve-text" v-reveal>
        <p class="eyebrow">{{ t.reserve.eyebrow }}</p>
        <h2 class="h2">{{ t.reserve.title }}</h2>
        <p>{{ t.reserve.p }}</p>
        <ul class="res-points">
          <li v-for="p in t.reserve.points" :key="p">{{ p }}</li>
        </ul>
        <a :href="`tel:${site.phones[0].tel}`" class="call-line">
          {{ t.reserve.orCall }} <bdi dir="ltr">{{ site.phones[0].label }}</bdi>
        </a>
      </div>

      <form class="res-form" novalidate @submit.prevent="submit" v-reveal>
        <div class="field">
          <label for="fName">{{ t.reserve.f.name }}</label>
          <input id="fName" v-model="form.name" type="text" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="fPhone">{{ t.reserve.f.phone }}</label>
          <input id="fPhone" v-model="form.phone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" placeholder="07X XXX XXXX" required />
        </div>
        <div class="row2">
          <div class="field">
            <label for="fDate">{{ t.reserve.f.date }}</label>
            <input id="fDate" v-model="form.date" type="date" :min="today" required />
          </div>
          <div class="field">
            <label for="fTime">{{ t.reserve.f.time }}</label>
            <input id="fTime" v-model="form.time" type="time" required />
          </div>
        </div>
        <div class="row2">
          <div class="field">
            <label for="fGuests">{{ t.reserve.f.guests }}</label>
            <input id="fGuests" v-model.number="form.guests" type="number" min="1" max="200" required />
          </div>
          <div class="field">
            <label for="fType">{{ t.reserve.f.type }}</label>
            <select id="fType" v-model="form.type">
              <option v-for="(label, k) in t.reserve.f.types" :key="k" :value="k">{{ label }}</option>
            </select>
          </div>
        </div>
        <div class="field">
          <span class="label">{{ t.reserve.f.seat }}</span>
          <div class="seg">
            <label v-for="(label, k) in t.reserve.f.seats" :key="k" :class="{ on: form.seat === k }">
              <input type="radio" name="seat" :value="k" v-model="form.seat" />{{ label }}
            </label>
          </div>
        </div>
        <div class="field">
          <label for="fNotes">{{ t.reserve.f.notes }}</label>
          <textarea id="fNotes" v-model="form.notes" rows="2"></textarea>
        </div>

        <p v-if="error" class="form-msg err" role="alert">{{ error }}</p>
        <p v-else-if="sent" class="form-msg ok" role="status">{{ t.reserve.f.sent }}</p>

        <button type="submit" class="btn btn-gold btn-block">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.4 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3a9 9 0 1 1 7.2 3.8Zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-3.7-3.2c-.3-.5.3-.5.8-1.5a.5.5 0 0 0 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z"/></svg>
          {{ t.reserve.f.submit }}
        </button>
      </form>
    </div>
  </section>
</template>
