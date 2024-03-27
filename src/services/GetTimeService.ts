import { GettimeRepository } from "@/repositories/GetTimeRepository"

export const GetTimeService = {
    getTimeBasedOnLocation: () => {
        return GettimeRepository.getTimeBasedOnLocation()
    }
}