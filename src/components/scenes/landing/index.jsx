import _ from 'lodash'
import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'

import Header from './_header.jsx'
import Central from './_central.jsx'
import Quote from './_quote.jsx'
import Video from './_video.jsx'
import Fixtures from './_fixtures.jsx'

import './landing.scss'

const Landing = () => (
  <div>
    <Header />
    <Central />
    <Video />
    <Fixtures />
    <Quote />
  </div>
)
export default Landing
