<template>
    <div class="grid_spacer" v-if="lr === 'right'"></div>
    <div class="skill_container">
        <p class="skill_title">{{ name }}</p>
        <v-progress-linear :model-value="level * 25"></v-progress-linear>
        <p class="skill_level">{{ levelDescription }}</p>
    </div>
    <div class="grid_spacer" v-if="lr === 'left'"></div>
</template>

<script lang="ts">
export default {
    name: 'skill-card',
    props: {

        lr:{
            type: String,
            required: true
        },
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
                this.levelDescription = this.$t('skillsSection.beginner')
            } else if (this.level === 2) {
                this.levelDescription = this.$t('skillsSection.intermediate')
            } else if (this.level === 3) {
                this.levelDescription = this.$t('skillsSection.advanced')
            } else if (this.level === 4) {
                this.levelDescription = this.$t('skillsSection.expert')
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
