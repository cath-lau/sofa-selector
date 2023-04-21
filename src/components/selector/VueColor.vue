<template>
  <div>
    <ul>
      <li v-for="color in colors" :key="color.code" @click="selectColor(color.code)" :class="isActive(color)">
        <div class="color" :class="color.code"></div>
        <span class="color-label mt-1">{{ color.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    'colors': Array,
    'color': String
  },
  data() {
    return {
      selected_color: this.color
    }
  },
  methods: {
    selectColor(selected_color) {
      this.selected_color = selected_color;
      this.$emit('changeColor', selected_color);
    },
    isActive(color) {
      return (this.selected_color == color.code) ? 'active':'';  
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
}
li {
  flex: 0 0 33%;
  max-width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.color {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid #dedcdc;
}
.color:hover, li.active .color {
  border: 2px solid #262b55;
  cursor: pointer;
}
.color-label {
  font-family: "Gill Sans Std", sans-serif;
}
.sofa-simple-color_ECRU {
  background-color: #D6D1C9;
}
.sofa-simple-color_GRIS {
  background-color: #b8babc;
}
.sofa-simple-color_BLEU {
  background-color: #262b55;
}
.sofa-simple-color_VERT {
  background-color: #81aaa2;
}
.sofa-simple-color_KAKI {
  background-color: #7d8e75;
}
.sofa-simple-color_TERRACOTTA {
  background-color: #ba655a;
}
.sofa-simple-feet-color_CLAIR {
  background-image: url('../../../img/sofa-simple-feet-color_CLAIR.png');
  background-position: center;
}
.sofa-simple-feet-color_FONCE {
  background-image: url('../../../img/sofa-simple-feet-color_FONCE.png');
  background-position: center;
}
</style>