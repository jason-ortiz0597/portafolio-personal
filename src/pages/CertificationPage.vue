<template>
  <div class="q-pa-md row items-start justify-center q-gutter-md">
    <q-card class="my-card" bordered flat v-if="$q.dark.isActive">
      <img loading="lazy" src="~assets/image/img011.jpg" />
      <q-card-section>
        <div class="text-subtitle2 HussarBold">
          Mantenimiento y Reparacion de Computadoras
        </div>
      </q-card-section>
      <q-card-section>
        <p class="GoldleafBoldPersonalUseBold">
          Este certificado abarca los conocimientos en mantenimiento y
          reparacion de computadoras como tambien la instalacion de software y
          hardware
        </p>
      </q-card-section>
    </q-card>

    <q-card
      class="my-card"
      bordered
      flat
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      v-else
    >
      <img loading="lazy" src="~assets/image/img011.jpg" />
      <q-card-section>
        <div class="text-subtitle2 HussarBold">
          Mantenimiento y Reparacion de Computadoras
        </div>
      </q-card-section>
      <q-card-section>
        <p class="GoldleafBoldPersonalUseBold">
          Este certificado abarca los conocimientos en mantenimiento y
          reparacion de computadoras como tambien la instalacion de software y
          hardware
        </p>
      </q-card-section>
    </q-card>

    <q-card class="my-card" bordered flat v-if="$q.dark.isActive">
      <img loading="lazy" src="~assets/image/img001.jpg" />
      <q-card-section>
        <div class="text-subtitle2 HussarBold">Experto En Redes</div>
      </q-card-section>
      <q-card-section>
        <p class="GoldleafBoldPersonalUseBold">
          Este certificacion abarca los conocimientos en redes CCNA I - CCNA II
          - CCNA III
        </p>
      </q-card-section>
    </q-card>

    <q-card
      class="my-card"
      bordered
      flat
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      v-else
    >
      <img loading="lazy" src="~assets/image/img001.jpg" />
      <q-card-section>
        <div class="text-subtitle2 HussarBold">Experto En Redes</div>
      </q-card-section>
      <q-card-section>
        <p class="GoldleafBoldPersonalUseBold">
          Este certificacion abarca los conocimientos en redes CCNA I - CCNA II
          - CCNA III
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CertificationPage",

  setup() {
    const contacto = ref("me llamo jason");

    return {
      contacto,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 300%
  max-width: 550px
</style>
