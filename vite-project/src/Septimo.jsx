import React from 'react'
import PropTypes from "prop-types";

export const Septimo = ({title, subtitle}) => {

    Septimo.PropTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    };

  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </>
  )
}


