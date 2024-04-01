<template>
    <section>
        <h1 class="section_title">{{ $t("projectsSection.title") }}</h1>
        <v-window continuous show-arrows>
            <template #prev="{ props }">
                <v-btn class="controller_prev" variant="text" icon="mdi-chevron-left" @click="props.onClick" :size="$vuetify.display.mdAndDown ? 'sm' : 'large'"></v-btn>
            </template>
            <template #next="{ props }">
                <v-btn class="controller_next" variant="text" icon="mdi-chevron-right" @click="props.onClick" :size="$vuetify.display.mdAndDown ? 'sm' : 'large'"></v-btn>
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
.controller_prev{
    position: absolute;
    left: 0;
}
.controller_next{
    position: absolute;
    right: 0;
}
h1 {
    margin-bottom: 5vh;
}
</style>
