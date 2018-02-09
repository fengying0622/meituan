import { Http } from '../util/http';

//login
export const userLogin = (params)=>Http.post('POST//login',params);

//detail selectById
export const detailByID = (params)=>Http.post('POST//detail',params);

//category
export const getCategory = ()=>Http.get('GET//adverHead');

//likeList
export const getLikeList = ()=>Http.get('GET//likeList');

//comment
export const commentByID = (params)=>Http.post('POST//comment',params);

//buyList
export const buyList = (params)=>Http.get('POST//buyList',params);

//commentSubmit
export const commentSubmit = (params)=>Http.post('POST//commentSubmit',params);
