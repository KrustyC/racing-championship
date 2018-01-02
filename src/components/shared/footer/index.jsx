import _ from 'lodash'
import React, { Component } from 'react'

class Footer extends Component {
  getLinks() {
    return [ 
      {
        value: 'Instagram',
        icon: 'instagram',
        link: 'https://instagram.com',
        color: '#333333'
      },
      {
        value: 'LinkedIn',
        icon: 'linkedin-in',
        link: 'https://www.linkedin.com/',
        color: '#007bb5'
      },
      {
        value: 'Facebook',
        icon: 'facebook-f',
        link: 'https://www.facebook.com/',
        color: '#3b5998'
      }
    ]
  }

  render(){
   return (
    <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul>
          {
            _.map(this.getLinks(), (x, k) => (
              <li key={k}>
                <a className="grey-text text-lighten-3" href={x.link} target="_blank">
                  <span className="fa-layers">
                    <i
                      style={{color: x.color}}
                      className={`fab fa-${x.icon} fa-2x`}
                      data-fa-transform="shrink-6"
                      data-fa-compose="fa fa-circle"
                    />
                    <span className="fa-layers-text" data-fa-transform="shrink-1 right-55">
                      {x.value}
                    </span>
                  </span>
                </a>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2018 Copyright
      
      <span className="grey-text text-lighten-4 right">
        Developed by{` `}
        <a className="indigo-text" href="#!">
          Motoracing consulting
        </a>
      </span>
      </div>
    </div>
  </footer>
        )
    }
}

export default Footer