<template>
  <section class="no_margin__top">
    <div class="start_main__content">
      <p class="start_title">
        {{ $t("startSection.hello") }}
        <strong>{{ $t("startSection.name") }}</strong>
      </p>

      <div class="start_subtitle__container">
        <div class="hr"></div>
        <p class="start_subtitle__text">{{ $t("startSection.role") }}</p>
        <img src="../assets/icons/star.png" alt="" />
      </div>

      <p class="short_bio__text">{{ $t("startSection.bio") }}</p>

      <div class="action_buttons__container">
        <v-btn
          class="action_button"
          variant="elevated"
          color="var(--color-navy-blue)"
          @click="goToContactSection"
          >{{ $t("startSection.contactBtn") }}</v-btn
        >
        <a href="https://drive.usercontent.google.com/u/0/uc?id=1QUjwt5EBzcpnkjvUn04zLw-nMA6as46B&export=download">
          <v-btn prepend-icon="mdi-download" variant="outlined">{{
            $t("startSection.resumeBtn")
          }}</v-btn>
        </a>
      </div>
    </div>

    <div class="pic_container">
      <img src="../assets/ME.png" alt="" />
      <div class="linear_gradient"></div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "start-section",
  created() {
    console.log(this.$t("en.startSection.hello"));
  },
  methods: {
    goToContactSection() {
      this.$emit("scrollToContact");
    },
  },
  emits: ["scrollToContact"],
};
</script>

<style scoped>
.pic_container {
  position: relative;
  border-radius: 400px;
}
.action_buttons__container a{
  all: unset;
  display: inline-block;
}
.linear_gradient {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: linear-gradient(
    -180deg,
    #f8f8f800,
    #ffffff00,
    #ffffff00,
    #fbf9f4
  );
}
section {
  position: relative;
  display: inline-grid;
}
img {
  position: relative;
  max-width: 300px;
  width: 100%;
  height: auto;
}
.start_main__content {
  display: grid;
  row-gap: 2vh;
  text-align: justify;
}

@media (max-width: 960px) {
  section {
    grid-template-rows: auto auto;
    justify-items: center;
    text-align: center;
    height: fit-content;
  }
  .start_main__content {
    width: 80%;
  }
  .start_title {
    text-align: center;
  }
  .action_buttons__container {
    justify-items: center;
    .v-btn {
      margin: 0 auto;
    }
  }

  img {
    position: sticky;
  }
}
@media (min-width: 961px) {
  section {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .start_main__content {
    width: 60%;
    justify-self: center;
  }
  img {
    width: 75%;
  }
}
.start_title {
  font-size: 2.5rem;
  margin: 0;
}

.start_subtitle__container {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  column-gap: 3%;
}
.hr {
  width: 100%;
  height: 1px;
  background-color: var(--color-navy-blue);
}
.start_subtitle__text {
  font-size: 1.3rem;
  font-style: italic;
}
.short_bio__text {
  font-size: 1.1rem;
}
.action_buttons__container {
  display: flex;
  justify-content: space-between;
  row-gap: 2vh;
  column-gap: 2vw;
  flex-wrap: wrap;
}
.v-btn.action_button {
  color: white;
}
</style>
