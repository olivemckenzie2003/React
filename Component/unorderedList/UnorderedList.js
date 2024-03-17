
import React from "react";


const data = [
  { name: 'Zendurf', age: 86 },
  { name: 'Wolfgang', age: 57 },
    { name: 'Jen', age: 31 },
  ];



	class UnorderedList extends React.Component {
  	  render() {
  	    const listItems = data.map((item) => (
  	      <li key={item.name}>{item.name} (Age: {item.age})</li>
  	    ));
  	
      return <ul>{listItems}</ul>;
  	  }
  	}
  	
  	export default UnorderedList;


    
      



