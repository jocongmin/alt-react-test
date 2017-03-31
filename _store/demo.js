import alt from "../alt.js"

import DemoActions from "../_action/demo.js";

class DemoStore{
	constructor() {
		this.bindListeners({
			updateTodo:DemoActions.updateTodo
		})
		this.state={
			todos:'465456'
		}
	}
	updateTodo(todo){
		console.log(todo,'store todo')
		this.setState({
			todos:todo[0]
		})
	}
}

export default alt.createStore(DemoStore,'DemoStore')