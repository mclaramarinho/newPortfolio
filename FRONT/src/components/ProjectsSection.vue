<template>
    <section>
        <h1 class="section_title">{{ $t("projectsSection.title") }}</h1>
        <v-window continuous show-arrows>
            <template #prev="{ props }">
                <v-btn variant="text" icon="mdi-chevron-left" @click="props.onClick"></v-btn>
            </template>
            <template #next="{ props }">
                <v-btn variant="text" icon="mdi-chevron-right" @click="props.onClick"></v-btn>
            </template>

            <project-card v-for="(proj, k) in projData" :key="k" 
                :title="proj.name"
                :skills="proj.skills"
                :description="proj.desc"
                :image="proj.imagePath"
                :url="proj.url"
            />
        </v-window>
    </section>
</template>

<script lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { projEN, projPT } from '@/data/projects'
export default {
    name: 'projects-section',
    components: { ProjectCard },
    created() {
    },
    computed:{
        projData(){
            return this.$i18n.locale === 'en' ? projEN : projPT
        }
    }
}
</script>

<style scoped>
h1 {
    margin-bottom: 5vh;
}
</style>
