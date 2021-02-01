import { GET_LIST } from './actionType'
import axios from 'axios'
export const getListAction = data => ({
    type: GET_LIST,
    data
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://rap2api.taobao.org/app/mock/274041/example/token').then((res) => {
            const data = res.data.data
            console.log(data)
            const action = getListAction(data)
            dispatch(action)
        })
    }
}