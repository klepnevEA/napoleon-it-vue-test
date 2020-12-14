<template>
  <div>
    <div class="title">Страна производитель {{ country }}</div>
    <div class="cars-header">
      <button class="btn" v-on:click="goBack">
        Вернуться к списку стран
      </button>
      <input type="text" class="input" v-model="search" placeholder="Поиск" />
    </div>
    <ul class="cars">
      <li class="cars__item" v-for="car in filtered" :key="car.id">
        <div class="cars__title">Бренд: {{ car.value }}</div>
        <div class="cars__model" v-for="model in car.children" :key="model.id">
          <div class="cars__subtitle">Модель: {{ model.value }}</div>
          <div v-if="model.children.children !== null">
            <div class="cars__year">
              <div>Год выпуска: {{ model.children.value }}</div>
              <div v-for="vin in model.children.children" :key="vin.id">
                <div class="cars__vin">
                  VIN номер: {{ model.children.value }}
                </div>
              </div>
            </div>
          </div>
          <div class="cars__vin" v-else>
            VIN номер: {{ model.children.value }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      carsList: [],
      search: ""
    };
  },
  created() {
    this.carsList = this.cars;
  },
  computed: {
    filtered() {
      return this.carsList.filter((elem: { value: string }) => {
        return elem.value.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  props: {
    country: {
      type: String,
      default() {
        return "Страна";
      }
    },
    cars: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.cars {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px -10px;

  &__item {
    width: 385px;
    padding: 20px;
    margin: 0 10px 20px;
    border: 1px solid $border;
    border-radius: 5px;
  }

  &__title {
    font-size: 25px;
    margin-bottom: 10px;
    text-align: center;
  }

  &__model {
    margin-bottom: 10px;
    padding: 10px;
    background-color: $bg-color;
    border-radius: 5px;
  }

  &__subtitle {
    font-size: 20px;
    margin-bottom: 5px;
  }

  &__year {
    font-size: 18px;
    padding-left: 5px;
  }

  &__vin {
    font-size: 14px;
    padding-left: 5px;
  }
}
.cars-header {
  display: flex;
  justify-content: space-between;
}
</style>
