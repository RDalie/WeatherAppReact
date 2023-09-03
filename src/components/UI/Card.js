import React from 'react'
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={'container justify-content-center align-items-center w-75 h-50 pt-5 ps-5 pe-5  pb-5 ' + classes.card }>{props.children}</div>
  )
}

export default Card