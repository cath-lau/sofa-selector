<template>
  <div class="description">
    <h1 class="text-align-center uppercase">{{ product.name }}</h1>
    <div class="p-1 bg-grey">
      <VueList :list="list"></VueList>
    </div>
  </div>
</template>

<script>
import VueList from "@/components/VueList.vue";
export default {
  components: {
    VueList
  },
  props: {
    'list': Array,
    'product': Object
  }
};
</script>

<style>
.bg-grey {
  background-color: #fafafa;
}
.p-1 {
  padding: 0.5rem;
}
.uppercase {
  text-transform: uppercase;
}
</style>