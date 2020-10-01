import * as React from 'react'
import Listing from '../../components/listing'
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
              <div className="columns">
                {propertyListings.map(listing => (
                  <Listing listing={listing} key={listing.address}/>
                ))}
              </div>
              )
            }}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </React.Fragment>
  )
}

export default Home