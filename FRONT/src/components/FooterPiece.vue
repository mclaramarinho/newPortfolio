<template>
    <div class="footer_container">
        <div class="footer_content__container">
            <p>by Clara Marinho</p>
            <p>{{ year }} ©</p>
        </div>
        <div class="starry_bg"></div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'footer-piece',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
.footer_container {
    position: relative;
    text-align: center;
    background: linear-gradient(40deg, #004369, #01949a);
    height: 10vh;
}
.starry_bg {
    height: 100%;
    opacity: 0.3;
    background-image: url(../assets/starryBg.png);
    background-size: 4%;
    background-repeat: repeat;
    background-position: center;
}
.footer_content__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-white);
    > p:nth-child(1) {
        font-style: italic;
    }
}
</style>
