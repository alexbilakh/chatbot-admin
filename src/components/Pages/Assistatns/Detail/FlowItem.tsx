import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from '../../../Forms/Switch';
import IconEdit from '../../../Icon/common/IconEdit';
import IconDelete from '../../../Icon/common/IconDelete';
import IconChat from '../../../Icon/common/IconChat';
import AddNewMessageModal from './AddNewMessageModal';
import FlowItemDeleteModal from './FlowItemDeleteModal';

interface flowItemPropI {
  item: any;
  objKey: string;
  isSaving: boolean;
  updateCommunications: (item: object) => void;
  deleteCommunication: (key: string) => void;
}

const FlowItem = ({ item, updateCommunications, deleteCommunication, objKey, isSaving }: flowItemPropI) => {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [active, setActive] = useState(item.active);
  const [visibleAddNewMessageModal, setVisibleAddNewMessageModal] = useState<boolean>(false);

  const handleAcitve = (val: boolean) => {
    if (isSaving) return;
    setActive(val);
    const updatingFlowObj = { [objKey]: { ...item, active: val } };
    updateCommunications(updatingFlowObj);
  };

  const deleteFlowItem = () => {
    deleteCommunication(objKey);
  };

  return (
    <div className="panel py-[25px] px-6 h-[226px] rounded-xl flex-col flex">
      <div className="flex justify-between w-full mb-6">
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="w-6 h-6 relative">
            <IconChat />
          </div>
          <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">{item.title}</div>
        </div>
        {item.type === 'checkbox' && (
          <label className="inline-flex mb-0">
            <input type="checkbox" className="form-checkbox w-6 h-6 text-gray-500" defaultChecked disabled />
          </label>
        )}
        {item.type === 'radio' && (
          <label className="inline-flex mb-0">
            <input type="radio" className="form-radio w-6 h-6 text-gray-500" defaultChecked disabled />
          </label>
        )}
      </div>
      <p className="text-white text-sm font-normal font-['DM Sans'] leading-normal line-clamp-2 mb-2 truncate ">{item.body}</p>
      {item.type !== 'text' && (
        <div className="flex gap-[11px]">
          <div className="w-[84px] h-6 px-3 rounded-[100px] border border-sky-500 justify-center items-center gap-2.5 inline-flex">
            <span className="text-sky-500 text-sm font-normal font-['DM Sans'] leading-normal">Option 1</span>
          </div>
          <div className="w-[84px] h-6 px-3 rounded-[100px] border border-sky-500 justify-center items-center gap-2.5 inline-flex">
            <span className="text-sky-500 text-sm font-normal font-['DM Sans'] leading-normal">Option 2</span>
          </div>
          <div className="w-8 h-6 px-3 rounded-[100px] border border-sky-500 justify-center items-center gap-2.5 inline-flex">
            <div className="text-sky-500 text-sm font-normal font-['DM Sans'] leading-normal">...</div>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full mt-auto">
        <div className="flex gap-1">
          <Switch defaultChecked={active} handleSwitch={(val) => handleAcitve(val)} />
          <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Active</div>
        </div>
        <div className="flex gap-6">
          <div onClick={() => setVisibleAddNewMessageModal(true)}>
            <IconEdit />
          </div>
          <div onClick={() => setVisibleDeleteModal(true)}>
            <IconDelete />
          </div>
        </div>
      </div>
      <FlowItemDeleteModal visibleDeleteModal={visibleDeleteModal} setVisibleDeleteModal={setVisibleDeleteModal} deleteFlowItem={deleteFlowItem} />
      <AddNewMessageModal
        visibleAddNewMessageModal={visibleAddNewMessageModal}
        setVisibleAddNewMessageModal={setVisibleAddNewMessageModal}
        itemType={item.type}
        itemAnswers={item.answers}
        itemMessage={{ title: item.title, content: item.body }}
        isUpdate={true}
        communicationKey={objKey}
        updateCommunications={updateCommunications}
      />
    </div>
  );
};

export default FlowItem;
