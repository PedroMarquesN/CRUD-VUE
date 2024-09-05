<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title D>
          Quasar App
        </q-toolbar-title>
          <q-toggle 
          v-model="isDark" 
          label="Dark Mode"
          color="secondary"  
          text-color="dark"
           />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menus
        </q-item-label>

        <q-item
        v-for="link in links"
        :key="link.label"
        :to="link.to"
      >
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.label }}</q-item-label>
        </q-item-section>
      </q-item>


      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import { Dark } from 'quasar';
import { ref, watch } from 'vue';


const isDark = ref(false); 

watch(isDark, (val) => {
  Dark.set(val);
  if (val) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

const links = [
  { label: 'Home', icon: 'home', to: '/' },
  { label: 'About', icon: 'info', to: '/about' },
  { label: 'Contact', icon: 'mail', to: '/contact' }
];
defineOptions({
  name: 'MainLayout'
});


const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
