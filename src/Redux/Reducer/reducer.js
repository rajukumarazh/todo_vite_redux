import { action_type } from '../constant';
const todo = [];
function reducer(state = todo, { action }) {
	switch (action.type) {
		case ADD:
			return [...todo, 'hello'];

		default:
			state;
	}
}
