import React from 'react';  

 const Action = (props) => {
    return (
      <div>
      <button 
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOption()}
       >
       What Should I do ?
       </button>
    </div>
    )
  }

  export default Action;