<template>
  <q-page padding>
    <q-card flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Sobre Mi</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Perfil</div>
          <q-card-section>
            <p
              class="GoldleafBoldPersonalUseBold"
              v-for="bio in bios"
              :key="bio.id"
            >
              {{ bio.bio }}
            </p>
          </q-card-section>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            loading="lazy"
            src="~assets/image/profile3.jpg"
            class="rounded-borders"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />
    </q-card>

    <div>
      <h6 class="HussarBold">Tecnologias Usadas</h6>
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/mongodb.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>

        <q-separator />
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/mysql.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>

        <q-separator />
      </q-card>
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/nodejs.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>

        <q-separator />
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/expressjs.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>

        <q-separator />
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/laravel.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>

        <q-separator />
      </q-card>
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/vuejs.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>

        <q-separator />
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/quasar.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          >
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="bg-purple text-body2"
            >
              Quasar Framework
            </q-tooltip>
          </q-img>
        </q-card-section>

        <q-separator />
      </q-card>
    </div>

    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/git.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>

        <q-separator />
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <q-img
            src="~assets/image/github.svg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-card-section>

        <q-separator />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AboutMe",

  setup() {
    const AboutMe = ref("AboutMe");

    return {
      AboutMe,
      bios: [
        {
          id: 1,
          bio: "Hola Mi Nombre es Jason Raul Ortiz Saavedra soy Ingeniero de Sistemas, me gusta mucho el desarrollo de software y la programacion en general.",
        },
        {
          id: 2,
          bio: "Tengo muchas ganas de aprender y de seguir creciendo como profesional, cuento con disponibilidad inmediata para trabajar en cualquier proyecto.",
        },
        {
          id: 3,
          bio: "Actualmente vivo en la ciudad de Santa Cruz, Bolivia",
        },
      ],

      slide: ref(1),
      autoplay: ref(false),
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
