import * as React from 'react'
import Hero from '../hero'

function BaseLayout({ children, miniHero = false }) {
  return (
    <>
      <main role="main" className="mb-3">
        <Hero miniHero={miniHero} />
        {children}
      </main>
      <footer className="text-center mb-5">
        Developed By
        {' '}
        <a
          href="https://github.com/abdimohamud/Property-Listings"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abdi Mohamud
        </a>
        , 2020
      </footer>
    </>
  )
}

export default BaseLayout
