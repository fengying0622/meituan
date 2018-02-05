/**
 * Created by Administrator on 2018/2/5.
 */
import * as actionTypes from '../constants/store'

export default function store(state=[],action){
    switch(action.type){
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            return state.unshift(action.data)
        case actionTypes.STORE_RM:
            return state.filter((item)=>{
                if(item.id !== action.data.id){
                    return item
                }
            })
        default:
            return state
    }
}