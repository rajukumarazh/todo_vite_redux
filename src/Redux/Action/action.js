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
export const completed = (data) => {
	return {
		type: action_type.COMPLETE,
		payload: data,
	};
};
export const uncompleted = (data) => {
	return {
		type: action_type.UNCOMPLETE,
		payload: data,
	};
};
