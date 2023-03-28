<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>
          <q-btn
            flat
            label="My Portfolio"
            to="/"
            class="text-white"
            style="text-decoration: none"
          />
        </q-toolbar-title>

        <q-btn
          class="q-mr-xs"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'wb_sunny' : 'nights_stay'"
        >
          <q-tooltip
            transition-show="rotate"
            transition-hide="rotate"
            class="bg-purple text-body2"
          >
            {{ $q.dark.isActive ? "Modo Claro" : "Modo Oscuro" }}
          </q-tooltip>
        </q-btn>

        <q-btn
          round
          dense
          flat
          color="white"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          @click="$q.fullscreen.toggle()"
          v-if="$q.screen.gt.sm"
        >
          <q-tooltip
            transition-show="rotate"
            transition-hide="rotate"
            class="bg-purple text-body2"
          >
            Pantalla Completa
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    icon: "home",
    to: "/",
  },
  {
    title: "Acerca de Mi",
    icon: "account_circle",
    to: "/about",
  },

  {
    title: "Certificaciones",
    icon: "workspace_premium",
    to: "/certification",
  },

  {
    title: "Proyectos",
    icon: "laptop",
    to: "/projects",
  },
  {
    title: "Contacto",
    icon: "connect_without_contact",
    to: "/contact",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
