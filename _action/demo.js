import alt from "../alt.js";

class DemoActions{
	constructor() {
		this.generateActions(
				'updateTodo'
			)
	}
}


export default alt.createActions(DemoActions)