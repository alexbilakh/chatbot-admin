import React, { FC } from 'react';
import IconDelete from '../../../Icon/common/IconDelete';

interface AddAnswerItemProps {
    answer: string;
    index: number;
    setAnswer: (value: string, index: number) => void;
    deleteAnswer: (index: number) => void;
}

const AddAnswerItem: FC<AddAnswerItemProps> = ({ answer, index, setAnswer, deleteAnswer }) => {
    return (
        <div className="flex w-full mb-2">
            <div className="w-10 h-10 p-2 justify-center items-start gap-2.5 inline-flex">
                <div className="w-6 h-6 bg-slate-500 rounded-[100px] justify-center items-center flex">
                    <div className="w-6 text-center text-white text-sm font-bold font-['DM Sans'] leading-normal">{index + 1}</div>
                </div>
            </div>
            <input className="w-full h-10 flex-1 px-3.5 py-2 bg-gray-900 rounded-lg shadow border border-slate-700" value={answer} onChange={(e) => setAnswer(e.target.value, index)}></input>
            <div className="w-8 h-8 p-2" onClick={() => deleteAnswer(index)}>
                <IconDelete />
            </div>
        </div>
    );
};

export default AddAnswerItem;
