<script setup lang="ts">
import type { IDataBasedOnIp } from '../repositories/GetTimeRepository'

type IProps = Pick<IDataBasedOnIp, 'timezone' | 'day_of_week' | 'week_number' | 'day_of_year'>

const props = defineProps<{
  data: IProps
}>()
</script>

<template>
  <div class="bg-gray-700 opacity-70">
    <div class="flex gap-x-20">
      <div class="w-6/12 border-r border-gray-800">
        <div>
          <p class="uppercase tracking-wider">currenttime</p>
          <p>{{ data.timezone }}</p>
        </div>
        <div>
          <p class="uppercase tracking-wider">day of the year</p>
          <p>{{ data.day_of_year }}</p>
        </div>
      </div>
      <div class="w-6/12">
        <div>
          <p class="uppercase tracking-wider">day of the week</p>
          <p>{{ data.day_of_week }}</p>
        </div>
        <div>
          <p class="uppercase tracking-wider">week number</p>
          <p>{{ data.week_number }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
