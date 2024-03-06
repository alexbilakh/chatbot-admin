import React, { FC, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Modal from '../../../Modal';

interface WizardEditModalProps {
  visibleWizardEditModal: boolean;
  instructionQ: string;
  instructionA: string;
  setVisibleWizardEditModal: (visibleWizardEditModal: boolean) => void;
  updateInstructionsData: (instruction: object) => void;
}

const WizardEditModal: FC<WizardEditModalProps> = ({ instructionQ, instructionA, updateInstructionsData, visibleWizardEditModal, setVisibleWizardEditModal }) => {
  const [instruction, setInstruction] = useState<string>(instructionA);
  const updateAsstInstructions = () => {
    updateInstructionsData({ [instructionQ]: instruction });
    setVisibleWizardEditModal(false);
  };
  return (
    <Modal visibleModal={visibleWizardEditModal} setVisibleModal={setVisibleWizardEditModal}>
      <Dialog.Panel as="div" className="panel border-0 overflow-hidden w-[480px] p-10 bg-slate-950 rounded-xl  h-[360px] max-w-lg text-black dark:text-white-dark">
        <div className="">
          <h4 className="text-center text-white text-base font-bold font-['DM Sans'] leading-normal mb-4">{instructionQ}</h4>
          <textarea className="w-full px-3.5 py-2 h-40 bg-gray-900 rounded-lg shadow border border-slate-700 mb-10" value={instruction} onChange={(e) => setInstruction(e.target.value)}></textarea>
          <div className="flex justify-center gap-2 items-center">
            <button type="button" className="btn btn-dark w-36 h-10 px-4 py-2 bg-slate-700 rounded-lg " onClick={() => setVisibleWizardEditModal(false)}>
              <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">cancel</span>
            </button>
            <button type="button" className="btn btn-dark w-36 h-10 px-4 py-2 bg-blue-600 border-blue-600 rounded-lg " onClick={updateAsstInstructions}>
              <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Update</span>
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

export default WizardEditModal;
