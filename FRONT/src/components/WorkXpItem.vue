<template>
    <div v-if="location === 'right'" class="grid_spacer"></div>
    <vertical-timeline v-if="location === 'right'" variant="right" />
    <div :class="`work_xp__item ${location === 'left' ? 'left_work__item' : 'right_work__item'}`">
        <div v-if="location === 'right'" class="work_xp__duration">
            <p class="year">{{ startYear }} - {{ endYear }}</p>
            <p>{{ duration }}</p>
        </div>

        <div
            class="work_xp__content"
            :class="location === 'left' ? 'left_xp__content' : 'right_xp__content'"
        >
            <p class="company_name bold">{{ company }}e</p>
            <p class="role italic">{{ role }}</p>
            <p class="xp_desc__content">{{ description }}</p>

            <v-btn
                class="more_info__btn w-fit"
                :class="location === 'left' ? 'justify-end' : 'justify-start'"
                variant="outlined"
                prepend-icon="mdi-plus"
                @click="showDialog = !showDialog"
                >info</v-btn
            >
        </div>

        <div v-if="location === 'left'" class="work_xp__duration left_xp__duration">
            <p class="year">{{ startYear }} - {{ endYear }}</p>
            <p>{{ duration }}</p>
        </div>
    </div>
    <vertical-timeline v-if="location === 'left'" variant="left" />
    <div v-if="location === 'left'" class="grid_spacer"></div>

    <v-dialog max-width="500" v-model="showDialog">
        <v-card>
            <v-card-text>
                {{ description }}
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.company_name,
.year {
    font-size: 1.1rem;
    text-wrap: nowrap;
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
    position: relative;
    display: grid;
    text-align: justify;
    column-gap: 5%;
    row-gap: 2%;
}

.work_xp__content {
    display: grid;
    row-gap: 2%;
}
</style>

<script lang="ts">
import VerticalTimeline from '@/components/VerticalTimeline.vue'

export default {
    name: 'work-xp-item',
    components: { VerticalTimeline },
    props: {
        location: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        startYear: {
            type: String,
            required: true
        },
        endYear: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            showDialog: false
        }
    }
}
</script>
