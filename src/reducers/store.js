/**
 * Created by Administrator on 2018/2/5.
 */
import * as actionTypes from '../constants/store'

const initialState = []
export const store =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            return [
                ...state,
                {
                    id : action.id
                }
            ]
        case actionTypes.STORE_RM:
            return state.filter(item=>{
                if(item.id !== action.id){
                    return item
                }
            })
        default:
            return state
    }
}
