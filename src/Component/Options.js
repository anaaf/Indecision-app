import React from 'react';
import Option from './Option'

 const Options = (props) => {
    return (
      <div>
       <div className="widget-header">
         <h3 className="widget-header__title">Your Options</h3>
          <button 
          className="button--link"
          onClick={props.handleDeleteOptions}>
          Remove All
          </button>
       </div>
     
      {props.options.length == 0 && <p className="widget__message">Please enter some options to get started</p>}
      <div>
      {props.options.map((option, index) => (
        <Option
         index = {index}
         key={option} 
         optionText = {option} 
         handleDeleteOption = {props.handleDeleteOption}
         /> 
         ))
      }
      </div>
      
         </div>
    )
  }

  export default Options