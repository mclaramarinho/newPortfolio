<template>
    <v-window-item>
        <v-card variant="flat" class="project_display__container">
            <img :src="'../src/assets/' + image" alt="" />

            <div class="project_desc__container">
                <a target="_blank" :href="url" class="project_title">{{ title }} 
                    <v-icon v-if="url.length > 0" icon="mdi-open-in-new"></v-icon>
                </a>
                <div class="project_skills__container">
                    <v-chip v-for="skill in skills" :key="skill">{{ skill }}</v-chip>
                </div>
                <p>
                    {{ description }}
                </p>
            </div>
        </v-card>
    </v-window-item>
</template>
<script lang="ts">
export default {
    name: 'project-card',
    props: {
        title: {
            type: String,
            required: true
        },
        skills: {
            type: Array<string>,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    data() {
        return {}
    },
    created() {}
}
</script>
<style scoped>
.project_display__container {
    display: grid;
    width: 80%;
    margin: 0 auto;
    padding: 0 2%;
    color: var(--color-navy-blue);
    row-gap: 3vh;
    column-gap: 2vw;
    text-align: justify;
    position: relative;
}
@media (min-width: 960px) {
    .project_display__container {
        grid-template-columns: 1fr;
    }
}
@media (min-width: 960px) {
    .project_display__container {
        grid-template-columns: 1fr 1fr;
    }
}
.project_desc__container {
    
    display: grid;
    row-gap: 1vh;
    align-content: start;
}
img {
    max-width: 100%;
}
.project_title {
    font-size: 1.8rem;
    text-decoration: none;
    color: var(--color-navy-blue);
    >.v-icon{
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
