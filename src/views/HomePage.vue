<template>
<ion-page class="ion-text-center ion-justify-content-center"  style="color: red " v-if="!geo">
  <IonText >Для работы включите геолокацию</IonText>
</ion-page>
  <ion-page v-else>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Кононец Никита ПР-5\6
          <ion-icon :icon="refreshSharp" class="ion-float-end" @click="getInfo()"></ion-icon>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <IonText>{{ info?.name }}</IonText>
        <IonImg :src="weatherImg"></IonImg>
        <IonText>{{ info?.weather[0]?.description }} {{ info?.main?.temp }} c</IonText>
      </div>
      <IonList>
        <ion-item>Ветер: {{ info?.wind?.speed }} м\с</ion-item>
        <ion-item>Ощущается как: {{ info?.main?.feels_like }} c</ion-item>
        <ion-item>Мин/Макс с: {{ info?.main?.temp_min }} \ {{ info?.main?.temp_max }} с</ion-item>
        <ion-item>Давление: {{ info?.main?.pressure }} мм.рт.ст.</ion-item>
        <ion-item>Влажность: {{ info?.main?.humidity }} %</ion-item>
      </IonList>
    </ion-content>
  </ion-page>


</template>

<script async setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {refreshSharp} from "ionicons/icons";
import {Geolocation} from '@capacitor/geolocation';
import {onBeforeMount, ref} from "vue";

let info = ref()
let weatherImg = ref()
let geo = ref()
async function getInfo(){
  await Geolocation.checkPermissions().then(async res => {
    geo.value=true
    const coordinates:any = await Geolocation.getCurrentPosition().catch(e=>geo.value=false);
    let lat:any = coordinates?.coords?.latitude
    let lon:any = coordinates?.coords?.longitude
    if (res.location ==="granted") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&APPID=38272ce8593156877e08dca9ae26d16d`).then(res => res.json().then(res => {
        info.value = res;
        weatherImg.value = `https://openweathermap.org/img/wn/${res?.weather[0]?.icon}@4x.png`
      }))
    }
  })
}


onBeforeMount(async () => await getInfo())
</script>

<style scoped>
#container {
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
