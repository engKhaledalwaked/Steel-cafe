<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({ src: String, label: String })
const loaded = ref(false)

onMounted(() => {
  if (!props.src) return
  const im = new Image()
  im.onload = () => { loaded.value = true }
  im.src = props.src
})
</script>

<template>
  <div class="img-slot" :class="{ loaded }" :style="loaded ? { backgroundImage: `url(${src})` } : null">
    <span v-if="!loaded" class="slot-label">{{ label }}</span>
  </div>
</template>
