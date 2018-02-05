/**
 * Created by Administrator on 2018/1/25.
 */
import { combineReducers } from 'redux'
import userInfo from './userinfo'
import store from './store'

export default combineReducers({
    userInfo,
    store
})