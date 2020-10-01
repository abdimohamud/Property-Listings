import * as React from 'react'
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import Hero from '../../components/hero'

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <div className="container">
        <PropertyListingsProvider >
          <PropertyListingsConsumer>
            {function(value) {
              const { propertyListings } = value
              return (
                <ul>
                  {propertyListings.map(listing => (
                    <li>{listing.title}</li>
                  ))}
                </ul>
              )
            }}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </React.Fragment>
  )
}

export default Home