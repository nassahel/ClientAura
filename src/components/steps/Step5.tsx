import OptionButton from "../buttons/OptionButton"
import "./stepsStyles.css"
import { stepFiveButtons } from "./stepsButtonsData.ts"


const Step5 = () => {
  return (
    <div className="current-step">
      <p><b>Ahora te vamos a sorprender...</b> <br /> ¿Acuál industria pertenece tu empresa? </p>     
      <div className="step2-buttons-conteiner">
        {
          stepFiveButtons.map((item, index) => (
            <OptionButton key={index} buttonName={item.buttonText} buttonStep="industry" />
          ))
        }
      </div>
    </div>
  )
}

export default Step5