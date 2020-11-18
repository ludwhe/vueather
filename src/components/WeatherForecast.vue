<template>
  <ul class="collection">
    <li v-for="daily in dailies" :key="daily.dt" class="collection-item avatar">
      <img
        :src="
          `https://openweathermap.org/img/wn/${daily?.weather[0]?.icon}@2x.png`
        "
        class="circle"
      />
      <span class="title">{{ getDayOfWeek(daily?.dt) }}</span>
      <p>
        {{ (daily?.temp?.day - 273.15).toFixed(1) }}°C<br />
        <span class="text-capitalize">
          {{ daily?.weather[0]?.description }}
        </span>
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeatherForecast",
  props: {
    dailies: Array
  },
  methods: {
    getDayOfWeek(dt: number) {
      const dayMap = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];

      return dayMap[new Date(dt * 1000).getDay()];
    }
  }
});
</script>

<style lang="scss">
.collection {
  color: #2c3e50;
  text-align: left;
}

.text-capitalize {
  text-transform: capitalize;
}
</style>
