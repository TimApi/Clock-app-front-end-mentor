import { QouteRepository } from '@/repositories/QouteRepository'

export const QouteService = {
  getQoute: async () => {
    const data = await QouteRepository.getQoute()
    return { data }
  }
}
