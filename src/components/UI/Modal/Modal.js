import React from 'react'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Modal.module.css'

const Modal = (props) => {
  console.log('Modal Updated')
  const { show, modalClosed } = props
  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Aux>
  )
}

export default Modal
