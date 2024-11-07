import OptionButton from "../buttons/OptionButton"
import "./stepsStyles.css"
import { stepFourButtons } from "./stepsButtonsData.ts"


const Step4 = () => {
  return (
    <div className="current-step">
      <p>¿Cuáles CRM están usando en tu empresa? <br /> CRM:</p>     
      <div className="step2-buttons-conteiner">
        {
          stepFourButtons.map((item, index) => (
            <OptionButton key={index} buttonName={item.buttonText} buttonStep="crm" />
          ))
        }
      </div>
    </div>
  )
}

export default Step4