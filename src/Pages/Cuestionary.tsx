import { useState } from 'react'
import "./cuestionary.css"
import person from "../assets/img/Group-178.png"
import logo from "../assets/img/Group-86.png"
import NextStepButton from '../components/buttons/NextStepButton'
import BackButton from '../components/buttons/BackButton'
import { useResponses } from "../Context/ResponsesContext"
import Step1 from '../components/steps/Step1'
import Step2 from '../components/steps/Step2'
import Step3 from '../components/steps/Step3'
import Step4 from '../components/steps/Step4'
import Step5 from '../components/steps/Step5'
import Step6 from '../components/steps/Step6'

const Cuestionary = () => {
    const { responses } = useResponses();
    const [step, setStep] = useState<number>(1);

    const handleNextStep = () => { if (step < 6) setStep(prevStep => prevStep + 1) }
    const handleBackStep = () => { if (step >= 1) setStep(prevStep => prevStep - 1) }
    const percent = [17, 34, 50, 67, 84, 100];


    let nextButtonName = '';
    step === 1 ? nextButtonName = "Comenzar" :
        step === 6 ? nextButtonName = "Finalizar" :
            nextButtonName = "Siguiente"

    const isStepValid = () => {
        switch (step) {
            case 1:
                return responses.name !== '';
            case 2:
                return responses.position !== '';
            case 3:
                return responses.challenge !== '';
            case 4:
                return responses.crm !== '';
            case 5:
                return responses.industry !== '';
            default:
                return true;
        }
    };


    return (
        <div className={`${step === 6 ? "gradient-background" : ""} cuestionary`}>
            <div className='progress-bar'>
                <div className='progress' style={{ width: `${percent[step - 1]}%` }}></div>
            </div>
            <div className='cuestionary-items'>
                <div className='step-conteiner'>

                    <div className='content'>
                        <div className='logo-and-buttons'>
                            <img src={logo} alt="customerScoops logo" className='desktop-logo' />
                            {step === 1 && <Step1 />}
                            {step === 2 && <Step2 />}
                            {step === 3 && <Step3 />}
                            {step === 4 && <Step4 />}
                            {step === 5 && <Step5 />}
                            {step === 6 && <Step6 />}
                        </div>

                        <div className='buttons-conteiner'>
                            <div className='back-button-container'>
                                {(step !== 1 && step !== 6) && <BackButton onClick={handleBackStep} />}
                            </div>
                            <NextStepButton
                                buttonName={nextButtonName}
                                onClick={handleNextStep}
                                disabled={!isStepValid()}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`back-img ${step !== 6 ? "gradient-background" : ""} `}>
                <div className='step'>
                    0{step} <span className='total-step'>| 06</span>
                </div>
                <img src={logo} alt="customerScoops logo" className='movil-logo' />

                <img src={person} alt="persona mirando el movil" className='guy-img' />
            </div>

        </div>
    )
}

export default Cuestionary