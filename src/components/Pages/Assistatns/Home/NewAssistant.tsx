import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconAddSquare from '../../../Icon/Assistants/IconAddSquare';

const NewAssistant = () => {
    const navigate = useNavigate();

    const goToCreateAssistant = () => {
        navigate('/assistants/create');
    };
    return (
        <div className="panel flex-1 py-[25px] px-6 h-[180px] flex justify-center items-center cursor-pointer" onClick={goToCreateAssistant}>
            <div className="flex">
                <IconAddSquare />
                <h5 className="ml-2 leading-6">Add new assistant</h5>
            </div>
        </div>
    );
};

export default NewAssistant;
