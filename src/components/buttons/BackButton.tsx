import React from 'react'
import "./backButton.css"
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface Props {
    handleBackStep?: () => void;
}

const BackButton: React.FC<Props> = ({ handleBackStep }) => {
    return (
        <button className='button-back' aria-label="Volver" onClick={handleBackStep}><ArrowLeftIcon color='#231331' width={22} height={22} /></button>
    )
}

export default BackButton