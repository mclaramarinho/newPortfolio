<script lang="ts">
export default{
    name: 'show-more-btn',
    props:{
        moreOrLess:{
            type:String,
            required: true
        }
    },
    emits: ['click']
}
</script>

<template>
    <v-btn variant="outlined" :append-icon="moreOrLess === 'more' ? 'mdi-chevron-down' : 'mdi-chevron-up'" @click="$emit('click')">
        {{ moreOrLess === 'more' ? $t('buttons.showMore') : $t('buttons.showLess')}}
    </v-btn>
</template>