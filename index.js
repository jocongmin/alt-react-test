import alt from "./alt.js";
import connectToStores from 'alt-utils/lib/connectToStores';
import React,{Component} from "react";
import {render} from "react-dom";
import DemoStore from "./_store/demo.js";
import DemoAction from "./_action/demo.js";

@connectToStores
class Demo extends Component{
	static getStores(){
		return [DemoStore];
	}
	static getPropsFromStores(){
		return DemoStore.getState();
	}
	constructor(props) {
		super(props);
		
	}
	render(){
		return(
				<div onClick={DemoAction.updateTodo.bind(DemoAction,'我是上看到房价是打飞机')}>{this.props.todos}</div>
			)
	}
}


render(<Demo/>, document.querySelector('#app'))