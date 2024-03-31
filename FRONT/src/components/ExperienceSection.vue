<template>
    <section>
        <h1 class="section_title">Work Experience</h1>

        <div class="work_xp__container">
            <work-xp-item
                location="left"
                company="Company Name"
                role="Your role here"
                description="Description of the project. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus eget sem et ante dapibus gravida facilisis ac
                                    felis. Donec euismod tellus ac sem iaculis, in maximus ex semper. Maecenas
                                    dignissim arcu sapien, ac egestas dolor semper eget. Proin non tortor id
                                    metus viverra semper a eget orci. Ut est magna, tristique id tincidunt vel,
                                    mattis nec turpis. Nulla cursus magna non sem fringilla, et pulvinar orci
                                    tincidunt. Praesent eget ornare odio."
                start-year="2024"
                end-year="2024"
                duration="2 mo."
            />
            <work-xp-item
                location="right"
                company="Company Name"
                role="Your role here"
                description="Description of the project. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus eget sem et ante dapibus gravida facilisis ac
                                felis. Donec euismod tellus ac sem iaculis, in maximus ex semper. Maecenas
                                dignissim arcu sapien, ac egestas dolor semper eget. Proin non tortor id
                                metus viverra semper a eget orci. Ut est magna, tristique id tincidunt vel,
                                mattis nec turpis. Nulla cursus magna non sem fringilla, et pulvinar orci
                                tincidunt. Praesent eget ornare odio."
                start-year="2024"
                end-year="2024"
                duration="2 mo."
            />
        </div>
        <v-btn variant="outlined" append-icon="mdi-chevron-down">Show More</v-btn>
    </section>
</template>

<script lang="ts">
import WorkXpItem from '@/components/WorkXpItem.vue'
export default {
    name: 'xp-section',
    components: { WorkXpItem }
}
</script>

<style scoped>
.work_xp__container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
    column-gap: 2%;
    margin: 5% auto;
}
@media (max-width: 960px) {
    .work_xp__container {
        width: 95%;
    }
}
@media (min-width: 961px) {
    .work_xp__container {
        width: 85%;
    }
}
</style>
