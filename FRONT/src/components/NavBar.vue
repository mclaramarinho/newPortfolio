<template>
    <nav>
        <p>CM</p>
        <v-btn icon="mdi-translate" variant="text" @click="handleLanguageChange"></v-btn>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'nav-bar',
    methods:{
        handleLanguageChange(){
            const current = this.$i18n.locale;
            if (current === 'en'){
                this.$i18n.locale = 'pt';
            }else{
                this.$i18n.locale = 'en';
            }
        }
    }
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3vh 4vw;
    color: var(--color-navy-blue);
}
p {
    font-family: 'Fjalla One', sans-serif;
    font-weight: bold;
    font-size: 2rem;
}
.v-btn {
    font-size: 1rem;
}
</style>
