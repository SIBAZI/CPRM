<script>
export default {
  props: {
    isOpen: { type: Boolean, required: true },
    imgPath: { type: String, required: true },
  },
  methods: {
    updateOpen(value) {
      this.$emit("update", value);
    },
  },
};
</script>
<template>
  <v-dialog
    @update:model-value="updateOpen"
    :model-value="isOpen"
    max-width="70%"
  >
    <v-card>
      <img class="modal-img" :src="imgPath" />
    </v-card>
  </v-dialog>
</template>
