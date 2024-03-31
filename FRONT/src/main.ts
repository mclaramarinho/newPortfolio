import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import '../node_modules/vuetify/dist/vuetify.min.css'

const lightTheme = {
    dark: false,
    colors: {
        beige: '#E5DDC8',
        teal: '#01949A',
        navyBlue: '#004369',
        pinkyRed: '#DB1F48',
        white: '#F8F8F8',

        primary: '#004369',
        secondary: '#01949A',
        accent: '#DB1F48',
        error: '#DB1F48',
        info: '#004369',
        success: '#01949A',
        warning: '#DB1F48'
    }
}

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            lightTheme
        }
    }
})

const app = createApp(App)

app.use(vuetify)
app.mount('#app')
