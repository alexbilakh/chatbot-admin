import React, { useEffect, useState } from 'react';

import WizardItem from './WizardItem';
import { getAssistant, updateAssistantInstructions } from '../../../../api/assistant';

interface WizardListI {
  asstId?: string;
  assistant: any;
  fetchAssistant: () => void;
}

const WizardList = ({ asstId, assistant, fetchAssistant }: WizardListI) => {
  const updateInstructionsData = async (updatingInstruction: object) => {
    const updatingInstructions = { ...assistant.instructions, [Object.keys(updatingInstruction)[0]]: Object.values(updatingInstruction)[0] };
    await updateAssistantInstructions(assistant.id['$oid'], updatingInstructions);
    fetchAssistant();
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {assistant.instructions &&
        Object.keys(assistant.instructions).map((item, index) => (
          <WizardItem updateInstructionsData={updateInstructionsData} key={index} instructionQ={item} instructionA={assistant.instructions[item]} />
        ))}
    </div>
  );
};

export default WizardList;
