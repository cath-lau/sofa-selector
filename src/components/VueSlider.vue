<template>
  <div class="slider">
    <div v-for="photo in photos" :key="photo.name">
      <img :src="photo.path" alt ="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    'photos': Array
  }
}
</script>

<style>
.slider {
  width: 65%;
}
img {
  max-width: 100%;
}
@media all and (max-width: 998px) {
  .slider {
    width: 100%;
  }
}
</style>