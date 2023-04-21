<template>
  <div class="select-image">
    <span>{{ info }}</span>
    <ul>
      <li v-for="option in options" :key="option.code" @click="selectOption(option.code)" class="m-1" :class="isActive(option)">
        <div class="image" :class="option.code"></div>
        <span class="select-image-label">{{ option.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    'options': Array,
    'info': String
  },
  data() {
    return {
      selected_option: 'sofa-simple-feet-form_ROND'
    }
  },
  methods: {
    selectOption(selected_option) {
      this.selected_option = selected_option;
      this.$emit('changeOptionImage', selected_option);
    },
    isActive(option) {
      return (this.selected_option == option.code) ? 'active':'';  
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  padding-left: 0;
}
li {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.image {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  border: 3px solid #dedcdc;
}
.image:hover, li.active .image {
  border: 3px solid #262b55;
  cursor: pointer;
}
.select-image {
  padding-left: 2.3rem;
  padding-bottom: 1rem;
}
.select-image-label {
  position: absolute;
  bottom: -20px;
  background-color: white;
  border-radius: 5px;
  padding: 10px 50px;
  font-family: "Gill Sans Std", sans-serif;
}
.sofa-simple-feet-form_ROND {
  background-image: url('../../../img/feet-rond.jpeg');
  background-position: center;
  background-size: 100%;
}
.sofa-simple-feet-form_CARRE {
  background-image: url('../../../img/feet-carre.jpeg');
  background-position: center;
  background-size: 100%;
}
@media all and (max-width: 1499px) {
  .image {
    height: 150px;
  }
}
@media all and (max-width: 1199px) {
  .image {
    height: 120px;
  }
}
@media all and (max-width: 998px) {
  .image {
    height: 300px;
  }
}
@media all and (max-width: 768px) {
  .image {
    height: 200px;
  }
}
@media all and (max-width: 480px) {
  ul {
    flex-direction: column;
  }
  li {
    width: 90%;
  }
}
</style>