<template>
  <div class="home">
    <div class="weather-wrapper" v-if="position">
      <ToggleSwitch onLabel="Metric" offLabel="Imperial" />
      <Weather />
    </div>
    <div class="no-position-wrapper" v-if="!position">
      <NoPosition />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToggleSwitch from "@/components/ToggleSwitch.vue";
import Weather from "@/components/Weather.vue";
import NoPosition from "@/components/NoPosition.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    ToggleSwitch,
    Weather,
    NoPosition
  },
  computed: mapState(["position"]),
  mounted() {
    this.$store.dispatch("updatePositionData");
  },
});
</script>

<style lang="scss">
.toggle-switch {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.no-position-wrapper {
  align-self: middle;
}
</style>
