<script lang="ts">
export default {
  name: "show-more-btn",
  props: {
    moreOrLess: {
      type: String,
      required: true,
    },
  },
  computed: {
    buttonText() {
      return this.moreOrLess === "more"
        ? this.$t("buttons.showMore")
        : this.$t("buttons.showLess");
    },
    buttonIcon() {
      console.log("changed");
      return this.moreOrLess === "more" ? "mdi-chevron-down" : "mdi-chevron-up";
    },
  },

  emits: ["click"],
};
</script>

<template>
  <v-btn variant="outlined" :append-icon="buttonIcon" @click="$emit('click')">
    {{ buttonText }}
  </v-btn>
</template>
