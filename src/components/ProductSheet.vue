<template>
  <div>
    <div class="product-sheet">
      <VueSlider :photos="photos"></VueSlider>
      <div class="col-right">
        <VueDescription :list="list" :product="product"></VueDescription>
        <hr>
        <VueSelector :product="product"></VueSelector>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "./VueSlider.vue";
import VueDescription from "./VueDescription";
import VueSelector from "./selector/VueSelector.vue";
import { mapState } from 'vuex';
export default {
  components: {
    VueSlider,
    VueDescription,
    VueSelector
  },
  data () {
    return {
      photos: [
        {
          name: 'sofa',
          path: require('../../img/slider.jpeg')
        }
      ],
      list: [
        'Canapé 2-3 places design et ultra confortable',
        'Matériaux et design haut de gamme à un prix incomparable',
        'Fabriqué en France et éco-conçu',
        'Entretien facile, coussins déhoussables et lavables'
      ],
    }
  },
  mounted () {
      this.$store.dispatch('loadProduct')
  },
  computed: mapState([
      'product'
  ]),
};
</script>

<style>
@font-face {
  font-family: "Gill Sans Std Light";
  src: url("../assets/fonts/GillSansStdLight.woff");
}
@font-face {
  font-family: "Gill Sans Std";
  src: url("../assets/fonts/GillSansStd.woff");
}
body {
  font-family: "Gill Sans Std Light", sans-serif;
  color: #262b55;
}
h1, h2, h3 {
  font-family: "Gill Sans Std", sans-serif;
  font-weight: 300;
}
.h2 {
  font-family: "Gill Sans Std", sans-serif;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 300;
}
.mt-0 {
  margin-top: 0;
}
.m-1 {
  margin: 0.5rem;
}
.mt-1 {
  margin-top: 0.5rem;
}
.mb-1 {
  margin-bottom: 0.5rem;
}
.text-align-center {
  text-align: center;
}
hr {
  border: .05rem solid #a5aad6;
  margin: 2rem 0;
}
.product-sheet {
  display: flex;
}
.col-right {
  width: 35%;
  padding: 0 1rem;
  max-height: 80vh;
  overflow-y: scroll;
}
.d-flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}
@media all and (max-width: 1499px) {
  .logo img {
    width: 200px;
  }
}
@media all and (max-width: 1199px) {
  .logo img {
    width: 150px;
  }
}
@media all and (max-width: 998px) {
  .product-sheet {
    flex-direction: column;
  }
  .col-right {
    max-height: none;
    width: 100%;
  }
}
</style>
