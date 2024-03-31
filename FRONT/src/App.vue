<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import StartSection from '@/components/StartSection.vue'
import MySkillsSection from '@/components/MySkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterPiece from '@/components/FooterPiece.vue'

import { useGoTo } from 'vuetify'

export default {
    components: {
        NavBar,
        StartSection,
        MySkillsSection,
        ProjectsSection,
        ExperienceSection,
        ContactSection,
        FooterPiece
    },
    data() {
        return {
            goTo: useGoTo(),
            scrollOptions: {
                duration: 800,
                easing: 'easeInOutCubic'
            }
        }
    },
    methods: {
        goToContactSection() {
            this.goTo('#contact_section', this.scrollOptions)
        }
    }
}
</script>

<template>
    <v-app>
        <NavBar />
        <main>
            <start-section @scroll-to-contact="goToContactSection" />
            <my-skills-section />
            <projects-section />
            <experience-section />
            <contact-section />
        </main>
        <footer>
            <footer-piece />
        </footer>
    </v-app>
</template>

<style scoped>
main {
    position: relative;
    text-align: center;
    display: grid;
    justify-content: center;
}
</style>
