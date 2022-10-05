import {
	get,
	post
} from '../api/api'


export const index = (params:object) => get('/api/index',params)

