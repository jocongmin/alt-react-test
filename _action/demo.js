import alt from "../alt.js";

class DemoActions{
	constructor() {
		this.generateActions(
				'updateTodo',
				'updateTestData'
			)
	}
}


export default alt.createActions(DemoActions)