import React from 'react'
import classes from './Button.module.css';

const Button = ({label,handler,type}) => {
  const cls = [
    classes.Button,
    classes[type]
  ]

  return (
    // <button className={cls.join(' ')}>Close</button>
  <button className={cls.join(' ')} onClick={handler}><span>{label}</span></button>
  )
}

export default Button
