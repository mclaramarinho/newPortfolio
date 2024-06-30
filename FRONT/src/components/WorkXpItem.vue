<template>
  <div v-if="location === 'right'" class="grid_spacer"></div>
  <vertical-timeline v-if="location === 'right'" variant="right" />

  <div
    :class="`work_xp__item ${location === 'left' ? 'left_work__item' : 'right_work__item'}`"
  >
    <div v-if="location === 'right'" class="work_xp__duration">
      <p class="year">{{ exp.startYear }} - {{ exp.endYear }}</p>
      <p>{{ $i18n.locale === "en" ? exp.durationEn : exp.duration }}</p>
    </div>

    <div
      class="work_xp__content"
      :class="location === 'left' ? 'left_xp__content' : 'right_xp__content'"
    >
      <p class="company_name bold">
        {{ $i18n.locale === "en" ? exp.companyEn : exp.company }}
      </p>
      <p class="role italic">
        {{ $i18n.locale === "en" ? exp.roleEn : exp.role }}
      </p>
      <p class="xp_desc__content">
        {{ $i18n.locale === "en" ? exp.descEn : exp.desc }}
      </p>

      <v-btn
        class="more_info__btn w-fit"
        :class="location === 'left' ? 'justify-end' : 'justify-start'"
        variant="outlined"
        prepend-icon="mdi-plus"
        @click="showDialog = !showDialog"
        >{{ $t("buttons.moreInfo") }}</v-btn
      >
    </div>

    <div v-if="location === 'left'" class="work_xp__duration left_xp__duration">
      <p class="year">{{ exp.startYear }} - {{ exp.startYear }}</p>
      <p>{{ $i18n.locale === "en" ? exp.durationEn : exp.duration }}</p>
    </div>
  </div>
  <vertical-timeline v-if="location === 'left'" variant="left" />
  <div v-if="location === 'left'" class="grid_spacer"></div>

  <v-dialog max-width="500" v-model="showDialog">
    <v-card>
      <v-card-text>
        {{ $i18n.locale === "en" ? exp.descEn : exp.desc }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.company_name,
.year {
  font-size: 1.1rem;
}
.left_work__item {
  top: 10%;
}
.right_work__item {
  top: -5%;
}

@media (max-width: 960px) {
  .xp_desc__content {
    display: none;
  }
  .more_info__btn {
    display: grid;
  }
  .work_xp__duration {
    grid-row: 1;
  }
  .left_xp__content,
  .left_xp__duration {
    text-align: end;
  }
}

@media (min-width: 961px) {
  .xp_desc__content {
    display: block;
    text-align: justify;
  }
  .more_info__btn {
    display: none;
  }
  .left_work__item {
    grid-template-columns: 1fr auto;
    top: 10%;
  }
  .right_work__item {
    grid-template-columns: auto 1fr;
    top: -5%;
  }
  .left_xp__content {
    text-align: end;
  }
}

.work_xp__item {
  display: inline-grid;
  text-align: justify;
  column-gap: 5%;
  row-gap: 2%;
}

.work_xp__content {
  display: block;
  row-gap: 2%;
}
</style>

<script lang="ts">
import VerticalTimeline from "@/components/VerticalTimeline.vue";
import XP from "@/data/xp";

export default {
  name: "work-xp-item",
  components: { VerticalTimeline },
  props: {
    location: {
      type: String,
      required: true,
    },
    exp: {
      type: XP,
      required: true,
    },
  },
  data() {
    return {
      showDialog: false,
    };
  },
};
</script>
