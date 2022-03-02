import {post} from '@api';

export const userLogin  = (params) => {return post('login',params);};