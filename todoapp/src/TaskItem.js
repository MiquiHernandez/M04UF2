


import React from 'react';


class TaskItem extends React.Component{

	render(){
	 return (		
		 <li>{this.prop.text} <button type= "button">🗑️ </button></li>
	 );
	}

}

export default TaskItem;
