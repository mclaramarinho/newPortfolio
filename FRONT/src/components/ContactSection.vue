<template>
    <section id="contact_section">
        <h1 class="section_title">Contact Me</h1>
        <div class="contact_content__container">
            <div class="right_side__container container_side">
                <p class="contact_section__text">
                    Description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Phasellus eget sem et ante dapibus gravida facilisis ac felis. Donec
                    euismod tellus ac sem iaculis, in maximus ex semper. Maecenas dignissim arcu
                    sapien, ac egestas dolor semper eget.
                </p>
                <ul class="contacts_container">
                    <li class="contact_info__container">
                        <p class="contact_type">Email</p>
                        <p class="contact_data">youremail@email.com</p>
                    </li>
                    <li class="contact_info__container">
                        <p class="contact_type">Location</p>
                        <p class="contact_data">City | State | Country(abbr)</p>
                    </li>
                    <li class="contact_info__container">
                        <p class="contact_type">Github</p>
                        <p class="contact_data">githuburl</p>
                    </li>
                    <li class="contact_info__container">
                        <p class="contact_type">Linkedin</p>
                        <p class="contact_data">githuburl</p>
                    </li>
                </ul>
            </div>
            <div class="left_side__container container_side">
                <v-form ref="contactForm">
                    <v-text-field :model-value="messageData.name" :rules="rules.name"
                                @input="(e) => messageData.name = e.target.value" label="Your Name" />

                    <v-text-field :model-value="messageData.email" @input="(e) => messageData.email = e.target.value"
                                :rules="rules.email"
                                label="Your Email"></v-text-field>

                    <v-text-field :model-value="messageData.phoneNumber" @input="(e) => messageData.phoneNumber = e.target.value"
                                label="Your Phone Number"></v-text-field>

                    <v-textarea :model-value="messageData.message" @input="(e) => messageData.message = e.target.value"
                                :rules="rules.message" 
                                label="Your Message" persistent-counter counter />

                    <v-btn @click="sendMessage" variant="elevated" color="var(--color-navy-blue)">SEND</v-btn>
                </v-form>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
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
                name: [(v : string) => !!v || "Field required", (v : string) => v.length <= 20 || "Max. 20 characters"],

                email: [(v : string) => !!v || "Field required",
                        (v : string) => new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$').test(v) || "This is not a valid email"],

                message: [(v : string) => !!v || "Field required", (v : string) => v.length <= 1000 || "Max. 1000 characters"],

            }
        }
    },
    methods:{
        async sendMessage(){
            const validate = await this.$refs.contactForm.validate()
            if (!validate.valid) {return;}
            
            const url = 'http://localhost:3000/send-message';
            
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
                // show success
                console.log("success");
                
            }else{
                // show error
                console.log("error");
                
            }
        }
    }
}
</script>

<style scoped>
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
