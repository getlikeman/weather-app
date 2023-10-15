<template>
  <ion-app>
    <Suspense>
      <HomePage/>

    </Suspense>
  </ion-app>
</template>

<script  setup lang="ts">
import {IonApp} from '@ionic/vue';
import HomePage from "@/views/HomePage.vue";
</script>
