import { action_type } from '../constant';
// const todo = ['newtodo'];
var statess = {
	alltask:[],
	task:"",
	id:0,
status:""}
export default function reducer(state = statess, { type, payload }) {
	// console.log('action', payload, state);
	console.log("paylo",payload)
	switch (type) {
		case action_type.ADD:
			let st=state.alltask.push({task:payload,id:state.id++,status:""});
			return {...state}
		case action_type.REMOVE:
			console.log("paylo",payload)
			let dt = state.alltask.filter((curr) => {
				 return curr.id !== payload;
			});
			console.log("kk",dt)
			 return {...state,alltask:dt};
            case action_type.STATUS:
				let change=state?.alltask?.map((c)=>{
					if(c?.id==payload){
					return 	{...c,status:"done"}
					}
					else{
						return {...state}
					}
				})
				
				// return console.log(change,"changed")
				 return {...state,alltask:change}
		default:
			return state;
	}
}
