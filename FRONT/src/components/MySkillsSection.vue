<template>
    <section>
        <h1 class="section_title">My Skills</h1>
        <div class="skills_section__content">
            <skill-card class="left_card" name="HTML" :level="3" />
            <div class="grid_spacer"></div>

            <div class="grid_spacer"></div>
            <skill-card class="right_card" name="HTML" :level="3" />

            <skill-card class="left_card" name="HTML" :level="3" />
            <div class="grid_spacer"></div>

            <div class="grid_spacer"></div>
            <skill-card class="right_card" name="HTML" :level="3" />

            <skill-card class="left_card" name="HTML" :level="3" />
            <div class="grid_spacer"></div>

            <div class="grid_spacer"></div>
            <skill-card class="right_card" name="HTML" :level="3" />

            <skill-card class="left_card" name="HTML" :level="3" />
            <div class="grid_spacer"></div>

            <div class="grid_spacer"></div>
            <skill-card class="right_card" name="HTML" :level="3" />
        </div>
        <v-btn variant="outlined" append-icon="mdi-chevron-down">Show More</v-btn>
    </section>
</template>

<script lang="ts">
import SkillCard from '@/components/SkillCard.vue'
export default {
    name: 'my-skills-section',
    components: { SkillCard }
}
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
    .grid_spacer {
        display: none;
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
    .grid_spacer {
        display: block;
    }
}
</style>
