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

export const add =(data) =>{
    return {
        type : actionTypes.STORE_ADD,
        data
    }
}

export const remove =(data)=>{
    return {
        type : actionTypes.STORE_RM,
        data
    }
}