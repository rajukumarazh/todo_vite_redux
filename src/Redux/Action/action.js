import { action_type } from '../constant';

export const addtodo = (data) => {
	return {
		type: action_type.ADD,
		payload: data,
	};
};
export const deltodo = (data) => {
	return {
		type: action_type.REMOVE,
		payload: data,
	};
};
export const changeStatus = (data) => {
	return {
		type: action_type.STATUS,
		payload: data,
	};
};
