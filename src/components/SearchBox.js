import React from 'react';

const SearchBox= ({searchChange})=> 
{
	return(
		<div className="pa2">
			<input 
			type='search' 
			placeholder="search robots" 
			className="pa3 ba b--green bg-lightest-blue"
			onChange={searchChange}//every time a key is pressed event gets called that triggers the function of an object: searchChange
			/>
		</div>
		);
}
export default SearchBox;