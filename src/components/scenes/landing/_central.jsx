import _ from 'lodash'
import React from 'react'

const items = [
  {
    icon: 'fa fa-tachometer',
    title: 'Speed',
    content: 'Nulla vel lacinia nunc. Quisque malesuada est sed ligula sodales, sit amet pulvinar sem aliquam. Sed sit amet lorem faucibus, efficitur nibh vitae, pharetra velit. Quisque non facilisis dolor. Nam hendrerit sapien quis ligula porta, nec tincidunt lorem tincidunt. Quisque maximus vitae leo at interdum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas..'
  },
  {
    icon: 'fa fa-car',
    title: 'Something',
    content: 'Nulla vel lacinia nunc. Quisque malesuada est sed ligula sodales, sit amet pulvinar sem aliquam. Sed sit amet lorem faucibus, efficitur nibh vitae, pharetra velit. Quisque non facilisis dolor. Nam hendrerit sapien quis ligula porta, nec tincidunt lorem tincidunt. Quisque maximus vitae leo at interdum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas..'
  },
  {
    icon: 'fa fa-signal',
    title: 'Else',
    content: 'Nulla vel lacinia nunc. Quisque malesuada est sed ligula sodales, sit amet pulvinar sem aliquam. Sed sit amet lorem faucibus, efficitur nibh vitae, pharetra velit. Quisque non facilisis dolor. Nam hendrerit sapien quis ligula porta, nec tincidunt lorem tincidunt. Quisque maximus vitae leo at interdum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas..'
  }
]


const Central = () => (
  <div className="container">
    <div className="section">
      <div className="row">
      {
        _.map(items, x => (
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center green-text darken-4">
                <i className={x.icon} />
              </h2>
              <h5 className="center">{x.title}</h5>

              <p className="light">{x.content}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  </div>
)

export default Central
