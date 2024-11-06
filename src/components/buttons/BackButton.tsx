import React from 'react'
import "./backButton.css"
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface Props {
    onClick?: () => void;
}

const BackButton: React.FC<Props> = ({ onClick }) => {
    return (
        <button className='button-back' onClick={onClick}><ArrowLeftIcon color='#231331' width={22} height={22}  /></button>
    )
}

export default BackButton