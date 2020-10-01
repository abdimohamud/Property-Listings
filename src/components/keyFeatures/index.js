import React from "react";

import styles from "./styles.module.css";

class KeyFeatures extends React.Component {
  render() {
    const { features } = this.props;

    return (
      <>
        <p>Key Features</p>
        <ul className={styles.list}>
          {features.map(feature => (
            <li key={feature}>
              <small>{feature}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default KeyFeatures;
