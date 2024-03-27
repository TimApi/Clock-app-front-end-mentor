import axios, { type AxiosResponse } from 'axios'


export interface IDataBasedOnIp {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean
  dst_from: number | null
  dst_offset: number
  dst_until: null
  raw_offset: number
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
}

export const GettimeRepository = {
  getTimeBasedOnLocation: (): Promise<AxiosResponse<IDataBasedOnIp>> => {
    return axios.get('http://worldtimeapi.org/api/ip"')
  }
}
