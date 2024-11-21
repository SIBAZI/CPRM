<script>
export default {
  props: {
    number: { type: Number },
  },
  methods: {
    testLog() {
      console.log("こんにちは");
    },
  },
};
</script>
<template>
  <v-row>
    <p class="explanation ml-16" @click="testLog">
      <slot></slot>
    </p>
    <p>
      {{ number }}
    </p>
  </v-row>
</template>
