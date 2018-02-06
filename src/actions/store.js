/**
 * Created by Administrator on 2018/2/5.
 */
import * as actionTypes from "../constants/store"

export const update = (data) =>{
    return {
        type : actionTypes.STORE_UPDATE,
        data
    }
}

export const add =(id) =>{
    return {
        type : actionTypes.STORE_ADD,
        id
    }
}

export const remove =(id)=>{
    return {
        type : actionTypes.STORE_RM,
        id
    }
}