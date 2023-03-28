<template>
  <div class="q-pa-md row items-start justify-center q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <p class="HussarBold">Hola Puedes comunicarte conmigo</p>
        <q-img
          src="~assets/image/contact.svg"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
        />
        <q-list>
          <q-item clickable class="q-pa-none">
            <q-item-section avatar>
              <q-icon color="primary" name="call" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Celular </q-item-label>
              <q-item-label caption>60964459</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable class="q-pa-none">
            <q-item-section avatar>
              <q-icon color="red" name="email" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Correo Electronico</q-item-label>
              <q-item-label caption>jasonortizsaavedra@gmail.com</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable class="q-pa-none">
            <q-item-section avatar>
              <q-icon color="amber" name="fa-solid fa-share-nodes" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Mis Redes</q-item-label>
              <q-btn
                no-caps
                push
                color="primary"
                text-color="white"
                label="Sigueme"
                @click="show(true)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "ContactPage",

  setup() {
    const $q = useQuasar();

    function show(grid) {
      $q.bottomSheet({
        message: "Sigue mis redes sociales",
        grid,
        actions: [
          {
            label: "Linkedin",
            icon: "fa-brands fa-linkedin",
            id: "Linkedin",
          },
          {
            label: "Github",
            icon: "fa-brands fa-github",
            id: "Github",
          },
          {
            label: "Whatsapp",
            icon: "fa-brands fa-whatsapp",
            id: "Whatsapp",
          },
          {
            label: "Facebook",
            icon: "fa-brands fa-facebook",
            id: "Facebook",
          },
        ],
      })
        .onOk((action) => {
          if (action.id === "Linkedin") {
            window.open(
              "https://www.linkedin.com/in/jason-ra%C3%BAl-ortiz-saavedra-43a278261/",
              "_blank"
            );
          } else if (action.id === "Whatsapp") {
            const phone = "60964459";
            const message = "Hola, me gustaría contactarte";
            const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
            window.open(url, "_blank");
          } else if (action.id === "Github") {
            window.open("https://github.com/jason-ortiz0597", "_blank");
          } else if (action.id === "Facebook") {
            window.open(
              "https://www.facebook.com/jason.ortiz.9212301",
              "_blank"
            );
          }
        })
        .onCancel(() => {
          // console.log('Dismissed')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return { show };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 200%
  max-width: 350px
</style>
