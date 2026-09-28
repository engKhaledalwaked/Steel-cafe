<script setup>
import { t } from '../i18n'
import { site } from '../site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <span class="brand-mark">STEEL</span>
        <p class="foot-tag">{{ t.footer.tag }}</p>
      </div>
      <div class="socials">
        <a :href="site.facebook" target="_blank" rel="noopener" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8Z"/></svg>
        </a>
        <a :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.4 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3a9 9 0 1 1 7.2 3.8Z"/></svg>
        </a>
        <a :href="`tel:${site.phones[0].tel}`" aria-label="Call">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.3 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.3 1Z"/></svg>
        </a>
      </div>
      <p class="copy">© {{ year }} STEEL Restaurant & Cafe · {{ t.footer.demo }}</p>
    </div>
  </footer>
</template>
