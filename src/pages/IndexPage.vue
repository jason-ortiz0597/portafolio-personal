<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-none">
        <h2 class="text-center AnandaBlackPersonalUseRegular">
          Bienvenidos A Mi Web
        </h2>
        <p class="text-center HussarBold">
          Soy un desarrollador web full stack, me gusta crear aplicaciones web
          modernas y escalables.
        </p>
        <div class="flex justify-center">
          <q-btn
            color="primary"
            icon="cloud_download"
            label="Descargar CV"
            @click="downloadCV"
          />
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <q-img
          v-if="$q.dark.isActive"
          src="~assets/image/developer-dark.svg"
          alt="Developer"
        />
        <q-img v-else src="~assets/image/developer.svg" alt="Developer" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const hello = "Hello World";
    const ruta = ref("/cv/CV_JasonOrtiz.pdf");
    const test = ref("test");

    return {
      hello,
      ruta,
      test,

      downloadCV() {
        window.open(ruta.value);
      },
    };
  },
});
</script>
