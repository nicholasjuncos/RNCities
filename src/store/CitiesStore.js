import { observable } from 'mobx'
import uuidV4 from 'uuid/v4'

class CitiesStore {
    @observable cities = {
            [uuidV4()]: {
                name: 'London',
                country: 'UK',
                id: uuidV4()
            },
            [uuidV4()]: {
                name: 'Seattle',
                country: 'USA',
                id: uuidV4()
            }
        }

        addCity (city) {
        this.cities = {
            ...this.cities,
            [uuidV4()]: city
        }
    }
}

export default new CitiesStore()
