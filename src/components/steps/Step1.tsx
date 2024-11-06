import { useResponses } from "../../Context/ResponsesContext"
import "./stepsStyles.css"

const Step1 = () => {
    const { responses, setResponses } = useResponses();

    return (
        <div>
            <p>Muchas gracias por tu interés en conocer <b>customerScoops</b>, que a través de Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad de tu negocio.</p>
            <p>Queremos conocerte, ¿Cuál es tu nombre?</p>
            <input
                onChange={(e) => setResponses(prev => ({ ...prev, name: e.target.value }))}
                type="text"
                value={responses.name}
                placeholder="Nombre"
                className="input-name"
                maxLength={50}
            />
        </div>
    );
};

export default Step1;
