<template>
    <section id="contact_section">
        <h1 class="section_title">{{ $t('contactMeSection.title') }}</h1>
        <div class="contact_content__container">
            <div class="right_side__container container_side">
                <p class="contact_section__text">
                    {{ $t('contactMeSection.text') }}
                </p>
                <ul class="contacts_container">
                    <li class="contact_info__container">
                        <p class="contact_type">Email</p>
                        <p class="contact_data">{{ ci.email }}</p>
                    </li>
                    <li class="contact_info__container">
                        <p class="contact_type">{{ $t('contactMeSection.location.title') }}</p>
                        <p class="contact_data">{{ $t('contactMeSection.location.city') }} | {{ $t('contactMeSection.location.state') }} | {{ $t('contactMeSection.location.country') }}</p>
                    </li>
                    <li class="contact_info__container">
                        <p class="contact_type">Github</p>
                        <a :href="ci.github" target="blank" class="contact_data">{{ ci.github }}</a>
                    </li>
                    <li class="contact_info__container">
                        <p class="contact_type">Linkedin</p>
                        <a :href="ci.linkedin" target="blank" class="contact_data">{{ ci.linkedin }}</a>
                    </li>
                </ul>
            </div>
            <div class="left_side__container container_side">
                <v-form ref="contactForm">
                    <v-text-field :model-value="messageData.name" :rules="rules.name"
                                @input="(e : any) => messageData.name = e.target.value" :label="$t('contactMeSection.form.nameLabel')" />

                    <v-text-field :model-value="messageData.email" @input="(e : any) => messageData.email = e.target.value"
                                :rules="rules.email"
                                :label="$t('contactMeSection.form.emailLabel')"></v-text-field>

                    <v-text-field :model-value="messageData.phoneNumber" @input="(e : any) => messageData.phoneNumber = e.target.value"
                                :label="$t('contactMeSection.form.phoneLabel')"></v-text-field>

                    <v-textarea :model-value="messageData.message" @input="(e : any) => messageData.message = e.target.value"
                                :rules="rules.message" 
                                :label="$t('contactMeSection.form.messageLabel')" persistent-counter counter />

                    <v-btn @click="sendMessage" variant="elevated" :color="sendBtnColor">{{ $t('contactMeSection.form.button') }}</v-btn>
                </v-form>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {contactInfo} from "@/data/contactInfo"
export default {
    name: 'contact-section',
    data(){
        return{
            messageData: {
                name: "",
                email: "",
                phoneNumber: "",
                message: ""
            },
            emailRE: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
            rules:{
                name: [(v : string) => !!v || this.$t("contactMeSection.form.errorMsg.empty"), (v : string) => v.length <= 20 || this.$t("contactMeSection.form.errorMsg.max20")],

                email: [(v : string) => !!v || this.$t("contactMeSection.form.errorMsg.empty"),
                        (v : string) => new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$').test(v) || this.$t("contactMeSection.form.errorMsg.invalidEmail")],

                message: [(v : string) => !!v || this.$t("contactMeSection.form.errorMsg.empty"), (v : string) => v.length <= 1000 || this.$t("contactMeSection.form.errorMsg.max1000")],
            },
            ci: contactInfo,
            sendBtnColor: "var(--color-navy-blue)",
        }
    },
    methods:{
        async sendMessage(){
            const validate = await (this.$refs.contactForm as any).validate()
            if (!validate.valid) {return;}
            
            const url = 'https://new-portfolio-clamararinho.vercel.app/send-message';
            
            const body = {
                name: this.messageData.name,
                email: this.messageData.email,
                phoneNumber: this.messageData.phoneNumber || "not informed",
                message:  this.messageData.message
            };
            const opt = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            } as RequestInit;
            const req = await fetch(url, opt);

            if (req.status === 200){
                console.log("success");
                await (this.$refs.contactForm as any).reset();

                this.sendBtnColor = "success";

                setTimeout(() => {
                    this.sendBtnColor = "var(--color-navy-blue)";
                }, 5000);
            }else{
                this.$emit("contact-error")   
                this.sendBtnColor = "danger";

                setTimeout(() => {
                    this.sendBtnColor = "var(--color-navy-blue)";
                }, 5000);             
            }
        }
    },
    emits: ['contact-success', 'contact-error']
}
</script>

<style scoped>
a{
    text-decoration: none;
}
.contact_content__container {
    display: grid;
    margin-top: 5vh;
    margin-bottom: 20vh;
}
.left_side__container {
    text-align: end;
}
@media (max-width: 960px) {
    .contact_content__container {
        grid-template-columns: 1fr;
    }
    .right_side__container {
        text-align: center;
    }
}
@media (min-width: 960px) {
    .contact_content__container {
        grid-template-columns: 1fr 1fr;
    }
    .right_side__container {
        text-align: justify;
    }
}
.right_side__container {
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 5vh;
}
ul {
    list-style-type: none;
}
.container_side {
    padding: 5% 10%;
}
.contacts_container {
    display: grid;
    align-content: start;
    row-gap: 3vh;
}
.contact_type {
    font-weight: bold;
}
.contact_data {
    font-style: italic;
}
</style>
