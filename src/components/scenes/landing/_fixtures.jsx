import _ from 'lodash'
import React from 'react'

const fixtures = [
  {
    id: 1,
    place: 'Abu Dhabi',
    date: '27th May 2018',
  },
  {
    id: 2,
    place: 'London',
    date: '27th June 2018',
  },
  {
    id: 3,
    place: 'Paris',
    date: '27th July 2018',
  },
  {
    id: 4,
    place: 'Roma',
    date: '27th August 2018',
  },
  {
    id: 5,
    place: 'Madrid',
    date: '27th September 2018',
  },
  {
    id: 6,
    place: 'Sepang',
    date: '27th October 2018',
  },
  {
    id: 7,
    place: 'Singapore',
    date: '27th Novemebr 2018',
  },
  {
    id: 8,
    place: 'Bejing',
    date: '7th December 2018',
  },
  {
    id: 9,
    place: 'New York',
    date: '27th December 2018',
  },
  {
    id: 10,
    place: 'Sidney',
    date: '27th January 2019',
  }
]

const Fixtures = () => (
  <div className="container">
    <div className="section no-pad-bot">
      <div className="container">
        <h2 className="header header-title center teal-text text-lighten-2">
            Our Fixtures
        </h2>
      <table className="striped centered">
        <thead>
          <tr>
              <th>Place</th>
              <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {
            _.map(fixtures, x => (
              <tr>
                <td>{x.place }</td>
                <td>{x.date }</td>
                <td><a href="#" className="btn"> View </a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <br /><br />
      </div>
    </div>
  </div>
)

export default Fixtures
