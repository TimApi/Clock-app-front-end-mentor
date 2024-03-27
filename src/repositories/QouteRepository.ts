import axios, { type AxiosResponse } from 'axios'

export interface IQoute {
  id: string
  content: string
  author: string
  tags: string[]
  authorSlug: string
  length: number
  dateAdded: string
  dateModified: string
}

export const QouteRepository = {
  getQoute: (): Promise<AxiosResponse<IQoute>> => {
    return axios.get('https://api.quotable.io/random/')
  }
}
