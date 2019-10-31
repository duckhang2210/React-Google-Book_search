import React from "react";

const Parallax = (props) => {
    return(
        
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br/><br/>
            <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
            <br/><br/>
    
          </div>
        </div>
        <div className="parallax"><img src={props.backgroundImage} style={{ opacity: 0.9}} alt="Unsplashed background img 1" /></div>
      </div>
    
    )
}

export default Parallax;
