import { GET_LIST } from './actionType'
const defaultState = {
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
}
export default (state = defaultState, action) => {
    console.log(action.data)
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: action.data
            }

        default:
            return state
    }
}