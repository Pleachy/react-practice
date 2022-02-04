// techincally not necessary to import react here
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

// setting a default for props in case one isn't passed down
Header.defaultProps = {
  title: 'Task Tracker',
}

// setting up prop types to gate our props
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// css can also be done on a component to component basis
// const headingStyle = {
//   color: 'blue',
//   backgroundColor: 'green'
// }

export default Header
