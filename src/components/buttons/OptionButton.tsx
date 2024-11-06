import React from 'react'
import "./optionButton.css"
import { useResponses } from "../../Context/ResponsesContext"
import { Resp } from '../../Types/types';

interface Props {
  buttonName?: string;
  buttonType?: 'A' | 'B';
  buttonLetter?: string;
  buttonStep?: keyof Resp;
}

const OptionButton: React.FC<Props> = ({ buttonName = 'Boton', buttonType = "A", buttonLetter = "A", buttonStep }) => {
  const { responses, setResponses } = useResponses()

  const defineResponse = () => {
    if (buttonStep) {
      setResponses(prevResponses => ({
        ...prevResponses,
        [buttonStep]: prevResponses[buttonStep] === buttonName ? '' : buttonName
      }
      ));
    }
  };

  return (
    <button className={`${buttonType === "A" ? 'buttonA' : 'buttonB'} ${buttonName === responses[buttonStep!] ? "activeButton" : ""} `} onClick={defineResponse} >
      <div>
        {buttonType === "B" && <div className='button-letter'>{buttonLetter}</div>}
      </div>
      <div>
        {buttonName}
      </div>
    </button>
  )
}

export default OptionButton