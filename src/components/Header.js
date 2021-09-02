import React from 'react'
import PropTypes from 'prop-types'

import '@styles/Header.scss'

const Header = ({ text }) => (
  <header className="header">
    <h1 className="header__title">{text}</h1>
  </header>
)

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header
