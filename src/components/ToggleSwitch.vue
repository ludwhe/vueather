<template>
  <div class="toggle-switch">
    <div class="switch">
      <label>
        {{ offLabel }}
        <input @change="toggle" type="checkbox" />
        <span class="lever"></span>
        {{ onLabel }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ToggleSwitch",
  props: {
    onLabel: String,
    offLabel: String
  },
  methods: {
    toggle(event: Event) {
      // const checked = (event.target as HTMLInputElement).checked;
      return event; // TODO
    }
  }
});
</script>
