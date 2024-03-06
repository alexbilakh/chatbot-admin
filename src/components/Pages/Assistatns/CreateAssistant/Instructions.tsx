import React, { useState } from 'react';

interface instructionsI {
  createAssistant: (instructionsProp: object) => void;
}

const Instructions = ({ createAssistant }: instructionsI) => {
  const [instructions, setInstructions] = useState<object>({
    'Who is acting?': '',
    'What data should be used and in which order?': '',
    'What is the goal of the conversation?': '',
    'Who is acting1?': '',
    'What is the goal of the conversation1?': '',
  });
  const [instructionIndex, setInstructionIndex] = useState<number>(0);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleInstruction = (value: string) => {
    setInstructions((prev) => ({ ...prev, [Object.keys(instructions)[instructionIndex]]: value }));
  };

  const prev = (index: number) => {
    setIsInvalid(false);
    if (index === 0) return;
    setInstructionIndex(index - 1);
  };

  const next = (index: number) => {
    if (index === Object.keys(instructions).length - 1) return;
    if (Object.values(instructions)[instructionIndex] === '') {
      setIsInvalid(true);
      return;
    }
    setInstructionIndex(index + 1);
    setIsInvalid(false);
  };

  const create = () => {
    if (Object.values(instructions)[instructionIndex] === '') {
      setIsInvalid(true);
      return;
    }
    setInstructions({
      'Who is acting?': '',
      'What data should be used and in which order?': '',
      'What is the goal of the conversation?': '',
      'Who is acting1?': '',
      'What is the goal of the conversation1?': '',
    });
    createAssistant(instructions);
    setIsInvalid(false);
  };

  return (
    <div className="panel px-4 pt-5 pb-6 bg-gray-900 rounded-xl flex-1 min-h-[764px]">
      <div className="w-full h-6 justify-between items-center inline-flex mb-4">
        <div className="text-center text-white text-base font-bold font-['DM Sans'] leading-normal">Instructions</div>
        <div className="justify-start items-start gap-1 flex">
          <div className="text-center text-white text-sm font-normal font-['DM Sans'] leading-normal">Step </div>
          <div className="text-center text-blue-600 text-sm font-bold font-['DM Sans'] leading-normal">{instructionIndex + 1} </div>
          <div className="text-center text-white text-sm font-normal font-['DM Sans'] leading-normal">from </div>
          <div className="text-center text-white text-sm font-normal font-['DM Sans'] leading-normal">{Object.keys(instructions).length}</div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full mb-4">
        {Object.keys(instructions).map((item, index) => (
          <button
            key={index}
            onClick={() => setInstructionIndex(index)}
            className={`${index === instructionIndex ? 'bg-blue-600 btn-primary' : 'bg-slate-700 border-slate-700'} btn h-10 px-4 py-2  rounded-[100px] mb-4`}
          >
            {item}
          </button>
        ))}
      </div>
      {Object.values(instructions).map(
        (item, index) =>
          index === instructionIndex && (
            <div key={index}>
              <div className="mb-[384px]">
                <textarea
                  value={item}
                  onChange={(e) => handleInstruction(e.target.value)}
                  className={`${isInvalid ? 'border-red-500' : ''} w-full px-3.5 py-2 h-[200px] bg-gray-900 rounded-lg shadow border border-slate-700`}
                  placeholder="Start typing"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => prev(index)}
                  className="w-36 h-10 px-4 py-2 bg-slate-700 rounded-lg shadow justify-center items-center gap-2 inline-flex text-white text-sm font-bold font-['DM Sans']"
                >
                  Prev
                </button>
                {instructionIndex < Object.keys(instructions).length - 1 && (
                  <button
                    onClick={() => next(index)}
                    className="w-36 h-10 px-4 py-2 bg-blue-600 rounded-lg shadow justify-center items-center gap-2 inline-flex text-white text-sm font-bold font-['DM Sans']"
                  >
                    Next
                  </button>
                )}
                {instructionIndex === Object.keys(instructions).length - 1 && (
                  <button onClick={create} className="w-36 h-10 px-4 py-2 bg-blue-600 rounded-lg shadow justify-center items-center gap-2 inline-flex text-white text-sm font-bold font-['DM Sans']">
                    Create
                  </button>
                )}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Instructions;
