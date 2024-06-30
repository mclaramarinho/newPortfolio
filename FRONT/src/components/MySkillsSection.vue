<template>
  <section>
    <h1 class="section_title">{{ $t("skillsSection.title") }}</h1>
    <div class="skills_section__content">
      <skill-card
        v-for="i in length"
        :key="i"
        :class="i % 2 !== 0 ? 'left_card' : 'right_card'"
        :skill="data[i - 1]"
        :lr="i % 2 !== 0 ? 'left' : 'right'"
      />
    </div>
    <show-more-btn :more-or-less="moreOrLess" @click="increaseLength" />
  </section>
</template>

<script lang="ts">
import ShowMoreBtn from "./ShowMoreBtn.vue";
import SkillCard from "@/components/SkillCard.vue";
import { skills } from "@/data/skills";

export default {
  name: "my-skills-section",
  components: { SkillCard, ShowMoreBtn },
  data() {
    return {
      data: skills,
      length: 12,
      moreOrLess: "more",
    };
  },
  methods: {
    increaseLength() {
      if (this.moreOrLess === "less") {
        this.moreOrLess = "more";
        this.length = 12;
        return;
      }

      const desiredLen = this.length + 4;
      if (desiredLen > this.data.length) {
        this.length = this.length + (this.data.length - this.length);
      } else {
        this.length = desiredLen;
      }

      this.moreOrLess = this.length >= this.data.length ? "less" : "more";
    },
  },
};
</script>

<style scoped>
.skills_section__content {
  padding-top: 5%;
  padding-bottom: 5%;
  display: grid;
  row-gap: 10vh;
}

@media (min-width: 960px) {
  .skills_section__content {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5vw;
  }
}

@media (max-width: 960px) {
  .skills_section__content {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  .left_card {
    grid-column: 1 / 2;
  }
  .right_card {
    grid-column: 2 / 3;
  }
}
</style>
