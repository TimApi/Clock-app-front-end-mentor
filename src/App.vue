<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { QouteService } from './services/QouteService'
import { GetTimeService } from './services/GetTimeService'
import type { IQoute } from './repositories/QouteRepository'
import type { IDataBasedOnIp } from './repositories/GetTimeRepository'
import QouteComponent from './components/QouteComponent.vue'
import TimeBlock from './components/TimeBlockCompent.vue'
import dateFormat, { masks } from "dateformat";

const qouteData = ref<IQoute>()
const ipData = ref<IDataBasedOnIp>()
const currentTime = ref("")

const getQoute = async () => {
  const data = await QouteService.getQoute()
  qouteData.value = data.data.data
}

const getTimeBasedOnIpAdress = async () => {
  const response = await GetTimeService.getTimeBasedOnLocation()
  ipData.value = response.data
  console.log(response)
  currentTime.value = dateFormat(new Date(response.data.utc_datetime), "HH:MM");
}

onMounted(() => {
  getQoute()
  getTimeBasedOnIpAdress()
})
</script>

<template>
  <main class="container">
    <qoute-component v-if="qouteData" :data="qouteData" @get-new-qoute="getQoute()" />
    <time-block v-if="ipData" :ip-data="ipData" :time="currentTime" />
  </main>
</template>
