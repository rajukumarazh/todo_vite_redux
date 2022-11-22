import { action_type } from '../constant';
// const todo = ['newtodo'];
var statess = [];
export default function reducer(state = statess, { type, payload }) {
	// console.log('action', payload, state);

	switch (type) {
		case action_type.ADD:
			return [...state, payload];
		case action_type.REMOVE:
			let dt = state.filter((curr) => {
				return curr !== payload;
			});
			return dt;

		default:
			return state;
	}
}
