<template>
  <v-window-item>
    <v-card variant="flat" class="project_display__container">
      <img
        :src="'/' + project.imagePath"
        alt=""
        :style="`object-position: ${project.alignImage}`"
      />

      <div class="project_desc__container">
        <a target="_blank" :href="project.url" class="project_title"
          >{{ projName }}
          <v-icon v-if="project.url.length > 0" icon="mdi-open-in-new"></v-icon>
        </a>
        <div class="project_skills__container">
          <v-chip v-for="skill in project.skills" :key="skill">{{
            skill
          }}</v-chip>
        </div>
        <p>
          {{ projDes }}
        </p>
      </div>
    </v-card>
  </v-window-item>
</template>
<script lang="ts">
import Project from "@/data/projects";

export default {
  name: "project-card",
  props: {
    project: {
      type: Project,
      required: true,
    },
  },
  computed: {
    projName() {
      return this.$i18n.locale === "en"
        ? this.project.nameEn
        : this.project.namePt;
    },
    projDes() {
      return this.$i18n.locale === "en"
        ? this.project.descEn
        : this.project.descPt;
    },
  },
  data() {
    return {};
  },
  created() {},
};
</script>
<style scoped>
.project_display__container {
  display: grid;
  width: 80%;
  margin: 0 auto;
  padding: 3%;
  color: var(--color-navy-blue);
  row-gap: 3vh;
  column-gap: 2vw;
  text-align: justify;
  /* position: relative; */
}
@media (min-width: 960px) {
  .project_display__container {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 960px) {
  .project_display__container {
    grid-template-columns: 1fr 1fr;
    min-height: 450px;
    max-height: 500px;
  }
}
.project_desc__container {
  display: grid;
  row-gap: 1vh;
  align-content: start;
  height: 100%;
}

img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
.project_title {
  font-size: 1.8rem;
  text-decoration: none;
  color: var(--color-navy-blue);
  > .v-icon {
    font-size: 1rem;
  }
}
.project_skills__container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-items: start;
  column-gap: 1vw;
  width: fit-content;
}
</style>
