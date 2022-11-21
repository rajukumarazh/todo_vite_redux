import { action_type } from '../constant';
const addtodo = (data) => {
	return {
		type: action_type.ADD,
		payload: data,
	};
};
