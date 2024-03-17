import React from 'react';

let colors = ['green', 'red', 'blue'];




function UnorderedListJSX(){

  let colourElements = colors.map((colorName) => {
    return <li>{colorName}</li>;
  });
  
  return(


    <div>
    <ul>{colourElements}</ul>
    <hr/>
    
  </div>

  )

}

 export default UnorderedListJSX;
  

