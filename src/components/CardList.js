import React from "react"
import Card from "./Card"

const CardList= ({robots}) =>{
	/*if(true)
		throw new Error("bruhbruh");*/
	const robotList=robots.map((element,i)=>
		<Card 
		key={i} 
		name={robots[i].name} 
		email={robots[i].email} 
		/>);
	return (
		robotList
		);
}
export default CardList;