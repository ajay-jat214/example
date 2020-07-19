import React from 'react';

export default class InputArea extends React.Component{

	render(){

	const fun=(event)=>{
       console.log(event.target.value)
	}

	return(
         <div className=""><textarea style={{width:"800px",height:"100px"}} onChange={this.props.answ}/></div>
		);
}
} 
