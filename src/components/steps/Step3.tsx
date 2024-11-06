import OptionButton from "../buttons/OptionButton"
import "./stepsStyles.css"
import { stepThreeButtons } from "./stepsButtonsData.ts"


const Step3 = () => {
  return (
    <div>
      <p>¿Cuáles son tus principales desafios para 2024?</p>
      <div className="step2-buttons-conteiner">
        {
          stepThreeButtons.map((item, index) => (
            <OptionButton key={index} buttonName={item.buttonText} buttonLetter={item.buttonLetter} buttonType="B" buttonStep="challenge" />
          ))
        }
      </div>
    </div>
  )
}

export default Step3