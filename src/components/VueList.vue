<template>
  <div>
    <ul class="list">
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    'list': Array
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
.list li {
  width: 50%;
  line-height: 1.5;
}
@media all and (max-width: 1499px) {
  .list {
    flex-direction: column;
  }
  .list li {
    width: 100%;
  }
}
</style>