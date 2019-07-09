import React from 'react';

const Option = (props) => {
    return (
     <div>
      <div className="widget__option">
      {props.index + 1}
      {`. `}
      {props.optionText}
      <button onClick={(e) =>
        props.handleDeleteOption(props.optionText)}
        className="button--link"
        >
        Remove
        </button> 
      </div>
     
    </div>  
    )
   }

   export default Option