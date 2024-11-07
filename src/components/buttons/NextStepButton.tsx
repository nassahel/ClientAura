import React from 'react'
import "./nextStepButton.css"

interface Props {
  buttonName?: string;
  handleNextStep?: () => void;
  disabled?: boolean;
}

const NextStepButton: React.FC<Props> = ({ buttonName = 'Boton', handleNextStep, disabled }) => {
  return (
    <button aria-label='Boton siguiente' disabled={disabled} className={disabled ? 'button-next-disabled' : 'button-next'} onClick={handleNextStep}>{buttonName}</button>
  )
}

export default NextStepButton