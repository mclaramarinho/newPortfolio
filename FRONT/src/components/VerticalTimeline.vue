<template>
    <div class="timeline_container">
        <div class="vertical_line"></div>
        <div class="circle" :class="variant === 'left' ? ' left_circle' : ' right_circle'"></div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'vertical-timeline',
    props: {
        variant: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.timeline_container {
    position: relative;
    height: 100%;
}
.vertical_line {
    width: 2px;
    height: 100%;
    background-color: var(--color-navy-blue);
}
.circle {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5vh;
    height: 1.5vh;
    border-radius: 100vw;
    background-color: var(--color-pinky-red);
}
.right_circle {
    top: -5%;
}
.left_circle {
    top: 10%;
}
</style>
