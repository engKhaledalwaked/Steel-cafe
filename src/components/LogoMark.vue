<script setup>
// شعار ستيل (S داخل قوسين) مرسوم كـ SVG من الشعار الرسمي
const id = `steel-grad-${Math.random().toString(36).slice(2, 8)}`
</script>

<template>
  <svg class="logo-mark" viewBox="213 167 655 750" role="img" aria-label="STEEL">
    <defs>
      <linearGradient :id="id" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style="stop-color: #fff" />
        <stop offset=".45" style="stop-color: var(--steel-1)" />
        <stop offset="1" style="stop-color: var(--steel-2)" />
      </linearGradient>
    </defs>
    <g :fill="`url(#${id})`">
      <polygon points="213,167 868,167 868,415 680,415 835,243 275,243 275,415 213,415" />
      <polygon points="868,917 213,917 213,669 401,669 246,841 806,841 806,669 868,669" />
      <polygon points="330,305 752,305 650,415 430,415 430,488 752,488 752,779 329,779 431,669 651,669 651,596 330,596" />
    </g>
  </svg>
</template>
