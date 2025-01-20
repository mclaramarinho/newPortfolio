import { createApp } from 'vue'
import App from './App.vue'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import { createI18n } from 'vue-i18n'
import { en } from '../src/i18n/en'
import '@mdi/font/css/materialdesignicons.css'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/main.css'
import { pt } from './i18n/pt'

const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    messages: {
        en: en,
        pt: pt
    }
})


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
app.use(i18n)
app.mount('#app')


if ("geolocation" in navigator) {
window.navigator.geolocation.getCurrentPosition(position => {
        alert(position.coords.latitude + ' ' + position.coords.longitude);
    }, err => {
        alert('ERROR: ' + err.code + ' ' + err.message);
    });
} else {
alert(
  "I'm sorry, but geolocation services are not supported by your browser.",
);
}
