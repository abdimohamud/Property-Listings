import * as React from 'react'
import styles from "./styles.module.css";
import classnames from 'classnames'

function Hero() {
  
  const classes = classnames('hero', 'hero-lg', 'mb-3', styles.hero)
  return (
    <div className="hero hero-lg mb-3">
      <div className="hero-body text-center text-light">
        <h1>Premium Property Finder</h1>
        <p className="mb-0">Bringing premium property right to your fingertips</p>
      </div>
    </div>
  )
}

export default Hero