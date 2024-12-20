import { useResponses } from "../../Context/ResponsesContext";


const Step6 = () => {
    const { responses } = useResponses();
    console.log(responses);

    return (
        <div className='step6 current-step'>
            <h2>Muchas Gracias</h2>
            <p>por querer ser parte <br /> de la familia de <b>Client Aura.</b></p>
            <p className='bye-text'>Nos vemos pronto!</p>
        </div>
    )
}

export default Step6