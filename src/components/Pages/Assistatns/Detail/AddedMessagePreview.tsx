import React, { FC } from 'react';

interface AddedMessagePreviewProps {
    answerType: string;
    message: any;
    answers: string[];
}

const AddedMessagePreview: FC<AddedMessagePreviewProps> = ({ message, answers, answerType }) => {
    return (
        <div className="w-[360px] min-h-[550px] relative bg-slate-200 rounded-lg">
            <h3 className="text-left text-gray-900 text-sm font-bold font-['DM Sans'] leading-normal h-14 p-4">Preview</h3>
            <div className="p-4">
                <div className="flex mb-1">
                    <img className="w-[21.39px] h-[21.40px] rounded-full mr-2" src="/assets/images/assistant-preview/preview1.png" />
                    <div className="text-black text-xs font-medium font-['Poppins'] leading-normal">{message.title === '' ? 'Intro' : message.title}</div>
                </div>
                <p className="text-black text-xs font-normal font-['Poppins'] leading-normal mb-3">{message.content === '' ? 'Here will be preview of your message. ' : message.content}</p>
                <div className={`${answerType !== 'button' ? 'rounded-xl bg-slate-50' : ''}`}>
                    {answers.map((item, index) => (
                        <label key={index} className={`flex px-6 py-3 mb-0 border-slate-200 ${answerType !== 'button' ? 'border-b-2' : 'min-h-[45px] rounded-[100px] bg-white mb-4'}`}>
                            {answerType === 'checkbox' && <input type="checkbox" className="form-checkbox preview text-[#D02DF5] peer mr-1" />}
                            {answerType === 'radio' && <input type="radio" name="preview_radio" className="form-radio preview text-[#D02DF5] peer mr-1" value="checkbox" />}
                            <span className="text-black text-sm font-normal font-['Poppins'] leading-normal">{item}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddedMessagePreview;
