import alt from "../alt.js"

import DemoActions from "../_action/demo.js";
class DemoStore{
	constructor() {
		this.bindListeners({
			updateTodo:DemoActions.updateTodo,
			updateTestData:DemoActions.updateTestData
		})
		/*this.state={
			todos:'465456'
		}*/
		this.todos='4654654654654';
		this.testData='skfjsdkljfksdjfksdjf';
	}
	updateTodo(todo){
		console.log(todo,'store todo')
		this.todos=todo[0];
	}
	updateTestData(todo){
		this.testData=todo[0];
	}
}

export default alt.createStore(DemoStore)