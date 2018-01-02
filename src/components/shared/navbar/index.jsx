  import _ from 'lodash'
  import React, { Component } from 'react'
  import { Link } from 'react-router-dom'

  import './navbar.scss'

  export default class Navbar extends Component {

    render() {

      const links = [
        {
          path: '/',
          text: 'Home',
          icon: 'fa fa-home'
        },
        {
          path: '/calendar',
          text: 'Calendar',
          icon: 'fab fa-calendar'
        },
        {
          path: '/info',
          text: 'Info',
          icon: 'fa fa-id-card'
        },
      ]

      return (
        <nav className="navbar" role="navigation">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                { _.map(links, (x, k) => (
                  <li>
                  <Link key={k} className="navbar-item is-hidden-mobile" to={x.path} >
                    {x.text}
                  </Link>
                  </li>
                  )
                ) }
              </ul>
            </div>
        </nav>
      )
    }
  }
