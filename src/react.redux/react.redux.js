

const inst = {
	index:0
}

export function user(state = inst,action){
	switch(action.type){
		case "Login":
		  return state
		default:
		return state
	}
}


export function login(data){
	dispatch({type:"Login"})
}