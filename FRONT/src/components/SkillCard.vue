<template>
  <div class="grid_spacer" v-if="lr === 'right'"></div>
  <div class="skill_container">
    <p class="skill_title">{{ skill.name }}</p>
    <v-progress-linear :model-value="skill.level * 25"></v-progress-linear>
    <p class="skill_level">{{ $t(levelDescriptions[skill.level - 1]) }}</p>
  </div>
  <div class="grid_spacer" v-if="lr === 'left'"></div>
</template>

<script lang="ts">
import Skill from "@/data/skills";

export default {
  name: "skill-card",
  props: {
    lr: {
      type: String,
      required: true,
    },
    skill: {
      type: Skill,
      required: true,
    },
  },
  data() {
    return {
      levelDescriptions: [
        "skillsSection.beginner",
        "skillsSection.intermediate",
        "skillsSection.advanced",
        "skillsSection.expert",
      ],
    };
  },
};
</script>

<style scoped>
.skill_container {
  display: grid;
  justify-items: start;
}
.skill_title {
  font-size: 1.5rem;
  font-weight: 300;
  text-align: start;
}
.skill_level {
  font-size: 1.1rem;
  font-style: italic;
}

@media (min-width: 960px) {
  .grid_spacer {
    display: none;
  }
}

@media (max-width: 960px) {
  .grid_spacer {
    display: block;
  }
}
</style>
