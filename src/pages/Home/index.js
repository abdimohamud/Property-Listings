import * as React from 'react'
import Listing from '../../components/listing'
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import Hero from '../../components/hero'
import Filter from '../../components/filter'
import BaseLayout from '../../components/baseLayout'

function Home() {
  return (
    <BaseLayout>
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ propertyListings, allListings, updateFilter }) => (
              <>
                <Filter
                  updateFilter={updateFilter}
                  count={propertyListings.length}
                  postcodes={allListings
                    .map(listing => listing.postcode.split(' ')[0])
                    .filter((item, i, arr) => arr.indexOf(item) === i)}
                />
                <div className="columns">
                  {propertyListings.map(listing => (
                    <Listing listing={listing} />
                  ))}
                </div>
              </>
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </BaseLayout>
  )
}

export default Home