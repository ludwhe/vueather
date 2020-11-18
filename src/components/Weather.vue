<template>
  <div class="weather">
    <h1>Weather</h1>
    <div class="forecast-wrapper">
      <WeatherForecast v-if="weatherData" :dailies="weatherData?.daily" />
      <div v-if="!weatherData">
        No weather data could be retrieved.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import WeatherForecast from "./WeatherForecast.vue";

export default defineComponent({
  name: "Weather",
  components: {
    WeatherForecast
  },
  computed: mapState(["weatherData"]),
  mounted() {
    this.$store.dispatch("updateWeatherData");
  }
});
</script>
