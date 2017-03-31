import alt from "../alt.js";

class DemoActions{
	updateTodo(test){
		console.log(test,'action test')
		return {test}
	}
}


export default alt.createActions(DemoActions)