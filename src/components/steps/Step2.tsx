import OptionButton from "../buttons/OptionButton"
import "./stepsStyles.css"
import { stepTwoButtons } from "./stepsButtonsData.ts"
import { useResponses } from "../../Context/ResponsesContext"

const Step2 = () => {
  const { responses } = useResponses();

  return (
    <div>
      <p><b>Genial {responses.name},</b> ahora nos gustaria tener cierta info para diseñar una gran propuesta de valor para ti: </p>
      <p>¿Cual es tu cargo/posicion dentro de tu empresa?</p>
      <div className="step2-buttons-conteiner">
        {
          stepTwoButtons.map((item, index) => (
            <OptionButton key={index} buttonName={item.buttonText} buttonStep="position" />
          ))
        }
      </div>
    </div>
  )
}

export default Step2