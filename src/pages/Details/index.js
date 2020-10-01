import * as React from 'react'

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import PropertyDetails from '../../components/propertyDetails'
import Hero from '../../components/hero'

function Details({ propertyId }) {
  return (
    <React.Fragment>
      <Hero miniHero/>
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ getListingByPropertyId }) => (
              <PropertyDetails listing={getListingByPropertyId(propertyId)} />
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>      
    </React.Fragment>

  )
}

export default Details