<template>
  <div class="weather">
    <div v-if="!weatherData">
      <h2>No weather data could be retrieved.</h2>
    </div>
    <div class="forecast-wrapper" v-if="weatherData">
      <h2>
        Right now: {{ (weatherData?.current?.temp - 273.15).toFixed(1) }}°C
      </h2>
      <h5>
        Feels like
        {{ (weatherData?.current?.feels_like - 273.15).toFixed(1) }}°C
      </h5>
      <WeatherForecast :dailies="weatherData?.daily" />
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
