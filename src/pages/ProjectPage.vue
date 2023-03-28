<template>
  <q-page class="fondoImage">
    <div class="row justify-center">
      <q-card class="col-12 col-md-8 col-lg-6">
        <q-card-section>
          <div class="text-h6 text-center">{{ proyecto }}</div>
        </q-card-section>
      </q-card>
    </div>

    <q-separator spaced inset vertical dark />

    <div class="row justify-center">
      <q-card class="col-12 col-md-8 col-lg-6">
        <q-card-section>
          <div class="text-h6 text-center">EN CONSTRUCCION MUY PRONTO</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProjectPage",

  setup() {
    const proyecto = ref("MIS PROYECTOS");

    return {
      proyecto,
    };
  },
});
</script>

<style>
.fondoImage {
  background-image: url("/src/assets/image/fondo.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
