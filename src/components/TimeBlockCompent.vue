<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IDataBasedOnIp } from '../repositories/GetTimeRepository'
import ExpandedTimeInfo from './ExpandedTimeInfo.vue'

const expended = ref(false)

const props = defineProps<{
  ipData: IDataBasedOnIp
  time: string
}>()

const expendButtonText = computed(() => {
  if (expended.value) {
    return 'less'
  } else {
    return 'more'
  }
})

const toggleExpendedExtra = () => {
  expended.value = !expended.value
}
</script>

<template>
  <div>
    <div>
      <p class="uppercase">goodmorning it's currently</p>
    </div>
    <div>
      <p>{{ time }}<span class="ml-3">{{ ipData.abbreviation }}</span></p>
      <p>{{ ipData.timezone }}</p>
    </div>
    <button @click="toggleExpendedExtra">{{expendButtonText}}</button>
    <ExpandedTimeInfo v-if="expended" :data="ipData" />
  </div>
</template>
