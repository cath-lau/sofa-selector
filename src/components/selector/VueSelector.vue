<template>
  <div>
    <form
        id="cart"
        @submit.prevent="checkout"
        method="post"
    >
      <h2 class="text-align-center">JE PARAMÈTRE MON CANAPÉ</h2>
      <div class="step">
        <div class="step-body">
          <h3 class="step-nb step-1 mt-0">LA DIMENSION</h3>
          <VueSelect :options="dimensions" @changeOption="setDimension"></VueSelect>
        </div>
      </div>
      <div class="step">
        <div class="step-body">
          <h3 class="step-nb step-2 mt-0">LA COULEUR DE MON CANAPÉ</h3>
          <VueColor :colors="colors" @changeColor="setColor" :color="default_color"></VueColor>
        </div>
      </div>
      <div class="step">
        <div class="step-body">
          <h3 class="step-nb step-3 mt-0">LA FORME DES PIEDS</h3>
          <selectImage :options="foot_shapes" :info="foot_shape_info" @changeOptionImage="setFootShape"></selectImage>
        </div>
      </div>
      <div class="step no-border">
        <div class="step-body">
          <h3 class="step-nb step-4 mt-0">LA COULEUR DES PIEDS</h3>
          <VueColor :colors="foot_colors" @changeColor="setFootColor" :color="default_foot_color"></VueColor>
        </div>
      </div>
      <hr>
      <template v-if="selected_product_variant">
        <div class="text-align-center">
          <span class="h2">{{ price }} €</span>
        </div>
      </template>
      <div class="d-flex justify-content-center mt-1 mb-1">
        <input type="submit" value="AJOUTER AU PANIER" class="button">
      </div>
      <template v-if="variant_code">
        Code variation: {{ variant_code }}
      </template>
    </form>
  </div>
</template>

<script>
import VueSelect from "@/components/selector/VueSelect.vue";
import VueColor from "@/components/selector/VueColor.vue";
import SelectImage from "@/components/selector/SelectImage.vue";
export default {
  components: {
    VueSelect,
    VueColor,
    SelectImage
  },
  props: {
    'product': Object
  },
  data() {
    return {
      dimensions: [],
      colors: [],
      foot_shapes: [],
      foot_colors: [],
      selected_dimension: 'sofa-simple-size_DUO',
      selected_color: 'sofa-simple-color_ECRU',
      selected_foot_color: 'sofa-simple-feet-color_CLAIR',
      selected_foot_shape: 'sofa-simple-feet-form_CARRE',
      selected_product_variant: {},
      variant_code: '',
      foot_shape_info: 'Les pieds mesurent 12 cm de hauteur',
      default_color: 'sofa-simple-color_ECRU',
      default_foot_color: 'sofa-simple-feet-color_CLAIR',
      price: 0
    }
  },
  created() {
    this.getDimensions();
    this.setFilters();
    this.getProductVariant();
  },
  methods: {
    getDimensions() {
      let vm = this;
      let dimensions = [];

      if (this.product != null && this.product.options != null && this.product.options[0] != null) {
        dimensions = Object.values(this.product.options[0]);
        dimensions[3].forEach(function(el) {
          vm.dimensions.push({
            code: el.code,
            value: el.value
          });
        })
      }
    },
    getOptions(i, filter) {
      let option = [];

      if (this.product != null && this.product.options != null && this.product.options[i].values != null) {
        option = this.product.options[i].values;
        option.forEach(function (el) {
          if (el.value != null) {
            filter.push({
              code: el.code,
              value: el.value
            });
          }
        })
      }
    },
    setFilters() {
      this.getOptions(1, this.colors);
      this.getOptions(2, this.foot_shapes);
      this.getOptions(3, this.foot_colors);
    },
    setDimension(selected_dimension) {
      this.selected_dimension = selected_dimension;
      this.getProductVariant();
    },
    setColor(selected_color) {
      this.selected_color = selected_color;
      this.getProductVariant();
    },
    setFootColor(selected_color) {
      this.selected_foot_color = selected_color;
      this.getProductVariant();
    },
    setFootShape(selected_foot_shape) {
      this.selected_foot_shape = selected_foot_shape;
      this.getProductVariant();
    },
    getProductVariant() {
      let vm = this;

      if (this.product.variants != null) {
        this.product.variants.forEach(function (variant) {
          let optionCodes = (Object.values(variant.optionCodes));
          if (vm.selected_dimension != null && optionCodes[0] == vm.selected_dimension
              && vm.selected_color != null && optionCodes[1] == vm.selected_color
              && vm.selected_foot_shape != null && optionCodes[2] == vm.selected_foot_shape
              && vm.selected_foot_color != null && optionCodes[3] == vm.selected_foot_color) {
            vm.selected_product_variant = variant;
          }
        });
        this.setPrice();
      }
    },
    checkout() {
      this.getProductVariant();

      // axios.post('http://localhost:8082/checkout',{ data: { variant: this.selected_product_variant.code }})
      //     .then(response => this.responseData = response.data)
      //     .catch(error => {
      //       console.log(error);
      //     });

      this.variant_code = this.selected_product_variant.code;
    },
    setPrice() {
      if (this.selected_product_variant != null) {
        this.price = this.selected_product_variant.price / 100;
      }
    }
  }
}
</script>

<style>
.button {
  background-color: #fab200;
  color: white;
  border: none;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-family: "Gill Sans Std Light", sans-serif;
  width: 100%;
  padding: 1rem 1rem 0.5rem 1rem;
}
.button:hover {
  cursor: pointer;
}
.step-nb {
  display: flex;
  align-items: center;
}
.step-nb::before {
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 15px;
  background-color: #262b55;
  color: white;
  margin-right: 1rem;
  border-radius: 100%;
  font-family: "Gill Sans Std Light", sans-serif;
  padding-top: 5px;
}
.step-nb.step-1::before {
  content: '1';
}
.step-nb.step-2::before {
  content: '2';
}
.step-nb.step-3::before {
  content: '3';
}
.step-nb.step-4::before {
  content: '4';
}
.step {
  position: relative;
  display: flex;
}
.step::before {
  content: '';
  display: flex;
  width: 2px;
  height: 100%;
  background-color: #262b55;
  position: absolute;
  left: 9px;
  z-index: -1;
}
.step.no-border::before {
  display: none;
}
.step-body {
  width: 100%;
}
</style>