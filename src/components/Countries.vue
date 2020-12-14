<template>
  <div>
    <div class="title">Список стран</div>
    <div v-if="getCars.data">
      <ul class="countries">
        <li
          class="countries__item"
          v-for="countries in getCars.data"
          :key="countries.id"
        >
          <div>
            <div>Страна производитель: {{ countries.value }}</div>
            <div>
              Количество производимых брендов {{ countries.children.length }}
            </div>
          </div>
          <router-link
            :to="{
              name: 'cars',
              params: { country: countries.value, cars: countries.children }
            }"
            class="btn btn_white"
          >
            Открыть страну
          </router-link>
        </li>
      </ul>
    </div>
    <Preloader v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Preloader from "./Preloader.vue";
export default Vue.extend({
  name: "countries",

  computed: mapGetters(["getCars"]),
  async mounted() {
    this.$store.dispatch("fetchCars");
  },
  components: {
    Preloader
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.countries {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -10px;
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 285px;
    height: 285px;
    flex: 0 0 auto;
    padding: 20px;
    margin: 0 10px 20px;
    border: 1px solid $border;
    border-radius: 5px;
    background-color: $bg-color;
  }
}
</style>
