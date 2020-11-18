<template>
  <div class="no-position">
    <h2>We could not access your position.</h2>
    <p>
      Please allow position access to see the weather forecast for your
      location.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NoPosition"
});
</script>
