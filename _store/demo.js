import alt from "../alt.js"

import DemoActions from "../_action/demo.js";
class DemoStore{
	constructor() {
		this.bindListeners({
			updateTodo:DemoActions.updateTodo
		})
		/*this.state={
			todos:'465456'
		}*/
		this.todos='4654654654654';
	}
	updateTodo(todo){
		console.log(todo,'store todo')
		this.todos=todo[0];
	}
}

export default alt.createStore(DemoStore)