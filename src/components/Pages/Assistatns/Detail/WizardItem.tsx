import React, { useState } from 'react';
import IconEdit from '../../../Icon/common/IconEdit';
import IconQuestion from '../../../Icon/common/IconQuestion';
import WizardEditModal from './WizardEditModal';

interface WizardItemPropI {
  updateInstructionsData: (updatingInstruction: object) => void;
  instructionQ: string;
  instructionA: string;
}

const WizardItem = ({ updateInstructionsData, instructionQ, instructionA }: WizardItemPropI) => {
  const [visibleWizardEditModal, setVisibleWizardEditModal] = useState<boolean>(false);
  return (
    <>
      <div className="panel flex-1 p-4 h-[272px] rounded-xl flex-col justify-between items-start inline-flex">
        <div className="flex justify-between w-full">
          <div className="flex gap-1">
            <IconQuestion />
            <h6 className="text-white text-sm font-bold font-['DM Sans'] leading-normal">{instructionQ}</h6>
          </div>
          <span
            onClick={() => {
              setVisibleWizardEditModal(true);
            }}
          >
            <IconEdit />
          </span>
        </div>
        <p className="w-[333.33px] h-[168px] text-white text-sm font-normal font-['DM Sans'] leading-normal">{instructionA}</p>
      </div>
      <WizardEditModal
        instructionQ={instructionQ}
        instructionA={instructionA}
        visibleWizardEditModal={visibleWizardEditModal}
        setVisibleWizardEditModal={setVisibleWizardEditModal}
        updateInstructionsData={updateInstructionsData}
      />
    </>
  );
};

export default WizardItem;
