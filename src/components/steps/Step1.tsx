import { useResponses } from "../../Context/ResponsesContext"
import "./stepsStyles.css"

const Step1 = () => {
    const { responses, setResponses } = useResponses();

    return (
        <div className="current-step">
            <p>Muchas gracias por tu interés en <b>Client Aura</b>, que a través de Formularios Conversacionales Inteligentes te ayudamos a aumentar el valor y rentabilidad de tu negocio.</p>
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
