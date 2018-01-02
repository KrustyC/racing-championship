import React from 'react'

const Header = () => (
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h1 className="header header-title center teal-text text-lighten-2">
          Competition name
        </h1>
        <div className="row center">
          <h5 className="header header-subtitle col s12 light">
            Inserire una frase ad effetto 
          </h5>
        </div>
        <div className="row center">
          <a
            href="http://materializecss.com/getting-started.html"
            className="btn-large waves-effect waves-light teal lighten-1"
          >
            Get Started
          </a>
        </div>
        <br /><br />

      </div>
    </div>
    <div className="parallax">
      <img
        src="https://s3-eu-west-1.amazonaws.com/racing-cdn/racing2.jpg"
        alt="Unsplashed background img 1"
        style={{ display: 'block' }}
      />
    </div>
  </div>
)

export default Header