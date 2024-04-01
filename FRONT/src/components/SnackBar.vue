<template>
      <v-snackbar timeout="2000" variant="tonal" :color="type" :v-model="control" @update:model-value="$emit('close-snackbar')">
        {{ message }}
      </v-snackbar>
</template>

<script lang="ts">
export default{
    name: 'snack-bar',
    props:{
        message: {
            type: String,
            required: true
        },
        control: {
            type: Boolean,
            required: true
        },
        type:{
          type: String,
          required: true
        }
    },
    emits: ["close-snackbar"]
}
</script>