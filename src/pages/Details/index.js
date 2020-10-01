import * as React from 'react'
import Map from '../../components/map/'
import KeyFeatures from '../../components/keyFeatures'

function Details({propertyId}) {
  const features = [
    'Help to Buy available, ideal for first time buyers',
    'Within walking distance of the Northern Quarter, Ancoats & NOMA',
    'Exposed brickwork retaining the charm of the existing building',
    'Cycle storage',
    'Victorian Mill conversion',
    '13 unique 1,2 and 3 bed apartments available'
  ]
  return (
    <div>
        Show details for property with Id of {propertyId}
      <KeyFeatures features={features} />
      <Map />
    </div>
  )
}

export default Details