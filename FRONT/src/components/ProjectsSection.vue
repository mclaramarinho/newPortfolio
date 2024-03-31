<template>
    <section>
        <h1 class="section_title">Projects</h1>
        <v-window continuous show-arrows>
            <template #prev="{ props }">
                <v-btn variant="text" icon="mdi-chevron-left"></v-btn>
            </template>
            <template #next="{ props }">
                <v-btn variant="text" icon="mdi-chevron-right"></v-btn>
            </template>
            <project-card
                title="Name of the project 1"
                :skills="['skill 1', 'skill 2', 'skill 3']"
                description="Description of the project. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus eget sem et ante dapibus gravida facilisis ac
                                    felis. Donec euismod tellus ac sem iaculis, in maximus ex semper.
                                    Maecenas dignissim arcu sapien, ac egestas dolor semper eget. Proin non
                                    tortor id metus viverra semper a eget orci. Ut est magna, tristique id
                                    tincidunt vel, mattis nec turpis. Nulla cursus magna non sem fringilla,
                                    et pulvinar orci tincidunt. Praesent eget ornare odio."
                image="placeholderimg.jpg"
            />
            <project-card
                title="Name of the project 1"
                :skills="['skill 1', 'skill 2', 'skill 3']"
                description="Description of the project. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus eget sem et ante dapibus gravida facilisis ac
                                    felis. Donec euismod tellus ac sem iaculis, in maximus ex semper.
                                    Maecenas dignissim arcu sapien, ac egestas dolor semper eget. Proin non
                                    tortor id metus viverra semper a eget orci. Ut est magna, tristique id
                                    tincidunt vel, mattis nec turpis. Nulla cursus magna non sem fringilla,
                                    et pulvinar orci tincidunt. Praesent eget ornare odio."
                image="placeholderimg.jpg"
            />
        </v-window>
    </section>
</template>

<script lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
export default {
    name: 'projects-section',
    components: { ProjectCard }
}
</script>

<style scoped>
h1 {
    margin-bottom: 5vh;
}
.v-window {
}
</style>
