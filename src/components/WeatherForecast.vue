<template>
  <ul class="collection">
    <li v-for="daily in dailies" :key="daily.dt">
      {{ daily }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeatherForecast",
  props: {
    dailies: Array
  }
});
</script>
