<template>
    <div class="skill_container">
        <p class="skill_title">{{ name }}</p>
        <v-progress-linear :model-value="level * 25"></v-progress-linear>
        <p class="skill_level">{{ levelDescription }}</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'skill-card',
    props: {
        name: {
            type: String,
            required: true
        },
        // TODO - Create type for the level skill
        level: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            levelDescription: ''
        }
    },
    created() {
        this.determineLevel()
    },
    methods: {
        determineLevel() {
            if (this.level === 1) {
                this.levelDescription = 'novice'
            } else if (this.level === 2) {
                this.levelDescription = 'intermediate'
            } else if (this.level === 3) {
                this.levelDescription = 'advanced'
            } else if (this.level === 4) {
                this.levelDescription = 'expert'
            }
        }
    }
}
</script>

<style scoped>
.skill_container {
    display: grid;
    justify-items: start;
}
.skill_title {
    font-size: 1.8rem;
    font-weight: 300;
}
.skill_level {
    font-size: 1.1rem;
    font-style: italic;
}
</style>
