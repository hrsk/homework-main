import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = [...state];
            stateCopy.sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? stateCopy : stateCopy.reverse()

            // need to fix
        }
        case 'check': {

            return state.filter(user => user.age > 18) // need to fix
        }
        default:
            return state
    }
}
