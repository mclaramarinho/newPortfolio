<template>
  <section>
    <h1 class="section_title">{{ $t("workXpSection.title") }}</h1>
    <div class="work_xp__container">
      <work-xp-item
        v-for="i in length"
        :key="i"
        :exp="xp[i - 1]"
        :location="i % 2 !== 0 ? 'left' : 'right'"
      />
    </div>
    <show-more-btn @click="handleLengthIncrease" :more-or-less="moreOrLess" />
  </section>
</template>

<script lang="ts">
import ShowMoreBtn from "./ShowMoreBtn.vue";
import WorkXpItem from "@/components/WorkXpItem.vue";
import { xp } from "@/data/xp";
export default {
  name: "xp-section",
  components: { WorkXpItem, ShowMoreBtn },
  data() {
    return {
      moreOrLess: "more",
      length: 3,
      xp: xp.reverse(),
    };
  },
  computed: {},
  methods: {
    handleLengthIncrease() {
      console.log(this.length);

      if (this.moreOrLess === "less") {
        this.moreOrLess = "more";
        this.length = 3;
        return;
      }

      const desiredLen = this.length + 3;
      console.log(desiredLen);

      if (desiredLen > this.xp.length) {
        this.length = this.length + (this.xp.length - this.length);
      } else {
        this.length = desiredLen;
      }
      if (this.length === this.xp.length) {
        this.moreOrLess = "less";
      }
    },
  },
};
</script>

<style scoped>
.work_xp__container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  column-gap: 2%;
  margin: 5% auto;
}
@media (max-width: 960px) {
  .work_xp__container {
    width: 95%;
    text-wrap: wrap;
  }
}
@media (min-width: 961px) {
  .work_xp__container {
    width: 85%;
  }
}
</style>
