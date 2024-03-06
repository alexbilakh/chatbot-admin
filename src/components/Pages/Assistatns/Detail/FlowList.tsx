import React, { useEffect, useState } from 'react';
import FlowItem from './FlowItem';
import IconAddSquare from '../../../Icon/Assistants/IconAddSquare';
import AddNewMessageModal from './AddNewMessageModal';
import { updateAssistantCommunications } from '../../../../api/assistant';
import { ulid } from 'ulid';

interface FlowListI {
  asstId?: string;
  assistant: any;
  fetchAssistant: () => void;
}

const FlowList = ({ asstId, assistant, fetchAssistant }: FlowListI) => {
  const [visibleAddNewMessageModal, setVisibleAddNewMessageModal] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState(false);

  const createCommunications = async (updatingFlow: object) => {
    setIsSaving(true);
    const communicationsFlowId = ulid();
    const flows = {
      ...assistant.communications_flow,
      [communicationsFlowId]: {
        ...updatingFlow,
      },
    };
    await updateCommunicationsInAPI(flows);
    await fetchAssistant();
    setIsSaving(false);
  };

  const updateCommunications = async (updatingFlow: object) => {
    setIsSaving(true);
    const activeCommunications = {
      ...assistant.communications_flow,
      ...updatingFlow,
    };
    await updateCommunicationsInAPI(activeCommunications);
    await fetchAssistant();
    setIsSaving(false);
  };

  const deleteCommunication = async (communicationKey: string) => {
    delete assistant.communications_flow[communicationKey];
    const deletingcommunications = {
      ...assistant.communications_flow,
    };
    await updateCommunicationsInAPI(deletingcommunications);
    await fetchAssistant();
    setIsSaving(false);
  };

  const updateCommunicationsInAPI = async (flows: object) => {
    await updateAssistantCommunications(asstId, flows);
    fetchAssistant();
  };

  const setVisibleModal = (val: boolean) => {
    setVisibleAddNewMessageModal(val);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {assistant.communications_flow &&
        Object.keys(assistant.communications_flow).map((item, index) => (
          <FlowItem isSaving={isSaving} objKey={item} item={assistant.communications_flow[item]} key={index} updateCommunications={updateCommunications} deleteCommunication={deleteCommunication} />
        ))}
      <div className="panel flex-1 py-[25px] px-6 h-[226px] flex justify-center items-center cursor-pointer" onClick={() => setVisibleAddNewMessageModal(true)}>
        <div className="flex">
          <IconAddSquare />
          <h5 className="ml-2 leading-6">Add new message</h5>
        </div>
      </div>
      <AddNewMessageModal visibleAddNewMessageModal={visibleAddNewMessageModal} setVisibleAddNewMessageModal={setVisibleModal} createCommunications={createCommunications} />
    </div>
  );
};

export default FlowList;
