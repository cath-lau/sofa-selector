<template>
  <div class="select">
    <select v-model="selected_option" @change="selectOption">
      <option v-for="option in options" :value="option.code" :key="option.code">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    'options': Array
  },
  data() {
    return {
      selected_option: 'sofa-simple-size_DUO'
    }
  },
  methods: {
    selectOption() {
      this.$emit('changeOption', this.selected_option);
    }
  }
}
</script>

<style>
.select {
  padding-left: 2.3rem;
}
select {
  background-color: white;
  border: 1px solid #dedcdc;
  border-radius: 0;
  height: 2rem;
  width: 100%;
  margin-bottom: 2rem;
  text-transform: uppercase;
}
</style>