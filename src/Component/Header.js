import React from 'react'; 

const Header = (props) => {
    return (  
      <div class="Header">
        <div className="container">
        <h1 class="header__title">{props.title}</h1>
        <h3 class="header__subtitle">{props.subTitle}</h3>
        </div>
      </div>
   )
    }

 export default Header   