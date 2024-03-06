import React, { useState } from 'react';
import Select from 'react-select';
import { AssistantPropI, validGeneralPropI } from '../../../../types/assistant';

interface generalPropsI {
  gptModels: any[];
  assistant: AssistantPropI;
  invalidGeneral: validGeneralPropI;
  onChange: (name: string, value: string | boolean) => void;
}

const General = ({ gptModels, assistant, invalidGeneral, onChange }: generalPropsI) => {
  return (
    <div className="panel mb-4 w-full px-4 pt-5 pb-6 bg-gray-900 rounded-xl flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-center text-white text-base font-bold font-['DM Sans'] leading-normal">General</div>
      <div className="flex gap-6 flex-wrap">
        <div className="w-[400px] h-16 flex-col justify-start items-start inline-flex">
          <div className="text-center text-white text-sm font-medium font-['DM Sans'] leading-normal">Add name</div>
          <input
            className={`${invalidGeneral.title ? 'border-red-500' : 'border-slate-700'} w-full h-10 px-3.5 py-2 bg-gray-900 rounded-lg shadow border `}
            value={assistant.title}
            onChange={(e) => onChange('title', e.target.value)}
          ></input>
        </div>
        <div className="w-[200px] h-16 flex-col justify-start items-start inline-flex custom-select">
          <div className="text-center text-white text-sm font-medium font-['DM Sans'] leading-normal">Select GPT model</div>
          {Object.keys(gptModels).length !== 0 && (
            <Select
              defaultValue={gptModels[1]}
              options={gptModels}
              isSearchable={false}
              className={`${invalidGeneral.gptModel ? 'border-red-500 border' : ''} w-[200px] bg-gray-900 rounded-lg`}
              onChange={(value) => onChange('gptModel', value.value)}
            />
          )}
        </div>
        <div className="w-[152px] h-10 px-3 py-2 rounded-lg border border-slate-500 flex-col justify-start items-start gap-2.5 inline-flex mt-[22px]">
          <div className="justify-start items-center gap-2 inline-flex">
            <input type="checkbox" className="form-checkbox" checked={assistant.isDefault} onChange={(e) => onChange('isDefault', e.target.checked)} />
            <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Set as default</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
