import React from 'react'
import "./nextStepButton.css"

interface Props {
  buttonName?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const NextStepButton: React.FC<Props> = ({ buttonName = 'Boton', onClick, disabled }) => {
  return (
    <button aria-label='Boton siguiente' disabled={disabled} className={disabled ? 'button-next-disabled' : 'button-next'} onClick={onClick}>{buttonName}</button>
  )
}

export default NextStepButton